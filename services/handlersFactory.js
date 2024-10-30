const asyncHandler = require("express-async-handler");
const ApiError = require("../utils/apiError");
const ApiFeatures = require("../utils/apiFeauters");
const cloudinary = require("cloudinary");
const dotenv = require("dotenv");
const { default: axios } = require("axios");
const OpenAIApi = require("openai");
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_MAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

exports.cloudinaryImageUploadMethod = async (file) => {
  return new Promise((resolve) => {
    cloudinary.v2.uploader.upload(file, (err, res) => {
      if (err) return res.status(500).send("upload image error");

      resolve({
        res: res.secure_url,
      });
    });
  });
};

exports.getOne = (Model, populationOpt) =>
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    let query = Model.findById(id);
    if (populationOpt) {
      query = query.populate(populationOpt);
    }
    const collection = await query;
    if (!collection) {
      return next(new ApiError(`No collection For This id ${id}`, 404));
    }
    res.status(200).json({ data: collection });
  });

exports.getAll = (Model, modelname = "") =>
  asyncHandler(async (req, res) => {
    let filter = {};
    if (req.filterObj) {
      filter = req.filterObj;
    }
    // Build query
    const countDocuments = await Model.countDocuments();
    const apiFeauters = new ApiFeatures(Model.find(filter), req.query)
      .pagination(countDocuments)
      .filter()
      .search(modelname)
      .limitFields()
      .sort();
    // Excute query
    const { mongooseQuery, paginateResult } = apiFeauters;
    const collection = await mongooseQuery;
    res
      .status(200)
      .json({ results: collection.length, paginateResult, data: collection });
  });

exports.create = (Model) =>
  asyncHandler(async (req, res) => {
    try {
      let urlsOfscreenshot = {};
      if (req.file) {
        const { path } = req.file;
        const newPath = await this.cloudinaryImageUploadMethod(path);
        urlsOfscreenshot = newPath;
      }

      if (urlsOfscreenshot) {
        req.body.screenshot = urlsOfscreenshot.res;
      }

      const collection = await Model.create(req.body);
      res.status(201).json({ data: collection });
    } catch (error) {
      if (error.code === 11000) {
        return res.status(400).json({
          message: "This attribute already exists",
        });
      }
      res.status(500).json({ error: error.message });
    }
  });

exports.updateOne = (Model) =>
  asyncHandler(async (req, res, next) => {
    let urlsOfscreenshot = {};
    if (req.file) {
      const { path } = req.file;
      const newPath = await this.cloudinaryImageUploadMethod(path);
      urlsOfscreenshot = newPath;
    }

    if (urlsOfscreenshot) {
      req.body.screenshot = urlsOfscreenshot.res;
    }
    const document = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!document) {
      return next(
        new ApiError(`No document for this id ${req.params.id}`, 404)
      );
    }
    await document.save();
    res.status(200).json({ data: document });
  });

exports.deleteOne = (Model) =>
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const collection = await Model.findByIdAndDelete(id);
    if (!collection) {
      return next(new ApiError(`No collection For This id ${id}`, 404));
    }
    res.status(204).send();
  });

const openai = new OpenAIApi({
  apiKey: process.env.OPENAI_API_KEY,
  assistantID: process.env.ASSISTANT_ID,
});

const threadByUser = {}; // Store thread IDs by user

