const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Entry = require('../models/Entry');

//Get Entry List
router.get('/', (req, res) => Entry.findAll()
    .then(entries => {
        res.render('entries', {
            entries:entries
        });
    })
    .catch(err => console.log(err)));

//hardcode an Entry
router.get('/add', (req, res)=> {
    const data = {
        news: 'And everyday was christmas',
        user: 'S. Claus',
    }
    let {news, user} = data;

    //Insert into Table
    Entry.create({
        news: news,
        user: user
    })
        .then(entry => res.redirect('/entries'))
        .catch(err => console.log(err))
});

module.exports = router;