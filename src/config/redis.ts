import IORedis from 'ioredis';

const connection = new IORedis({
    maxRetriesPerRequest: null,
});

export default connection;
