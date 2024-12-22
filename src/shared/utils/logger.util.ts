import winston from 'winston';

const { combine, timestamp, printf, colorize, align, json } = winston.format;

const customFormat = printf(({ level, message, timestamp }) => {
    return `[${timestamp}] - ${level}: ${message}`;
});

const logger = winston.createLogger({
    level: 'info',
    transports: [
        new winston.transports.Console({
            level: 'info',
            format: combine(
                timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                colorize(),
                align(),
                customFormat,
            ),
        }),
        new winston.transports.File({
            level: 'error',
            filename: 'logs/error.log',
            format: combine(
                timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                json(),
            ),
        }),
    ],
});

export default logger;
