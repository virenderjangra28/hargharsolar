import mongoose from "mongoose";

const DB_NAME = process.env.MONGODB_DB || "hargharsolar";

function getConnectionString() {
  if (process.env.MONGODB_URI) {
    return process.env.MONGODB_URI;
  }

  const username = process.env.MONGODB_USERNAME || process.env.username;
  const password = process.env.MONGODB_PASSWORD || process.env.password;

  if (!username || !password) {
    throw new Error(
      "Missing MongoDB credentials. Set MONGODB_URI (recommended) or username/password in environment variables.",
    );
  }

  return `mongodb+srv://${encodeURIComponent(username)}:${encodeURIComponent(password)}@hargharsolar.6afmrtg.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=hargharsolar`;
}

let cached = global._mongooseHgs;

if (!cached) {
  cached = global._mongooseHgs = { conn: null, promise: null };
}

export async function connectDB() {
  if (mongoose.connection.readyState === 1 && mongoose.connection.name !== DB_NAME) {
    await mongoose.disconnect();
    cached.conn = null;
    cached.promise = null;
  }

  if (cached.conn && mongoose.connection.readyState === 1) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(getConnectionString(), {
      dbName: DB_NAME,
      bufferCommands: false,
      maxPoolSize: 10,
      minPoolSize: 1,
      serverSelectionTimeoutMS: 5000,
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null;
    throw error;
  }

  return cached.conn;
}
