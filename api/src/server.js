import "dotenv/config";
import express from "express";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const PORT = process.env.PORT || 8000;
const app = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/auth", authRoutes);

app.get("/health", (req, res) => {
  res.json({ message: "ok" });
});

app.listen(PORT, () => {
  console.log(`Servidor online em http://localhost:${PORT}`);
});
