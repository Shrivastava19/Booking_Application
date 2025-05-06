
require('dotenv').config();  
const express = require('express');
const mongoose = require('mongoose');

const authRoutes      = require('./routes/auth');
const activitiesRoutes = require('./routes/activities');
const bookingsRoutes  = require('./routes/bookings');

const app = express();
app.use(express.json());  


const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/activitydb';
mongoose.connect(mongoURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/auth', authRoutes);
app.use('/api/activities', activitiesRoutes);
app.use('/api/bookings', bookingsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
