const multer = require('multer');
const path = require('path');

// Multer storage configuration
try {
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            // console.log(file,"file")
            cb(null, 'public/images');
        },
        filename: function (req, file, cb) {
            cb(null, Date.now() + path.extname(file.originalname)); // Unique name with timestamp
        }
    });
    
    var upload = multer({ storage: storage });
   

    
} catch (error) {
    console.log("error in upload img", error)
}

// Export the Multer middleware to be used in routes
module.exports = upload;