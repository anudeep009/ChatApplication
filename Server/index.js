import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db/index.js";
import userroutes from "./routes/user.routes.js";

const app = express();
dotenv.config();
connectDB();
app.use(cors());

app.use(express.json());
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send(`server running`);
});

app.use("/api", userroutes);

app.listen(PORT, () => {
  console.log(`app is running on : http://localhost:${process.env.PORT}`);
});
