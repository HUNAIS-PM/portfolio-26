import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

/**
 * MongoDB Atlas Example
 * 
 * This script demonstrates basic CRUD operations:
 * 1. Connects to MongoDB Atlas using MONGODB_URI
 * 2. Inserts 10 sample portfolio contact documents
 * 3. Finds and prints the 5 most recent documents
 * 4. Finds and prints a specific document by _id
 */

async function runExample() {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    console.error('Error: MONGODB_URI environment variable is not defined.');
    console.log('Please ensure you have a .env file with MONGO_URI.');
    return;
  }

  const client = new MongoClient(uri);

  try {
    console.log('--- Step 1: Connecting to MongoDB Atlas ---');
    await client.connect();
    console.log('Connected successfully to Atlas!');

    const db = client.db('portfolio_demo');
    const collection = db.collection('contacts');

    console.log('\n--- Step 2: Inserting 10 sample documents ---');
    const sampleContacts = Array.from({ length: 10 }).map((_, i) => ({
      full_name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
      message: `Heared about your work! Sample message ${i + 1}`,
      service: 'Web Development',
      timestamp: new Date(Date.now() - i * 3600000), // Each document 1 hour apart
    }));

    const result = await collection.insertMany(sampleContacts);
    console.log(`${result.insertedCount} documents were inserted.`);

    console.log('\n--- Step 3: Fetching the 5 most recent documents ---');
    const recentContacts = await collection.find()
      .sort({ timestamp: -1 })
      .limit(5)
      .toArray();

    console.table(recentContacts.map(c => ({
      ID: c._id.toString(),
      Name: c.full_name,
      Time: c.timestamp.toISOString()
    })));

    console.log('\n--- Step 4: Fetching one document by _id ---');
    const firstId = result.insertedIds[0];
    const singleDoc = await collection.findOne({ _id: firstId });
    console.log('Found Document:', JSON.stringify(singleDoc, null, 2));

  } catch (error) {
    console.error('Error occurred during execution:', error);
  } finally {
    console.log('\n--- Step 5: Closing connection ---');
    await client.close();
    console.log('Connection closed.');
  }
}

// Run the script
runExample().catch(console.dir);
