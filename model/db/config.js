const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://pratyushbhatiya106:pratyush87888990@cluster1.2bdmb.mongodb.net/adminPannel')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => {
        console.log('Could not connect to MongoDB', err);
    });

const userSchema = new mongoose.Schema({
    fname: { type: String, require: true },
    lname: { type: String, require: true },
    email: { type: String, require: true },
    userName: { type: String, require: true },
    password: { type: String, require: true },
    path: { type: String, require: true }
});

const collection_d = mongoose.model('dbs', userSchema);

module.exports = collection_d;