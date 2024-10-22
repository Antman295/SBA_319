// Import
import express from 'express';
import VideoGame from '../models/videoGameSchemas.mjs';
const router = express.Router();

// Create
router.post('/', async (req, res) => {
    try {
        const newVideoGame = new VideoGame(req.body);

        await newVideoGame.save();

        res.json(newVideoGame);
    } catch (err) {
        console.error(err);
        res.status(500).json({msg: 'Server Error' });
    }
});

// Read
router.get('/', async (req, res) => {
    try {
      const allVideoGames = await VideoGame.find({});
  
      res.json(allVideoGames);
    } catch (err) {
      console.error(err);
      res.status(500).json({ msg: 'Server Error' });
    }
});

export default router;