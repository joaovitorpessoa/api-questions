import { Request, Response, NextFunction } from "express";
import { AppError } from "../shared/errors";

function errorHandling(
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({ message: error.message });
  }

  return response.status(500).json({
    message: `Internal server error - ${error.message}`,
  });
}

export { errorHandling };
