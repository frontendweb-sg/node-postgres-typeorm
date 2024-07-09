import { Request, Response, NextFunction } from "express";
import { db } from "../config/db";
import { User } from "../models/user";
import { Password } from "../utils/password";
import { Jwt } from "../utils/jwt";

/**
 *
 * @param req
 * @param res
 * @param next
 */
export const signUp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const body = req.body;

    const userRepo = db.getRepository(User);

    const user = await userRepo.findOneBy({ email: body.email });
    if (user)
      throw new Error(
        "User already resitered with use, please choose another email!"
      );

    const newUser = userRepo.create(body);
    const insertRecord = await userRepo.save(newUser);
    res.status(201).send(insertRecord);
  } catch (error) {
    next(error);
  }
};

/**
 * Sign in controller
 * @param req
 * @param res
 * @param next
 */
export const signIn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const body = req.body;
    const userRepo = db.getRepository(User);
    const user = await userRepo.findOneBy({ email: body.email });

    if (!user) throw new Error("Email not found!");

    const verify = Password.compare(body.password, user?.password);

    if (!verify) throw new Error("Inavlid password");

    const token = Jwt.genToken({
      user_id: user.user_id,
      email: user.email,
    });

    user.expire_token = token;

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
