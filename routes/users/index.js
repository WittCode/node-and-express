const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.send('This is all the users!')
});

router.get('/:username', (request, response) => {
    response.render('profile', { username: request.params.username });
});

router.get('/:username/:favChannel', (request, response) => {
    response.send(`${request.params.username}'s favorite YouTube channel is ${request.params.favChannel}!`);
});

module.exports = router;