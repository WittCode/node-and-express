const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.render('login');
});

router.post('/', (request, response) => {
    response.send(`Your username is ${request.body.username}
        and your password is ${request.body.password}.`);
});

module.exports = router;