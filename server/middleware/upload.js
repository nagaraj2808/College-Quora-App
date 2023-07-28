import multer from 'multer';
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/'); // Set the destination folder for uploaded files
    },
    filename: function (req, file, cb) {
        
        const date = new Date().toISOString().slice(0, 10).replace(/-/g, '');
        cb(null, date + '-' + file.originalname); // Use the original filename for uploaded files
    },
});


export const upload = multer({ storage: storage });