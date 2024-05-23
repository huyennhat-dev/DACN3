import { verifyAccessToken } from '~/utils/token';
import ApiError from '~/utils/ApiError';

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return next(new ApiError(401, 'Authorization header không được cung cấp.'));
  }

  const token = authHeader.split(' ')[1];
  const user = verifyAccessToken(token);
  if (!user) {
    return next(new ApiError(403, 'Access token không hợp lệ.'));
  }

  req.user = user;
  next();
};

export default authMiddleware;
