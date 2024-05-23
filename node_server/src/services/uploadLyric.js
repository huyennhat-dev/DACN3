import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/lyrics/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + ".txt");
  },
});

const upload = multer({ storage: storage });

export default upload;