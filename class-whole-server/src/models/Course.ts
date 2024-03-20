import mongoose from 'mongoose';
import AutoIncrement from 'mongoose-sequence'

const courseSchema = new mongoose.Schema(
    {
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Teacher',
    },
    participants: [{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'Student',
    }],
    description: {
        type: String,
        require: true,
    },
    isActive: {
        type: Boolean,
        require: true,
        default: true,
    },
}, {timestamps: true})


courseSchema.plugin(AutoIncrement, {
    inc_field: 'ticket',
    id: 'ticketNums',
    start_seq: 500,
})

export default mongoose.model('Course', courseSchema);
