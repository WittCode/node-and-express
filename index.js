const express = require('express');
const app = express();

const users = require('./routes/users');
const posts = require('./routes/posts');

app.get('/', (request, response) => {
    response.send('This is the home page!');
});

app.use('/users', users);
app.use('/posts', posts);

app.listen(1234);