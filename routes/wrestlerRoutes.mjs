// Import
import express from 'express';
import Wrestler from '../models/wrestlersSchemas.mjs';
const router = express.Router();

// Create
router.post('/', async (req, res) => {
    try {
        const newWrestler = new Wrestler(req.body);

        await newWrestler.save();

        res.json(newWrestler);
    } catch (err) {
        console.error(err);
        res.status(500).json({msg: 'Server error'})
    }
})

// Read
router.get('/', async (req, res) => {
    try {
      const allWrestlers = await  Wrestler.find({});
  
      res.json(allWrestlers);
    } catch (err) {
      console.error(err);
      res.status(500).json({ msg: 'Server Error' });
    }
});