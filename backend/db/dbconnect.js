import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_DB_URI);
    console.log(`Connected to MongoDB: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error Connecting to MongoDB: ${error.message}`);
  }
};

export default dbConnect;
