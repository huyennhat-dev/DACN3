function convertFormat(data) {
  switch (data) {
    case "audio/mpeg":
      return "mp3";
    case "audio/wav":
      return "wav";
    case "audio/flac":
      return "flac";
    case "audio/x-m4a":
      return "m4a";
    case "audio/ogg":
      return "ogg";
    case "audio/aac":
      return "aac";
    case "audio/aiff":
      return "aiff";
    case "audio/amr":
      return "amr";
    case "audio/basic":
      return "au";
    case "audio/x-aiff":
      return "aiff";
    case "image/jpeg":
      return "jpg";
    case "image/png":
      return "png";
    case "image/gif":
      return "gif";
    case "image/bmp":
      return "bmp";
    case "image/webp":
      return "webp";
    case "image/svg+xml":
      return "svg";
    case "application/octet-stream":
      return "lrc";
    default:
      return null;
  }
}

export const fileNameGeneral = (name, type) => {
  return name + "." + convertFormat(type);
};

export const typeFile = (data) => {
  return data.split(",")[0].split(";")[0].split(":")[1];
};

export const extractFileName = (filePath) => {
  const parts = filePath.split("/");
  return parts[parts.length - 1];
};

export const remixHashTags = [
  "#remix",
  "#remixmusic",
  "#djremix",
  "#clubremix",
  "#dance",
  "#edm",
  "#electro",
  "#housemusic",
  "#trap",
  "#dubstep",
  "#europeanmusic",
  "#europop",
  "#edm",
  "#eurodance",
  "#frenchpop",
  "#britpop",
  "#germanmusic",
  "#italianmusic",
  "#spanishmusic",
  "#scandinavianmusic",
  "#asianmusic",
  "#kpop",
  "#jpop",
  "#cpop",
  "#vpop",
  "#asianbeats",
  "#taiko",
  "#mandopop",
  "#bollywood",
  "#indianmusic",
];

export const chillHashtags = [
  "#chill",
  "#chillmusic",
  "#chillout",
  "#lofi",
  "#lofihiphop",
  "#relax",
  "#relaxingmusic",
  "#ambient",
  "#downtempo",
  "#chillvibes",
  "#chillbeats",
  "#smooth",
  "#mellow",
  "#calm",
  "#studybeats",
];

export const healingHashtags = [
  "#healingmusic",
  "#meditationmusic",
  "#relaxingmusic",
  "#calmmusic",
  "#ambientmusic",
  "#mindfulness",
  "#wellness",
  "#spiritualmusic",
  "#healingvibes",
  "#zenmusic",
  "#chillmusic",
  "#newagemusic",
  "#soundhealing",
  "#tranquility",
  "#stressrelief",
];
