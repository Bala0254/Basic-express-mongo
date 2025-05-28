import userModel from "../models/user.model.js";

export const getAllUser = async(req, res) => {
  try {
    const users = await userModel.find();
    return res.json({
        data: users
    });
  } catch (error) {
    console.log("error: getUser", error);
  }
};

export const createUser = async(req, res) => {
    const newUser = new userModel({
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
    })
  try {
    const user = await newUser.save();
    return res.status(201).json(user);
  } catch (error) {
    console.log("error: CreateUser", error);
  }
};

export const updateUser = async(req, res) => {
  try {
    const updatedUser = await userModel.findByIdAndUpdate({_id: req.params.id}, {
      name: req.body.name,
      age: req.body.age,
      email: req.body.email,
    },
    {
      new: true   // if you not mention the updated result is not return
    }
  );
    return res.status(201).json({upData: updatedUser});
  } catch (error) {
    console.log("error: UpdateUser", error);
    return res.status(400).json({message: error.message});
  }
};

export const deleteUser = async(req, res) => {
   try {
    await userModel.findByIdAndDelete(req.params.id);
    return res.status(201).json({message: "Record Deleted Successfully!"});
  } catch (error) {
    console.log("error: UpdateUser", error);
    return res.status(400).json({message: error.message});
  }
};
