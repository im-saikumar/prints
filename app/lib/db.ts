import { MongoClient } from 'mongodb';

const uri : any = process.env.MONGODB_URI; // Replace with your MongoDB connection string

async function connectToDatabase(): Promise<MongoClient> {
  try {
    const client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    return client;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to connect to MongoDB');
  }
}

export { connectToDatabase };
