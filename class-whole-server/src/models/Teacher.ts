import mongoose from 'mongoose';
import baseUserSchema from "./BaseUserSchema";
import AutoIncrement from "mongoose-sequence";

const teacherSchema = new mongoose.Schema({
    ...baseUserSchema,
    createdCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'Course'
    }]
})

teacherSchema.plugin(AutoIncrement, {
    inc_field: 'ticket',
    id: 'ticketNums',
    start_seq: 500,
})

export default mongoose.model('Teacher', teacherSchema);