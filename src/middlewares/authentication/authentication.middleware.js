//==================
// Imports
//==================
import "dotenv/config";
import jwt from "jsonwebtoken";
import { errorProfiler } from "#lib/validations";

//==========
// Const
//==========
const { TOKEN_SECRET } = process.env;

//=====================
// Class Auth Error
//=====================
class AuthError extends Error {
  constructor(key, message) {
    super(`${key}: ${message}`);
    this.key = key;
    this.message = message;
  }
};

//====================
// Auth Middleware
//====================
export const setAuthentication = async (req, res, next) => {
  try {
    const bearerToken = req.header("authorization");
    if (!bearerToken)
      throw new AuthError("Token Error", "Fallo la autenticación");
    const token = bearerToken.split(" ")[1];
    const user = jwt.verify(token, TOKEN_SECRET);
    if (!user)
      throw new AuthError("Credential Error", "Credenciales inválidas.");
    req.user = user;
    next();
  } catch (error) {
    errorProfiler(error, res, "setAuthentication");
  }
};
