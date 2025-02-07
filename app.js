const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
    });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });

const groups = [
    { name: 'Book Club', description: 'A group for book lovers.' },
    { name: 'Fitness Group', description: 'A group for fitness enthusiasts.' },
];

app.get('/groups', (req, res) => {
    res.json(groups);
});

app.use(express.json());

app.post('/suggest-group', (req, res) => {
    const newGroup = req.body;
    groups.push(newGroup);
    res.status(201).json(newGroup);
});