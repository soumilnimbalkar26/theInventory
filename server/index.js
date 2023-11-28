import express from "express";
import dotenv from "dotenv";
dotenv.config();
import UserRoutes from "./routes/UserRoutes.js";
import { notFound, errorHandler } from "./middleware/ErrorMiddleware.js";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const port = process.env.PORT || 5000;
connectDB();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/api/users", UserRoutes);

app.get("/", (req, res) => {
  res.send("server is ready");
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
