import mongoose from 'mongoose';

// Schema for wrestler data
const wrestlerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    show: {
        type: String,
    },
    championships_held: {
        type: Number
    },
    year_joined: {
        type: Number
    },
    status: [{
        injured:{
            type: Boolean
        },
        retired: {
            type: Boolean,
            required: true
        }
    }]
})

wrestlerSchema.index({name: 1, year_joined: 1})

export default mongoose.model('Wrestler', wrestlerSchema)