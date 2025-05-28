import express from "express";
import { getAllUser } from "../controllers/user.controller.js";

const route = express.Router();

// Read
route.get('/', getAllUser);

// Write
route.post('/', (req, res)=>{
    res.send("Create Record!!!!!!!");
});

// Update
route.put('/:id', (req, res)=>{
    res.send("Update record!!!!!!!");
});

// Delete
route.delete('/id', (req, res)=>{
    res.send("Delete Record!!!!!");
});

export default route;