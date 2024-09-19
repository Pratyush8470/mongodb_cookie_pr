const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/adminPannel')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => {
        console.log('Could not connect to MongoDB', err);
    });

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    user: String,
    password: String,
});

const collection = mongoose.model('db', userSchema);

module.exports = collection;