import bcrypt from "bcryptjs";

/**
 * Password class
 */
export class Password {
  static hash(password: string) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(12));
  }
  static compare(password: string, hash: string) {
    return bcrypt.compareSync(password, hash);
  }
}
