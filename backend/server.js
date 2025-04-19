import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";



// import userRoutes from "./routes/userRoutes.js";
// import flightRoutes from "./routes/flightRoutes.js";
// import bookingRoutes from "./routes/bookingRoutes.js";

dotenv.config();

const app = express();
const PORT = 5000;

app.use(express.json());

// Connect DB
connectDB()

// Routes
// app.use('/api/register', userRoutes);
// app.use('/api/login', userRoutes);
// app.use('/api/flights', flightRoutes);
// app.use('/api/booking', bookingRoutes);


app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


//mongodb+srv://usingmasai121:<db_password>@cluster0.o0nlov4.mongodb.net/?