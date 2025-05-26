import express from "express";
import userRouter from './routs/user.route.js';

const app = express();
const port = 6969;

app.use('/users', userRouter); // Middleware to parse JSON


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
