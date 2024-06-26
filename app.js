const express = require("express");
const app = express();
const winston = require('winston');

//Winston logger
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'calculate-service' },
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
}

const add = (n1, n2) => {
    return n1 + n2;
}

const sub = (n1, n2) => {
    return n1 - n2
}

const mul = (n1, n2) => {
    return n1 * n2
}

const div = (n1, n2) => {
    return n1 / n2
}

//addition
app.get("/add", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1) || isNaN(n2)) {
            logger.error("Invalid input parameters for addition");
            throw new Error("Invalid input parameters");
        }
        logger.info(`Parameters ${n1} and ${n2} received for addition`);
        const result = add(n1, n2);
        res.status(200).json({ statusCode: 200, data: result });
    } catch (error) {
        logger.error(error.toString());
        res.status(500).json({ statusCode: 500, msg: error.toString() });
    }
});

//subtraction
app.get("/sub", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1) || isNaN(n2)) {
            logger.error("Invalid input parameters for subtraction");
            throw new Error("Invalid input parameters");
        }
        logger.info(`Parameters ${n1} and ${n2} received for subtraction`);
        const result = sub(n1, n2);
        res.status(200).json({ statusCode: 200, data: result });
    } catch (error) {
        logger.error(error.toString());
        res.status(500).json({ statusCode: 500, msg: error.toString() });
    }
});

//multiplication
app.get("/mul", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1) || isNaN(n2)) {
            logger.error("Invalid input parameters for multiplication");
            throw new Error("Invalid input parameters");
        }
        logger.info(`Parameters ${n1} and ${n2} received for multiplication`);
        const result = mul(n1, n2);
        res.status(200).json({ statusCode: 200, data: result });
    } catch (error) {
        logger.error(error.toString());
        res.status(500).json({ statusCode: 500, msg: error.toString() });
    }
});

//division
app.get("/div", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1) || isNaN(n2)) {
            logger.error("Invalid input parameters for division");
            throw new Error("Invalid input parameters");
        }
        if (n2 === 0) {
            logger.error("Division by zero");
            throw new Error("Division by zero");
        }
        logger.info(`Parameters ${n1} and ${n2} received for division`);
        const result = div(n1, n2);
        res.status(200).json({ statusCode: 200, data: result });
    } catch (error) {
        logger.error(error.toString());
        res.status(500).json({ statusCode: 500, msg: error.toString() });
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
