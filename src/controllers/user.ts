import { Request, Response } from "express";
import { User } from "../models";

export const oneUser = (req: Request, res: Response) => {
  const { userId } = req.params;
  return User.findOneUser(userId)
    .then((rez) => res.status(200).send(rez))
    .catch((error) => res.status(400).send(error));
};