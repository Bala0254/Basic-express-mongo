import { model, Schema } from "mongoose";

const userSchema = new Schema({
    "name": {
        type: "string",
        required: true
    },
    "age": Number,
    "email": {
        type: "string",
        required: true,
        unique: true
    }
});

const userModel = model('user', userSchema);

export default userModel;