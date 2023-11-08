import { Request, Response, NextFunction } from "express";

type handlerFn = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<any>;

export const catchAsync =
  (fn: handlerFn) => (req: Request, res: Response, next: NextFunction) =>
    fn(req, res, next).catch(next);
