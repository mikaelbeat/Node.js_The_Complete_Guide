const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground', {useNewUrlParser: true})
    .then(() => console.log('Connected to MongoDB...'))
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
            name: 'Angular Course',
            author: 'Mosh',
            tags: ['angular', 'frontend'],
            isPublished: true
        });

        const result = await course.save();
        console.log(result);
    }

    async function getCourses(){

        // eq - Equal
        // ne - Not equal
        // gt - Greater than
        // gte - Greater than or equal to
        // lt - Less than
        // lte - Less than equal to
        // in
        // nin - Not in

        // FINDS ALL DOCUMENTS
        // const courses = await Course.find();
     
            // FILTERED QUERY
/*         const courses = await Course
            .find({author: 'Mosh', isPublished: true})
            .limit(10)
            .sort( {name: 1})
            .select({name: 1, tags: 1}); */

        const courses = await Course
        //    .find({price: {$gte: 10, $lte: 20}}); Price is between 10 and 20
        //    .find().or([{author: 'Mosh'}, {isPublished: true}]); One is true
        //    .find().and([{author: 'Mosh'}, {isPublished: true}]); Both are true

        // FOR COUNTING DOCUMENTS
        // .find()
        // .count();


        console.log(courses);
    }

    getCourses();

    // createCourse();

    