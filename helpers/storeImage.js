require("dotenv").config();
const multer = require("multer");

/**
 * Returns a Multer.diskStorage function to store an Image
 * @returns Function
 */
function storeImage(){
    return multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, __dirname + '/../public/images/');
        },
        filename: function (req, file, cb) {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
          let extension = file.originalname.split(".");
          process.env.FILENAME = file.fieldname + '-' + uniqueSuffix + "." + extension[extension.length - 1];
          cb(null, process.env.FILENAME);
        }
      });
}
module.exports = storeImage;