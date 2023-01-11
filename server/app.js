import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/auth.js";
import productRoutes from "./routes/goldVault.js";
import statRoutes from "./routes/stat.js";
import dbConnect from "./config/dbConnect.js";
import router from "express";
const PORT = process.env.PORT || 6001;

/* CONFIGURATIONS */
const corsOption = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
router.Router().use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors(corsOption));
mongoose.set("strictQuery", false);
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

app.use("/auth", authRoutes);
app.use("/products", productRoutes);
app.use("/products/visit", statRoutes);

dbConnect();

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