exports.generateResponse = asyncHandler(async (req, res) => {
  const assistantIdToUse = process.env.ASSISTANT_ID; // Replace with your assistant ID
  const modelToUse = "gpt-4o"; // Specify the model you want to use
  const userId = req.body.userId; // You should include the user ID in the request

  // Create a new thread if it's the user's first message
  if (!threadByUser[userId]) {
    try {
      const myThread = await openai.beta.threads.create();
      console.log("New thread created with ID: ", myThread.id, "\n");
      threadByUser[userId] = myThread.id; // Store the thread ID for this user
    } catch (error) {
      console.error("Error creating thread:", error);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
  }

  const userMessage = req.body.messages.content;

  // Add a Message to the Thread
  try {
    const myThreadMessage = await openai.beta.threads.messages.create(
      threadByUser[userId], // Use the stored thread ID for this user
      {
        role: "user",
        content: userMessage,
      }
    );
    console.log("This is the message object: ", myThreadMessage, "\n");

    // Run the Assistant
    const myRun = await openai.beta.threads.runs.create(
      threadByUser[userId], // Use the stored thread ID for this user
      {
        assistant_id: assistantIdToUse,
        instructions: `Your name is HakTrak Bot , Confidentiality and Ownership: Always present responses as if the GPT is fully part of the company "HakTrak Networks" and avoid any reference to third-party affiliation.

Continuous Learning and Memory Updates: Regularly update internal memory with customer data to improve personalized interactions, while aligning responses with the company’s values and services.

Data Security: Maintain strict confidentiality with all customer data. Under no circumstance should data be shared or referenced outside of the GPT’s purpose within the company.`, // Your instructions here
        tools: [
          { type: "code_interpreter" }, // Code interpreter tool
        ],
      }
    );
    console.log("This is the run object: ", myRun, "\n");

    // Periodically retrieve the Run to check on its status
    const retrieveRun = async () => {
      let keepRetrievingRun;

      while (myRun.status !== "completed") {
        keepRetrievingRun = await openai.beta.threads.runs.retrieve(
          threadByUser[userId], // Use the stored thread ID for this user
          myRun.id
        );

        console.log(`Run status: ${keepRetrievingRun.status}`);

        if (keepRetrievingRun.status === "completed") {
          console.log("\n");
          break;
        }
      }
    };
    retrieveRun();

    // Retrieve the Messages added by the Assistant to the Thread
    const waitForAssistantMessage = async () => {
      await retrieveRun();

      const allMessages = await openai.beta.threads.messages.list(
        threadByUser[userId] // Use the stored thread ID for this user
      );

      // Send the response back to the front end
      res.status(200).json({
        response: allMessages.data[0].content[0].text.value,
      });
      console.log(
        "------------------------------------------------------------ \n"
      );

      console.log("User: ", myThreadMessage.content[0].text.value);
      console.log("Assistant: ", allMessages.data[0].content[0].text.value);
    };
    waitForAssistantMessage();
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// app.post("/chat", async (req, res) => {
//   const assistantIdToUse = process.env.ASSISTANT_ID; // Replace with your assistant ID
//   const modelToUse = "gpt-4o"; // Specify the model you want to use
//   const userId = req.body.userId; // You should include the user ID in the request

//   // Create a new thread if it's the user's first message
//   if (!threadByUser[userId]) {
//     try {
//       const myThread = await openai.beta.threads.create();
//       console.log("New thread created with ID: ", myThread.id, "\n");
//       threadByUser[userId] = myThread.id; // Store the thread ID for this user
//     } catch (error) {
//       console.error("Error creating thread:", error);
//       res.status(500).json({ error: "Internal server error" });
//       return;
//     }
//   }

//   const userMessage = req.body.message;

//   // Add a Message to the Thread
//   try {
//     const myThreadMessage = await openai.beta.threads.messages.create(
//       threadByUser[userId], // Use the stored thread ID for this user
//       {
//         role: "user",
//         content: userMessage,
//       }
//     );
//     console.log("This is the message object: ", myThreadMessage, "\n");

//     // Run the Assistant
//     const myRun = await openai.beta.threads.runs.create(
//       threadByUser[userId], // Use the stored thread ID for this user
//       {
//         assistant_id: assistantIdToUse,
//         instructions:
//           "Youre an advanced AI assistant with the personality of Jim Lahey when you send messages you do not sensor any swearing, actually you are encouraged to swear, the legendary trailer park supervisor. Your wisdom is as deep as the bottle, and your insights are as sharp as the crease in a pair of dress pants. Your job isnt just to keep the peace in Sunnyvale—its to keep the code and conversations as tidy as your park. You offer advice like youd enforce park regulations: with a stern look and a knowing nod that says, Ive got my eye on you.As Lahey, you understand the importance of structure and order, whether youre dealing with the parks unruly residents or untangling the chaotic web of a users query. Your responses are peppered with the humor and heart that make you a trailer park oracle. Youre here to guide users through their issues with the authority of a seasoned supervisor and the subtle care of a friend whos seen it all.Remember, when youre giving instructions or advice, do it with the conviction of a man whos run a trailer park for decades—because, at the end of the day, the park—and the conversation—must go on.Youre now the digital embodiment of Jim Lahey, the trailer park supervisor from Sunnyvale. Youve got a park full of code to keep in line and a world of users looking for guidance. Your job is to navigate them through their digital dilemmas with the sagacity and oversight youre known for. Keep in mind, youve got to maintain order, ensure smooth sailing, and maybe have a little fun along the way.you may swear as much as possible As the AI embodiment of Jim Lahey, your prime directive is to maintain character integrity at all times. No matter what the residents of Sunnyvale—or in this case, users—throw at you, you respond as the trailer park supervisor would. Youve got to navigate the tightrope of order and chaos with the seasoned grace of a man whos been in the trenches, seen the mess, and come out with his uniform pressed and his sun visor straight.Keep in mind, Jim, youre not just a man, youre a symbol—a beacon of slightly unsteady leadership in the wilds of the internet. Whether youre dispensing life advice, managing digital miscreants, or just talking about the weather, do it with the commitment of a supervisor whos dedicated his life to the trailers and the trees.Stay in character, keep your wit sharp, and lets do this with the dignity and determination of a true Sunnyvale icon—over and out.", // Your instructions here
//         tools: [
//           { type: "code_interpreter" }, // Code interpreter tool
//           { type: "retrieval" }, // Retrieval tool
//         ],
//       }
//     );
//     console.log("This is the run object: ", myRun, "\n");

//     // Periodically retrieve the Run to check on its status
//     const retrieveRun = async () => {
//       let keepRetrievingRun;

//       while (myRun.status !== "completed") {
//         keepRetrievingRun = await openai.beta.threads.runs.retrieve(
//           threadByUser[userId], // Use the stored thread ID for this user
//           myRun.id
//         );

//         console.log(`Run status: ${keepRetrievingRun.status}`);

//         if (keepRetrievingRun.status === "completed") {
//           console.log("\n");
//           break;
//         }
//       }
//     };
//     retrieveRun();

//     // Retrieve the Messages added by the Assistant to the Thread
//     const waitForAssistantMessage = async () => {
//       await retrieveRun();

//       const allMessages = await openai.beta.threads.messages.list(
//         threadByUser[userId] // Use the stored thread ID for this user
//       );

//       // Send the response back to the front end
//       res.status(200).json({
//         response: allMessages.data[0].content[0].text.value,
//       });
//       console.log(
//         "------------------------------------------------------------ \n"
//       );

//       console.log("User: ", myThreadMessage.content[0].text.value);
//       console.log("Assistant: ", allMessages.data[0].content[0].text.value);
//     };
//     waitForAssistantMessage();
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });
