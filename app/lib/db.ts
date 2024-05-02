
import mongoose from 'mongoose';

const MONGODB_URI : any = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

let cachedDb : any = null;

export async function connectDb() {
  if (cachedDb) {
    return cachedDb;
  }

  try {
    // const db = await mongoose.connect(MONGODB_URI, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // });
    const db = await mongoose.connect(MONGODB_URI);
    cachedDb = db;
    console.log('MongoDB connected successfully');
    return db;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw new Error('Failed to connect to MongoDB');
  }
}

export default connectDb;
