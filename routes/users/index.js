const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.send('<h1>This is all the users!</h1>')
});

router.get('/wittcode', (request, response) => {
    response.send(`<h1>This is wittcode's profile!</h1>`);
});

module.exports = router;  