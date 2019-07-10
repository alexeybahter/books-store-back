import { Request, Response, NextFunction } from "express";
import * as passport from "passport";
import * as jwt from "jsonwebtoken";
import "../config/passport";

export const authUser = (req: Request, res: Response , next: NextFunction) => {
  passport.authenticate("local", (err, user, info) => {
    if (err || !user) {
      return res.status(400).json({
        message: "Something is not right",
        user,
      });
    }
    req.login(user, (error: any) => {
      if (error) {
        res.send(error);
      }
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1d" });
      return res.json({ user, token });
      });
})(req, res);
};

export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate("jwt", { session: false }, (err, user, info) => {
    if (err) {
      console.error(err);
    }
    if (info) {
      res.status(400).send(info.message);
    } else {
      next();
    }
  })(req, res, next);
};
