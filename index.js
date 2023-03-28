const express = require('express');
const app = express();
const path = require('path');
const db = require('./models');

const users = require('./routes/users');
const posts = require('./routes/posts');
const login = require('./routes/login');

app.use(express.json());

/**
 * {
 * Content-Type: application/x-www-form-urlencoded
 *  "username": "WottCode",
 *  "password": "password"
 * }
 */

app.use(express.urlencoded({ extended: true }));

app.use('/users', users);
app.use('/posts', posts);
app.use('/login', login);


app.use('/static', express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

(async () => {
    await db.sequelize.sync();
})();

app.use((req, res, next) => {
    console.log(new Date().toLocaleDateString());
    next();
})

app.get('/', [
    (req, res, next) => {
        res.send('This is the home page!')
    }
]);

app.use(function(request, response, next) {
    console.log('This is global middleware!');
    next();
});

app.listen(1234);