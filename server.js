//==================
// Imports
//==================
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import favicon from "serve-favicon";
import helmet from "helmet";
import logger from "morgan";
import { join } from "path";
import { invalidRouter } from "#api/invalid";
import { startRouter } from "#api/start";
import { serverRouter } from "#src/routers";
import "dotenv/config";

//==================
// Const
//==================
const server = express();
const { HOST_DEV, PORT } = process.env;
const host = `https://${HOST_PROD_BACK}`;

//==================
// Hosts Permitidos
//==================
const allowedHosts = [
  `https://${HOST_PROD_BACK}`
];

//==================
// Opciones de CORS
//==================
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedHosts.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  optionSuccessStatus: 200,
};
const root = process.cwd();
const assetsFolder = join(root, "/src/assets");

//==================
// Server Config
//==================
server.use(express.json());
server.use(express.urlencoded({ extends: true }));
server.use(cookieParser());
server.use(logger("dev"));
server.use(cors(corsOptions));
server.use(helmet());
server.use("/assets", express.static(assetsFolder));
server.use(favicon(icoFolder));
server.use("/api/v1", serverRouter);
server.use("/api", startRouter);
server.use("/", startRouter);
server.use("*", invalidRouter);

//==================
// Server Listen
//==================
server.listen(PORT, (err) => {
  if (err) console.error("Error starting server", err);
  console.log(`✅ Server 🆗 is running 💯 on ${host}/api/v1/docs`);
});
