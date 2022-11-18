const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/api';
mongoose.connect(url);

// establishing the connection with the database