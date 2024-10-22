// Import
import express from 'express';
import Coaster from '../models/schemas.mjs';
const router = express.Router();

// Create
router.post('/costers', async (req, res) => {
    try {
        const newCoaster = new Coaster(req.body);

        await newCoaster.save();

        res.json(newCoaster);
    } catch (err) {
        console.error(err);
        res.status(500).json({msg: 'Server Error' });
    }
});

// Read
router.get('/coasters', async (req, res) => {
    try {
      const allCoasters = await Coaster.find({});
  
      res.json(allCoasters);
    } catch (err) {
      console.error(err);
      res.status(500).json({ msg: 'Server Error' });
    }
});

export default router;