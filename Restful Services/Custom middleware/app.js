
const express = require('express');
const Joi = require('joi');
const logger = require('./logger');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true})); // For getting info from forms
app.use(express.static('public')); // To serve static content from server

app.use(logger); // Custom middleware

const port = process.env.port || 3000;

const courses = [
    {id: 1, name: 'Course 1'},
    {id: 2, name: 'Course 2'},
    {id: 3, name: 'Course 3'}
];

app.listen(port, () => 
    console.log(`Server started at port ${port}`)
);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});