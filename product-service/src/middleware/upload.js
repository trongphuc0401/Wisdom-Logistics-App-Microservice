const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");


const url = process.env.MONGODB_URI

const storage = new GridFsStorage({
    url,
    file: (req, file) => {
      if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        return {
          bucketName: "photos",
          filename: `${Date.now()}_${file.originalname}`,
        }
      } else {
        return `${Date.now()}_${file.originalname}`
      }
    },
  })
  const upload = multer({ storage })
module.exports = upload
  