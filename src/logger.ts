import { hostname } from 'node:os';
import pino from 'pino';

const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      translateTime: 'SYS:dd-mm-yyyy HH:MM:ss',
      ingore: `${process.pid}`
    }
  }
});

export default logger;
