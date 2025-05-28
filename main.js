import express from "express";
import userRouter from './routs/user.route.js';
import connectDB from "./lib/db.js";

const app = express();
const port = 6969;

// 🔧 Middleware
app.use(express.json()); // Parses incoming requests with JSON payloads
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded data (e.g., from forms)

// 📌 Routes
app.use('/users', userRouter); // All user-related routes will be prefixed with /users

// DB Connection
connectDB();

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
