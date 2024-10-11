// Create web server

const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/comments', (req, res) => {
    const comments = JSON.parse(fs.readFileSync('comments.json'));
    res.send(comments);
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});