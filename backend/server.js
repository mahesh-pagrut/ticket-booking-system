import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

// import userRoutes from "./routes/userRoutes.js";
// import flightRoutes from "./routes/flightRoutes.js";
// import bookingRoutes from "./routes/bookingRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

// Connect DB
connectDB();

// Routes
// app.use('/api/register', userRoutes);
// app.use('/api/login', userRoutes);
// app.use('/api/flights', flightRoutes);
// app.use('/api/booking', bookingRoutes);

app.get("/", (req, res) => {
  res.send("API Working");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
