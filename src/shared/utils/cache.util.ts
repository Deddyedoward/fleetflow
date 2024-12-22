import connection from "../../config/redis";

export const cacheData = async (key: string, value: any, expiration: number) => {
    try {
        await connection.setex(key, expiration, JSON.stringify(value));
    } catch (error) {
        console.error('Error caching data: ', error)
    }
}

export const getCacheData = async (key: string) => {
    try {
        console.log('Get data from cache');
        const cachedData = await connection.get(key);
        return cachedData ? JSON.parse(cachedData) : null;
    } catch (error) {
        console.log('Error get cache data: ', error)
    }
}