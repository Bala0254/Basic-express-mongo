import express from "express";
import { createUser, deleteUser, getAllUser, updateUser } from "../controllers/user.controller.js";

const route = express.Router();

// Read
route.get('/', getAllUser);

// Write
route.post('/', createUser);

// Update
route.put('/:id', updateUser);

// Delete
route.delete('/:id', deleteUser);

export default route;