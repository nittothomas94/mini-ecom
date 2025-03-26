const cloudinary = require('../config/cloudinary');
const multer = require('multer');
const path = require('path');

// Configure Multer for file handling (store locally before upload)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images/'); // Temporary storage
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Unique filename
  },
});

// File filter (only allow images)
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Only image files are allowed!'), false);
  }
};

const upload = multer({ storage, fileFilter });

// Function to upload image to Cloudinary
const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded!' });
    }

    // Upload file to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'uploads',
      use_filename: true,
    });

    res.status(200).json({
      message: 'Image uploaded successfully!',
      imageUrl: result.secure_url,
    });
  } catch (error) {
    res.status(500).json({ error: 'Image upload failed!', details: error });
  }
};

module.exports = { upload, uploadImage };

// Uses multer to store images temporarily
// Filters only image files
// Uploads images to Cloudinary and returns a URL
