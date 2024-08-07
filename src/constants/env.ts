export const CLIENT_PASSWORD_PROTECTION = process.env.NEXT_PUBLIC_CLIENT_PASSWORD_PROTECTION === 'true';
export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const MONGODB_PROTOCOL = process.env.MONGODB_PROTOCOL!;
const MONGODB_HOST = process.env.MONGODB_HOST!;
const MONGODB_PORT = process.env.MONGODB_PORT!;
const MONGODB_USERNAME = process.env.MONGODB_USERNAME!;
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD!;
export const MONGODB_DB_NAME = process.env.MONGODB_DB_NAME!;
export const MONGODB_URI = `${MONGODB_PROTOCOL}://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@${MONGODB_HOST}:${MONGODB_PORT}/`;
