const express = require('express');

const router = express.Router();

const {
  upload,
  uploadImage,
} = require('../controllers/image-upload-controller');

router.post('/', upload.single('avatar'), uploadImage);

module.exports = router;
