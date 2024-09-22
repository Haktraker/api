const multer = require("multer");
const ApiError = require("../utils/apiError");

let options = (folderName) => {
  const storage = multer.diskStorage({});

  function fileFilter(req, file, cb) {
    // Allowed MIME types
    const allowedMimeTypes = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "text/plain",
      "application/pdf",
      "application/zip",
      "application/x-zip-compressed",
    ];

    // Check if the file's MIME type is in the allowed list
    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(
        new ApiError("Only images, text, PDF, and ZIP files are allowed", 400),
        false
      );
    }
  }

  const upload = multer({ storage, fileFilter });
  return upload;
};

exports.uploadSingleFile = (fieldName, folderName) =>
  options(folderName).single(fieldName);

// exports.uploadSingleFile = (filedName) => {
//   const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, "uploads/attacksurfaces/screenshots");
//     },

//     filename: function (req, file, cb) {
//       const ext = file.mimetype.split("/")[1];
//       const fileName = `AttackSurface-screenshot-${Date.now()}-${uuidv4()}.${ext}`;
//       req.body.screenshot = fileName;
//       cb(null, fileName);
//     },
//   });
//   function fileFilter(req, file, cb) {
//     if (file.mimetype.startsWith("image")) {
//       cb(null, true);
//     } else {
//       cb(new ApiError("Only Images allowed", 400), false);
//     }
//   }
//   const upload = multer({ storage, fileFilter });
//   return upload.single(filedName);
// };
