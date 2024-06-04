import express from "express";
import { fileURLToPath } from "url";
import { join, dirname } from "path";
import morgan from "morgan";
import { createWriteStream } from "fs";
import session from "express-session";
import compression from "compression";
import home from "./routes/home/index.js";
import admin from "./routes/admin/index.js";
import api from "./routes/api/index.js";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
const logFile = join(__dirname, "blogchef.log");

// middleware
app.use(compression());
app.use("/assets", express.static(join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(morgan("dev"));
app.use(morgan(":method - :url - :date - :response-time ms"));
app.use(
  morgan(":method - :url - :date - :response-time ms", {
    stream: createWriteStream(logFile, { flags: "a" }),
  }),
);

app.use(
  "/admin",
  session({
    name: "sessId",
    resave: false,
    saveUninitialized: true,
    secret:
      app.get("env") === "production"
        ? process.env.sessionSecret
        : "1232131qdasdqqwe1121",
    cookie: {
      httpOnly: true,
      maxAge: 1800000,
      secure: app.get("env") === "production" ? true : false,
    },
  }),
); // without this default session name is connect.sid

// routes
app.use("/", home);
app.use("/admin", admin);
app.use("/api", api);

app.set("view engine", "pug");

app.listen(3000, () => console.log("Blog Chef is cooking on port 3000"));
