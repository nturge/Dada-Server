const express = require('express');
const router = express.Router();
const db = require('../config/database');
const News = require('../models/News');

// Get News list
router.get('/', (req, res) => 
  News.findAll()
    .then(entries => res.render('entries', {
        entries: entries
      }))
    .catch(err => res.render('error', {error: err})));

// Display add gig form
router.get('/save', (req, res) => res.render('save'));

// Add a gig
router.post('/save', (req, res) => {
  let { news, user } = req.body;
  let errors = [];

  // Validate Fields
  if(!news) {
    console.log('no news')
    errors.push({ text: 'no news' });
  }
  if(!user) {
    console.log('no user')
    errors.push({ text: 'no user' });
  }

  // Check for errors
  if(errors.length > 0) {
    res.render('save', {
      errors,
      news, 
      user, 
    });
  } else {

    // Insert into table
    News.create({
      news,
      user,
    })
      .then(News => res.redirect('/entries'))
      .catch(err => res.render('error', {error:err.message}))
  }
});
module.exports = router;
