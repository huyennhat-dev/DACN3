import fs from "fs";
import ApiError from "~/utils/ApiError";

const readLyric = (filePath) => {
  return new Promise((resolve, reject) => {
    try {
      const result = [];

      fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
          console.error("Error reading file:", err);
          reject(new ApiError(400, "Error reading file"));
        } else {
          const lines = data.split("\n").filter((line) => line.trim() !== "");
          const result = [];

          for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            if (line) {
              const match = line.match(/\[(\d+):(\d+\.\d+)\](.*)/);
              if (match) {
                const startTime =
                  parseFloat(match[1]) * 60 + parseFloat(match[2]);
                const data = match[3].trim();

                let endTime = null;
                if (i < lines.length - 1) {
                  const nextMatch = lines[i + 1]
                    .trim()
                    .match(/\[(\d+):(\d+\.\d+)\](.*)/);
                  if (nextMatch) {
                    endTime =
                      parseFloat(nextMatch[1]) * 60 + parseFloat(nextMatch[2]);
                  }
                }

                result.push({ startTime, endTime, data });
              }
            }
          }

          if (result.length > 0) {
            result[result.length - 1].endTime =
              result[result.length - 1].startTime + 5;
          }

          resolve(result);
        }
      });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};

export default readLyric;
