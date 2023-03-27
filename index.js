const express = require('express');
const path = require('path');
const app = express();

const users = require('./routes/users');
const posts = require('./routes/posts');

app.use('/users', users);
app.use('/posts', posts);
app.use('/static', express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug');
app.set('views', './views')

app.get('/', [

    (request, response, next) => {
        console.log('middleware 1');
        next();
    },

    (request, response, next) => {
        console.log('middleware 2');
        return next();
        response.send('This is middleware number 2!');
    },

    (request, response, next) => {
        console.log('middleware 3');
        next();
    },

    (request, response, next) => {
        response.send('This is middleware number 4!');
        next();
    }
]);

app.use(function(request, response, next) {
    console.log('This is global middleware!');
    next();
});

app.listen(1234);