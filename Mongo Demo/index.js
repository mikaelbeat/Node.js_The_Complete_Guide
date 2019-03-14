const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground', {useNewUrlParser: true})
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.log('COuld not connect to MongoDB...', err));

    const courseSchema = new mongoose.Schema({
        name: String,
        author: String,
        tags: [String],
        date: {type: Date, default: Date.now}
    });