import * as express from "express";
import * as authController from "./controllers/auth";
import * as userController from "./controllers/user";
import * as bookController from "./controllers/book";

const router = express.Router();

router.get("/", ({res}) => res.send("API is OK!"));

router.post("/auth", authController.authUser);

router.get("/users/:userId", authController.checkAuth, userController.oneUser);

router.get("/books", authController.checkAuth, bookController.listOfBooks);
router.get("/books/:bookId", authController.checkAuth, bookController.oneBook);
router.post("/books/new", authController.checkAuth, bookController.createBook);

export default router;
