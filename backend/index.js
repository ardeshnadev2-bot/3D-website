const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load env vars
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Nexus AI Backend API' });
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Received contact submission:', { name, email, message });
  res.status(200).json({ success: true, message: 'Message received successfully.' });
});

// Export the Express API for Vercel
module.exports = app;

if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
