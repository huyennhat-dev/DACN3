const ffmpeg = require("fluent-ffmpeg");
const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;

ffmpeg.setFfmpegPath(ffmpegPath);

const cutSound = (inputFilePath, outputFilePath, duration) => {
  ffmpeg(inputFilePath)
    .setStartTime(0)
    .setDuration(duration)
    .output(outputFilePath)
    .run();
};

export default cutSound;
