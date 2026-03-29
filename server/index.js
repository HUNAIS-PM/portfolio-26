import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Schema
const contactSchema = new mongoose.Schema({
  full_name: String,
  email: String,
  phone: String,
  company: String,
  service: String,
  other_service: String,
  project_type: String,
  budget: String,
  timeline: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Contact = mongoose.model('Contact', contactSchema);

// Routes
app.post('/api/contact', async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json({ message: 'Message saved successfully!' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

console.log('Attempting to connect to MongoDB Atlas...');

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB Atlas successfully');
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
    console.log('Tip: Check your internet connection and Atlas Network Access (IP Whitelist).');
  });

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

