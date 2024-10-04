//==================
// Imports
//==================
import "dotenv/config";
import { errorProfiler } from "#lib/validations";

//===========
// Const
//===========
const { HOST_DEV, HOST_PROD_FRONT, HOST_PROD_BACK, PORT, API_KEY } = process.env;

//=====================
// Class Param Error
//=====================
class ApiKeyError extends Error {
  constructor(key, message) {
    super(`${key}: ${message}`);
    this.key = key;
    this.message = message;
  }
}

//======================
// Host Authorization
//======================
const authorizedHosts = [
  `${HOST_PROD_FRONT}`,
  `${HOST_PROD_BACK}`,
  `${HOST_DEV}:${PORT}`,
  `http://${HOST_DEV}:${PORT}`,
];

//======================
// Api Key Middleware
//======================
export const setApiKey = (req, res, next) => {
  try {
    const apiKey = req.headers.apikey;
    if (!apiKey || API_KEY !== apiKey) {
      throw new ApiKeyError('Key error', 'The api key is not valid.');
    }
    const host = req.headers.host;
    if (!host || !authorizedHosts.includes(host)) {
      throw new ApiKeyError(
        'Host error',
        'The address of the request is not authorized',
      );
    }
    next();
  } catch (error) {
    errorProfiler(error, res, "setApiKey");
  }
};
