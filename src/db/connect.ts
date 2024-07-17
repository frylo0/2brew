import mongoose from 'mongoose';

const status = { connected: false };

const MONGODB_URI = process.env.MONGODB_URI!;
const MONGODB_NAME = process.env.MONGODB_NAME!;

export async function dbConnect() {
	if (status.connected) return;

	const db = await mongoose.connect(MONGODB_URI, { dbName: MONGODB_NAME });
	status.connected = true;

	return db;
}
