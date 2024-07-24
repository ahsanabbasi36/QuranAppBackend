import express from "express";
import connectDB from "./config/db.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(bodyParser.json());

// Define Routes
import authRoutes from "./routes/auth.js";
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server started on port http://localhost:${PORT}`)
);
