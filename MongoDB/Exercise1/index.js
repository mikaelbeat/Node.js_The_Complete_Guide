const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises', {useNewUrlParser: true})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Could not connect to MongoDB...', err));

    const courseSchema = new mongoose.Schema({
        name: String,
        author: String,
        tags: [String],
        date: {type: Date, default: Date.now}
    });

    const Course = mongoose.model('Course', courseSchema);

    async function createCourse() {
        const course = new Course({
            name: '',
            author: '',
            tags: [],
            isPublished: true
        });

        const result = await course.save();
        console.log(result);
    }

    async function getCourses() {
        const courses = await Course
            .find({tags: 'backend'})
            .select({name: 1, author: 1})
            .sort({name: 1});

        console.log(courses);
    }

    getCourses();