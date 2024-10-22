// Imports
import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import connectDB from './db/conn.mjs';
import Coaster from './models/coasterSchemas.mjs';
import coasterRoutes from './routes/coasterRoutes.mjs'
import videoGameRoutes from './routes/videoGameRoutes.mjs'
import wrestlerRoutes from './routes/wrestlerRoutes.mjs'

const app = express();
dotenv.config();
let PORT = process.env.PORT || 3000;

// DB Connection
connectDB();

// Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({extended: true}));

// Routes
app.use('/coaster', coasterRoutes);
app.use('/videogame', videoGameRoutes);
app.use('/wrestler', wrestlerRoutes);

// Seeding test data
app.get('/seed', async (req, res) => {

    // OPtional step
    // await Song.deleteMany({})
  
    // Create items in database
    await Coaster.create(songs)
  
    res.send('Seeding database')
  });

// Listener
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`)
})