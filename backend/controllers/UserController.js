const knex = require('./../database/database.js');
const bcrypt = require('bcrypt');

exports.userCreate = async (req, res) => {
    let hash = bcrypt.hash(req.body.pass, 10);

    knex('user')
    .insert({
        name: req.body.name,
        pass: hash,
    })
    .then(() => {
        res.json(true);
    })
    .catch((err) => {
        res.json({ message: `There was an error creating User ${req.body.name}.\n${err}`});
    });
}

exports.userVerify = async (req, res) => {
    knex('user')
    .where({
        name: req.body.name,
    })
    .select('*')
    .first()
    .then((userData) => {
        if (bcrypt.compare(req.body.pass, userData.pass)) {
            res.json(true);
        }
        else {
            res.json(false);
        }
    })
    .catch((err) => {
        res.json({ message: `There was an error logging in User ${req.body.name}.\n${err}`});
    })
}