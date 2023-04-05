import { NextFunction, Request, Response } from "express";
// we want to avoid requests that do not have the necessary information
// middleware will intercept the request and fail early if the correct information is not available
const validateUserBody = (
  req: Request,
  res: Response,
  next: NextFunction
): void | Response => {
  if (!req.body.id && !req.params.id) {
    return res.status(400).send({ message: "You must include an id" });
  }
  // next will continue the operation and pass the request to the next phase
  next();
};

export { validateUserBody };
