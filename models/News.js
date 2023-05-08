const Sequelize = require('sequelize');
const db = require('../config/database');

const News = db.define('news', {
  news: {
    type: Sequelize.STRING
  },
  user: {
    type: Sequelize.STRING
  }
})
module.exports = News;
