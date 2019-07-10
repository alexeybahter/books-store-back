import { Request, Response } from "express";
import { Book } from "../models";

export const listOfBooks = (req: Request, res: Response) => {
  return Book.findAllBooks()
    .then((rez) => res.status(200).send(rez))
    .catch((error) => res.status(400).send(error.message));
};

export const oneBook = (req: Request, res: Response) => {
  const { bookId } = req.params;
  return Book.findOneUser(bookId)
    .then((rez) => res.status(200).send(rez))
    .catch((error) => res.status(400).send(error));
};

// BODY {title: string, description: string, price: string}
export const createBook = (req: Request, res: Response) => {
  const params = req.body;
  return Book.createBook(params)
    .then((rez) => res.status(200).send(rez))
    .catch((error) => res.status(400).send(error));
};