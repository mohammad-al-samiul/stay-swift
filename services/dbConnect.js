import mongoose from "mongoose";

export async function dbConnect() {
  try {
    const conn = await mongoose.connect(String(process.env.DB_URI));
    if (conn.connection.readyState === 1) {
      console.log("Database connected!");
    }
    return conn;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to connect to the database");
  }
}
