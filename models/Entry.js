const Sequelize = require('sequelize');
const db = require('../config/database');

const Entry = db.define('entry', {
  news: {
    type: Sequelize.STRING
  },
  user: {
    type: Sequelize.STRING
  }
})

module.exports = Entry;
