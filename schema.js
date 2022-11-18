const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    shyari: String,
    lang: String,
    date: Date, date: {
        type: Date,
        default: Date.now()
        // default: (new Date()).getTime()
    }
});

// Here shyari is the collection name and ProductSchema is the schema defined

module.exports = mongoose.model('shyari', productSchema);