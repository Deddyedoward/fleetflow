import app from './App';
import logger from './shared/utils/logger.util';
import dotenv from 'dotenv';

dotenv.config();

class Server {
    private port: number;

    constructor() {
        this.port = process.env.PORT ? parseInt(process.env.PORT) : 3000;
    }

    public start() {
        app.listen(this.port, () => {
            logger.info(`Server running on port ${this.port}`);
        });
    }
}

const server = new Server();
server.start();
