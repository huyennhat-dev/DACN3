import "dotenv/config";

const env = {
  MONGODB_URL: process.env.MONGODB_URL,

  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
  ACCESS_TOKEN_LIFETIME: process.env.ACCESS_TOKEN_LIFETIME,
  REFRESH_TOKEN_LIFETIME: process.env.REFRESH_TOKEN_LIFETIME,

  PERCENTAGE: process.env.PERCENTAGE,
  CONTRACT_ADDRESS: process.env.CONTRACT_ADDRESS,


  CLOUD_NAME: process.env.CLOUD_NAME,
  CLOUD_API_KEY: process.env.CLOUD_API_KEY,
  CLOUD_API_SECRET: process.env.CLOUD_API_SECRET,

  PORT: process.env.PORT,
  HOST: process.env.HOST,

  BUILD_MODE: process.env.BUILD_MODE,
};

export default env;
