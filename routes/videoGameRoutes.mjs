// Import
import express from 'express';
import VideoGame from '../models/videoGameSchemas.mjs';
const router = express.Router();

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