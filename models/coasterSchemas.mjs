import mongoose from 'mongoose';

// Schema for coaster data
const coasterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    manufacturer: {
        type: String,
    },
    year: {
        type: Number
    },
    still_open: {
        type: Boolean,
        required: true,
    }
})

coasterSchema.index({name: 1, location: 1})

export default mongoose.model('Coaster', coasterSchema)
