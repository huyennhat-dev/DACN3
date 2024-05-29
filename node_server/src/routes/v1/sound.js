import express from "express";
import path from "path";
import soundController from "~/controllers/sound.controller";
import authMiddleware from "~/middlewares/authMiddleware";

const router = express.Router();

router
  .post("/create", authMiddleware, soundController.create)
  .put("/update/:id", authMiddleware, soundController.update)
  .delete("/delete/:id",authMiddleware, soundController.delete)
  .get("/read/:id", soundController.read)
  .get("/search", soundController.search)
  .get("/get-sounds-by-other", soundController.getSoundsByOther)

// router.get("/api/play-audio", (req, res) => {
//   const filePath = path.resolve(
//     __dirname,
//     "../../../uploads/lyrics/subtitle.txt"
//   );

//   // Kiểm tra xem file tồn tại hay không
//   // res.sendFile(filePath, (err) => {
//   //   if (err) {
//   //     console.error('Error sending file:', err);
//   //     res.status(err.status).end();
//   //   } else {
//   //     console.log('File sent successfully');
//   //   }
//   // });
// });

export const soundRouter = router;
