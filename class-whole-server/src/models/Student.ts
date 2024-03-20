import mongoose from "mongoose";
import baseUserSchema from "./BaseUserSchema";
import AutoIncrement from "mongoose-sequence";

const studentSchema = new mongoose.Schema({
    ...baseUserSchema,
    coursesToVisit: [{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'Course',
    }]
}, {timestamps: true})

studentSchema.plugin(AutoIncrement, {
    inc_field: 'ticket',
    id: 'ticketNums',
    start_seq: 500,
})

export default mongoose.model('Student', studentSchema);