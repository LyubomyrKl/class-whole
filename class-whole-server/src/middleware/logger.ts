import {NextFunction, Request, Response} from "express";

const {format} = require('date-fns');
const {v4: uuid} = require('uuid');
const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const logEvents = async (message: string, logFileName: string) => {
    const dateTime = `${format(new Date, 'yyyyMMdd\tHH:mm:ss')}`
    const logItem = `${dateTime}\t${uuid}\t${message}\n`
    const folder = path.join(__dirname, '..', 'logs');

    try{
        if(fs.existsSync(folder)){
            await fsPromises.mkdir(folder)
        }
        await fsPromises.appendFile(path.join(__dirname, '..', 'logs', logFileName), logItem)
    } catch (err){
        console.log(err);
    }
}

const logger = (req: Request, res: Response, next: NextFunction) => {
    logEvents(`${req.method}\t${req.url}\t${req.headers.origin}`, 'reqLog.log')
        .then(() => console.log(`${req.method} ${req.path}`));

    next();
}

export {
    logEvents, logger
}