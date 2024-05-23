import jwt from 'jsonwebtoken';
import env from '~/config/env';

const generateAccessToken = (user) => {
  return jwt.sign(user, env.ACCESS_TOKEN_SECRET, { expiresIn: env.ACCESS_TOKEN_LIFETIME });
};

const generateRefreshToken = (user) => {
  return jwt.sign(user, env.REFRESH_TOKEN_SECRET, { expiresIn: env.REFRESH_TOKEN_LIFETIME });
};

const verifyAccessToken = (token) => {
  try {
    return jwt.verify(token, env.ACCESS_TOKEN_SECRET);
  } catch (error) {
    return null;
  }
};

const verifyRefreshToken = (token) => {
  try {
    return jwt.verify(token, env.REFRESH_TOKEN_SECRET);
  } catch (error) {
    return null;
  }
};

export { generateAccessToken, generateRefreshToken, verifyAccessToken, verifyRefreshToken };
