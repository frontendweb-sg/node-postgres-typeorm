import JWT, { JwtPayload, SignOptions } from "jsonwebtoken";

export interface JwtOptions extends SignOptions {}
const DEFAULT_OPTIONS: JwtOptions = {
  expiresIn: "1h",
};

export class Jwt {
  static genToken(payload: JwtPayload, options: JwtOptions = DEFAULT_OPTIONS) {
    return JWT.sign(payload, process.env.SECRET_KEY, options);
  }

  static verify(token: string) {
    return JWT.verify(token, process.env.SECRET_KEY, function (error, decode) {
      if (error) throw new Error(error.message);
      return decode;
    });
  }
}
