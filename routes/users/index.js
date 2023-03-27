const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.send('This is all the users!')
});

router.get('/:username', (request, response) => {
    if (request.query) {
        Object.entries(request.query).forEach((object) => {
            let [key, value] = object;
            console.log(`${key} : ${value}`);
        })
    }
    response.send(`This is ${request.params.username}'s profile!`);
});

router.get('/:username/:favChannel', (request, response) => {
    response.send(`${request.params.username}'s favorite YouTube channel is ${request.params.favChannel}!`);
});

module.exports = router;