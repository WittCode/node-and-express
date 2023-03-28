const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.send('This is the home page of the posts.')
});

router.get('/most-popular', (request, response) => {
    response.send('These are the most popular posts.');
});

module.exports = router;