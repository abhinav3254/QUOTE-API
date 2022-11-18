
// Database name is api

const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1/api';
mongoose.connect(url);

// establishing the connection with the database