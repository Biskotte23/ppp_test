import { Response } from 'express';

import CustomError from '../models/CustomError';

/**
 * Render error as JSON.
 * @param {Response} res - Response.
 * @param {number} code - Error status code.
 * @param {string} message - Error message.
 * @param {string | undefined} stack - Error stack.
 */
export const jsonError = (res: Response, code: number, message: string, stack?: string) => {
  const error = new CustomError(code, message, stack);
  res.status(error.code).json({ ...error, stack: error.stack });
};
