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
            isPublished: true,
            price: Number
        });

        const result = await course.save();
        console.log(result);
    }

    async function getCourses1() {
        const courses = await Course
            .find({isPublished: true, tags: 'backend'})
            .sort({name: 1})
            .select({name: 1, author: 1});
        console.log(courses);
    }

    //getCourses1();

    async function getCourses2() {
        const courses = await Course
            .find({isPublished: true}, tags: {})
            .sort({price: -1})
            .select({name: 1, author: 1});
        console.log(courses);
    }

    getCourses2();
