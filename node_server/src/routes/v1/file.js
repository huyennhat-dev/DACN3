import express from "express";
import path from "path";
import fs from "fs";

const router = express.Router();

router.get("/*", (req, res) => {
  try {
    const filePath = path.join(__dirname, "../../../" + req.params[0]);
    return res.sendFile(filePath, (err) => {
      if (err) {
        console.error("Error sending file:", err);
        return res.status(404).send("File not found");
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal server error");
  }
});


// router.get('/chunk', (req, res) => {
//   const filePath = path.join(__dirname, "../../../uploads/sounds/main/1715841717151.mp3" ); // Using query parameter to get the file path

//   fs.stat(filePath, (err, stats) => {
//     if (err) {
//       console.error("File not found:", err);
//       return res.status(404).send("File not found");
//     }

//     const range = req.headers.range;
//     if (!range) {
//       return res.status(416).send("Requires Range header");
//     }

//     const positions = range.replace(/bytes=/, "").split("-");
//     const start = parseInt(positions[0], 10);
//     const total = stats.size;
//     const end = positions[1] ? parseInt(positions[1], 10) : total - 1;
//     const chunksize = (end - start) + 1;

//     res.writeHead(206, {
//       "Content-Range": `bytes ${start}-${end}/${total}`,
//       "Accept-Ranges": "bytes",
//       "Content-Length": chunksize,
//       "Content-Type": "audio/mpeg" // Change to the correct MIME type of your audio file
//     });

//     const stream = fs.createReadStream(filePath, { start, end })
//       .on("open", () => {
//         stream.pipe(res);
//       })
//       .on("error", (streamErr) => {
//         console.error("Stream error:", streamErr);
//         res.status(500).send("Stream error");
//       });
//   });
// });

export const fileRouter = router;
