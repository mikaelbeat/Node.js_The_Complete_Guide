
const express = require('express');
const Joi = require('joi');

const app = express();
app.use(express.json());

const port = process.env.port || 3000;

const categories = [
    {id: 1, name: 'Horror'},
    {id: 2, name: 'Action'},
    {id: 3, name: 'Comedy'}
];

app.listen(port, () => console.log(`Server started at port ${port}.`));

app.get('/', (req, res) => {
    res.write(`*** WELCOME TO VIDLY VIDEO SERVICE! ***\n`);
    res.send();
});

app.get('/api/categories', (req, res) =>{
    res.send(categories);
});

app.get('/api/categories/:id', (req, res) => {
    const category = categories.find(c => c.id === parseInt(req.params.id));
    if (!category) return res.status(404).send('Category not found.');
    res.send(category);
});

app.post('/api/categories', (req, res) => {
    const {error} = validateCategory(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }
    const category = {
        id: categories.length + 1,
        name: req.body.name
    };
    categories.push(category);
    res.send(category);
});

app.put('/api/categories/:id', (req, res) => {
    const category = categories.find(c => c.id === parseInt(req.params.id));
    if (!category) {return res.status(404).send('Category not found.');
    return;
    };

    const {error} = validateCategory(req.body);
    if (error){
        res.status(400).res.send(error.details[0],message);
    };
    category.name = req.body.name;
    res.send(category);
});


app.delete('/api/categories/:id', (req, res) => {
    const category = categories.find(c => c.id === parseInt(req.params.id));
    if (!category) {return res.status(404).send('Category not found.')};

    const index = categories.indexOf(category);
    categories.splice(index, 1);
    res.send(category);
});




function validateCategory(category) {
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(category, schema);
};