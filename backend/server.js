const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes');
const app = express();
app.use(express.json());
app.use(cors());
app.use(fileUpload());

const PORT = 8000;

app.use('/api/auth', authRoutes);
app.use('/api/profiles', profileRoutes);

connectDB().then(
  app.listen(PORT, () => {
    console.log('Server is running on http://localhost:8000');
  })
);
