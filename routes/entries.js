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

//Add a Entry
router.get('/add', (req, res)=> {
    const data = {
        news: 'And everyday was christmas',
        user: 'S. Claus',
        createdAt: 'May 2, 2023',
        updatedAt: 'May 3, 2023'
    }
    let {news, user, createdAt, updatedAt} = data;

    //Insert into Table
    Entry.create({
        news: news,
        user: user,
        createdAt: createdAt,
        updatedAt: updatedAt
    })
        .then(entry => res.redirect('/entries'))
        .catch(err => console.log(err))
});

module.exports = router;