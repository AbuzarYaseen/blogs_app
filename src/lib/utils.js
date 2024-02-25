// import mongoose from "mongoose"

// const connection = {};

// export const connectToDb = async () => {

//   try {
//     if(connection.isConnected) {
//       console.log("Using existing connection");
//       return;
//     }
//     const db = await mongoose.connect(process.env.MONGO);
//     connection.isConnected = db.connections[0].readyState;
//     // console.log(MONGO);
//   } catch (error) {
//     console.log(error);
//     throw new Error(error);
//   }
// };

import mongoose from "mongoose";

mongoose.set("strictQuery", false);

const { MONGO } = process.env;

if (!MONGO) {
  throw new Error("Please define the MONGO_URL environment variable");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDb() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = await mongoose.connect(MONGO);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectToDb;