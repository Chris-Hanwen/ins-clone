const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const app = express();
app.use(express.json());
app.use(cors());

const PORT = 8000;

app.use('/api/auth', authRoutes);

connectDB().then(
  app.listen(PORT, () => {
    console.log('Server is running on http://localhost:8000');
  })
);
