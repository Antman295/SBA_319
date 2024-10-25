// Imports
import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import connectDB from './db/conn.mjs';

// Coaster data imports
import Coaster from './models/coasterSchemas.mjs';
import { coasters } from './data/coasterData.mjs';
import coasterRoutes from './routes/coasterRoutes.mjs'

// Video Game data imports
import videoGameRoutes from './routes/videoGameRoutes.mjs'

// Wrestler data imports
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

// Seeding coaster test data
app.get('/coaster/seed', async (req, res) => {

    // Delete items in database to reset
    await Coaster.deleteMany({})
  
    // (Re)Create items in database
    await Coaster.create(coasters)
  
    res.send('Seeding database')
  });

// Listener
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`)
})