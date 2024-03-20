import mongoose from "mongoose";

const baseUserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true,
    },
    lastName:  {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password:  {
        type: String,
        require: true,
    },
    role: {
        type: 'student' || 'teacher',
        require: true,
    },
    isActive: {
        type: Boolean,
        require: true,
        default: true,
    },
});

export default baseUserSchema;