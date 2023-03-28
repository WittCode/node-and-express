const express = require('express');
const app = express();
const path = require('path');
const db = require('./models');
const cookieParser = require('cookie-parser');

const users = require('./routes/users');
const posts = require('./routes/posts');
const login = require('./routes/login');
const logout = require('./routes/logout');

app.use(cookieParser());
app.use(express.json());

/**
 * 
 * sid=123; Expires=Thu, 21 Oct 2022 07:28:00 GMT; Secure;
 * 
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
app.use('/logout', logout);


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