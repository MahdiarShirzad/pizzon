import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI;

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  if (connected) {
    console.log("MongoDb is already connected");
    return;
  }
  //connect to mongodb

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
