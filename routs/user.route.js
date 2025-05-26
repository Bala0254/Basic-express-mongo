import express from "express";

const route = express.Router();

// Read
route.get('/', (req, res)=>{
    res.send("List all!!!!!!!");
});

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