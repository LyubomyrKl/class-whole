import {NextFunction, Request, Response} from "express";

const { logEvents } = require('./logger')

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    logEvents(`${err.name}: ${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`, 'errLog.log')
        .then(() => console.log(err.stack))

    const status = res.statusCode || 500 // server error

    res.status(status)

    res.json({ message: err.message })

}

export default errorHandler