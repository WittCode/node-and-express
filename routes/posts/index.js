const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.send('<h1>This is the home page of the posts.</h1>')
});

router.get('/most-popular', (request, response) => {
    response.send('<h1>These are the most popular posts.</h1>');
});

module.exports = router;