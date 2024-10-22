// Import
import express from 'express';
import Coaster from '../models/coasterSchemas.mjs';
const router = express.Router();

// Create
router.post('/', async (req, res) => {
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
router.get('/', async (req, res) => {
    try {
      const allCoasters = await Coaster.find({});
  
      res.json(allCoasters);
    } catch (err) {
      console.error(err);
      res.status(500).json({ msg: 'Server Error' });
    }
});

// Update
router.put('/:id', async (req, res) => {
    try {
        let updateCoaster = await Coaster.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
    
        res.json(updateCoaster);
      } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
      }
});

// Delete
router.delete('/:id', async (req, res) => {
    try {
        let deleteCoaster = await Coaster.findByIdAndDelete(req.params.id);

        res.json(deleteCoaster);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server Error'});
    }
})
export default router;