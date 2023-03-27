const express = require('express');
const path = require('path');

const app = express();

const users = require('./routes/users');
const posts = require('./routes/posts');
const login = require('./routes/login');

app.use(express.json());
app.use(express.urlencoded());

app.use('/users', users);
app.use('/posts', posts);
app.use('/login', login);
app.use('/static', express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (request, response) => {
    response.send('Welcome to WittCode!');
});

app.listen(1234);