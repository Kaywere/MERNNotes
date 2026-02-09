import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import notesRoutes from "./routes/notesRoutes.js";
import connectDB from "./Config/db.js";
import rateLimit from "./middleware/rateLimiter.js";

//load environment variables
dotenv.config({ quiet: true });

//initialize express app
const app = express();
const PORT = process.env.PORT || 5011;

//middleware
app.use(cors({ origin: ["https://notes.sossai.cc", "http://localhost:5173" , "http://192.168.1.51:8050"],
methods: ['GET', 'POST', 'PUT', 'DELETE'],
credentials: true }));
app.use(express.json());
app.use(rateLimit);

//routes
app.use("/api/notes", notesRoutes);

//connect to database
connectDB()
  //if success, start server on port
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
