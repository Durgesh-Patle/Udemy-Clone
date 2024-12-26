const express = require("express");
const router = express.Router();
const upload = require("../config/multerConfig");

// Single file upload
router.post("/upload/single", upload.single("file"), (req, res) => {
    
    if (!req.file) {
        return res.status(400).json({ error: "No file uploaded." });
    }
    res.status(200).json({ message: "File uploaded successfully!", file: req.file });
});

module.exports = router;