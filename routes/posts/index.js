const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    console.log(request.cookies);
    response.send('This is the home page of the posts.')
});

router.get('/most-popular', (request, response) => {
    console.log(request.cookies);
    response.send('These are the most popular posts.');
});

module.exports = router;