import mongoose from 'mongoose';

// Schema for video game data
const videoGameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
    },
    rating: {
        type: String,
    }
})

videoGameSchema.index({name: 1})

export default mongoose.model('VideoGame', videoGameSchema);