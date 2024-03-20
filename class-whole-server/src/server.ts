import errorHandler from "./middleware/errorHandler";

require('dotenv').config();

import {Request, Response} from "express";
import {MongooseError} from "mongoose";
import connectDB from "./config/dbConn";


const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const {logger} = require('./middleware/logger');


const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const {logEvents} = require('./middleware/logger');

const app = express();

connectDB()

app.use(
    logger,
    cors(corsOptions),
    express.json(), 
    cookieParser(),
)

app.use('/students', require('./routes/studetsRoutes'))
app.get('/', (req: Request, res : Response) => {
    res.send('Express + TypeScript Server');
});

app.use(errorHandler);

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(port, () => {
        console.log(`[server]: Server is running at http://localhost:${port}`);
    });
})

mongoose.connection.on('error', (err: MongooseError) => {
    logEvents(`${err.name}: ${err.message}`, 'mongoErrLog.log')
})