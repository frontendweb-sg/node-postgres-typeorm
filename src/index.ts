import { config } from "dotenv";
config({ path: ".env" });
import express from "express";
import path from "path";
import { db } from "./config/db";

// app instance
const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "..", "public")));

// error handler

// server listen
db.initialize()
  .then(() => {
    console.log("Database connected!");
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Database not connected!", error);
  });
