import { User } from "../models";
import { hashPassword } from "../models/user";
import * as seeds from "./seeds/user";

Promise.resolve()
  .then(async () => {
    const userToAdd = seeds.users[0];
    const existingUser = await User.findOne({ where: { email: userToAdd.email }});
    if (existingUser) {
      console.info("user already exist", existingUser.toJSON());
    } else {
      await User.create({
        ...userToAdd,
        encryptedPassword: await hashPassword(userToAdd.password),
      });
      console.info("user has been created", userToAdd);
    }
  })
  .then(() => {
    process.exit();
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
