import express from "express";

const app = express();
const port = 6969;

app.use(express.json()); // Middleware to parse JSON

// Read users
app.get('/users', (req, res) => {
    res.json({ msg: "Hello NodeJS!" });
});

// Create a user
app.post('/user', (req, res) => {
    const userData = req.body;
    res.json({ msg: "User created", data: userData });
});

// Update a user
app.put('/user/:id', (req, res) => {
    const userId = req.params.id;
    const updatedData = req.body;
    res.json({ msg: `User ${userId} updated`, data: updatedData });
});

// Delete a user
app.delete('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.json({ msg: `User ${userId} deleted` });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
