const express = require("express");
const multer = require('multer')
const path = require('path')

const imagedataRoutes = express.Router();

const { getApi, postApi } = require("../controllers/imgdataController");


const storage = multer.diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({ storage: storage })

imagedataRoutes.get("/img-get",getApi)
imagedataRoutes.post("/img-post",upload.single("image"),postApi)

module.exports = { imagedataRoutes };