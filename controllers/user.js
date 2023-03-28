const { models: { User } } = require('../models');

module.exports = {

    create: async (req, res) => {
        if (req.body.username && req.body.password) {
            const { username, password } = req.body;

            await User.create({
                username,
                password
            });

            res.cookie('username', username, { secure: true });
            res.render('profile', { username });
        } else {
            res.send('Not added to the database!');
        }
    }

}