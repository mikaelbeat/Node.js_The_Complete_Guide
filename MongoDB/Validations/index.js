const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground', {useNewUrlParser: true})
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.log('Could not connect to MongoDB...', err));

    const courseSchema = new mongoose.Schema({
        name: {
            type: String, 
            required: true,
            minlength: 5,
            maxlength: 255
        },
        category: {
            type: String,
            required: true,
            enum: ['web', 'mobile', 'network']
        },
        author: String,
        tags: [String],
        date: {type: Date, default: Date.now},
        isPublished: Boolean,
        price: {
            type: Number,
            required: function() { return this.isPublished; }
        }
    });

    const Course = mongoose.model('Course', courseSchema);

    async function createCourse() {
        const course = new Course({
            name: 'Angular Course',
            category: 'Horror',
            author: 'Mosh',
            tags: ['angular', 'frontend'],
            isPublished: true,
            price: 14
        });

        try {
            const result = await course.save();
            console.log(result);
        }
        catch(ex) {
            console.log(ex.message);
        }
    }

    createCourse();

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

    // getCourses();



    // HOW TO UPDATE DOCUMENT

    async function updateCourse(id) {
        // Approach: QUery first
        // findById()
        // Modify its properties
        // save

        const course = await Course.findById(id);
        if (!course) return;

        course.isPublished = true;
        course.author = ' Another Author';

/*         course.set({
            isPublished: true,
            author: 'Another Author'
        }); */

        const result = await course.save();
        console.log(result);
    }
    
    //updateCourse('5c8b7264108da31b34fbdd5e');

    async function updateCourse2(id) {
        // Approach: Update first
        // Uppdate directly
        // Optionally get the updated document

        // Updates all documents which are not published
        //const course = await Course.update({isPublished: false});

        const result = await Course.update({_id: id}, {
            $set: {
                author: 'Mosh',
                isPublished: false
            }
        });
        console.log(result);    
    }

    //updateCourse2('5c8b7264108da31b34fbdd5e');


    // DELETE DOCUMENT

    async function deleteCourse(id) {
        const result = await Course.deleteOne({_id: id});
        console.log(result);
    }

    //deleteCourse('5c8b7264108da31b34fbdd5e');

    