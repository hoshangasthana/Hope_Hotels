const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/Hope_Hotels', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('Failed to connect to MongoDB', err);
});

// Middleware
app.use(bodyParser.json());

// Routes
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);

// Default Route
app.get('/', (req, res) => {
  res.send('Welcome to our Hope Hotel');
});

// Start Server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
