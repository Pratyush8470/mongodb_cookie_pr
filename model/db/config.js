const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/adminPannel')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => {
        console.log('Could not connect to MongoDB', err);
    });

const userSchema = new mongoose.Schema({
    fname: {type :String, require:true},
    lname: {type :String, require:true},
    email: {type :String, require:true},
    user: {type :String, require:true},
    password: {type :String, require:true}
});

const collection = mongoose.model('db', userSchema);

module.exports = collection;