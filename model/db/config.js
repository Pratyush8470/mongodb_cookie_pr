const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://pratyushbhatiya106:pratyush87888990@cluster1.2bdmb.mongodb.net/adminPannel')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => {
        console.log('Could not connect to MongoDB', err);
    });

const userSchema =  mongoose.Schema({
    fname: { type: String, require: true },
    lname: { type: String, require: true },
    email: { type: String, require: true },
    userName: { type: String, require: true },
    password: { type: String, require: true }
});

const collection = mongoose.model('db', userSchema);

module.exports = collection;