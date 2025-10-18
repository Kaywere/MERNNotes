import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import notesRoutes from "./routes/notesroutes.js";
import connectDB from "./Config/db.js";
import rateLimit from "./middleware/ratelimiter.js";

//load environment variables
dotenv.config({ quiet: true });

//initialize express app
const app = express();
const PORT = process.env.PORT || 5001;

//middleware
app.use(cors({ origin: ["https://mern.soss.site", "http://localhost:5173" , "http://localhost:4173"] }));
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
