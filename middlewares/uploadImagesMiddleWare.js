const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const ApiError = require("../utils/apiError");

let options = (folderName) => {
  const storage = multer.diskStorage({});
  function fileFilter(req, file, cb) {
    if (file.mimetype.startsWith("image")) {
      cb(null, true);
    } else {
      cb(new ApiError("Only Images allowed", 400), false);
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
