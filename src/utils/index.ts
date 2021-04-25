import { Request, Response, NextFunction } from 'express';
import { ACCESS_TOKEN_SECRET, NODE_ENV } from '../config';

export const unauthorizedError = {
  status: 401,
  message: 'Unauthorized'
};

export const handleError = (error: Error, response: Response) => {
  if (NODE_ENV !== 'test') {
    console.log(`error :>>`, error);
  }

  if ((error as any).code === 'EAI_AGAIN') {
    return response.status(500).json({
      status: 500,
      message: 'Server Error',
      info: error.message
    });
  }

  return response.status(400).json({
    status: 400,
    message: 'Bad Request',
    info: error.message
  });
};

export const verifyAccessToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json(unauthorizedError);
  }
  const bearerToken = authHeader.split(' ');
  const token = bearerToken[1];

  if (token !== ACCESS_TOKEN_SECRET) {
    return res.status(401).json(unauthorizedError);
  }
  next();
};
