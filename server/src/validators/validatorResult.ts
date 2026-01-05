import { validationResult } from 'express-validator';
import type { Request, Response, NextFunction } from 'express';

export default function signupResult(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const result = validationResult(req);

  if (!result.isEmpty()) {
    return res.json({
      result,
    });
  }

  next();
}
