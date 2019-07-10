import * as express from "express";
import * as passport from "passport";
import "./config/passport";
import router from "./routes";
import { db } from "./models";

const app = express();
const port = process.env.PORT || 3000;

db
  .authenticate()
  .then(() => {
    console.info("Connection to postgres has been established successfully.");
  }, (err) => {
    console.info("Unable to connect to postgres:", err);
  });

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, Content-Length, X-Requested-With");
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(passport.initialize());
app.use(router);

app.listen(port, (err: any) => {
  if (err) {
      return console.info("something bad happened", err);
  }
  console.info(`server is listening on ${port}`);
});
