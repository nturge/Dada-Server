const express = require('express');
const { engine } = require ('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

//Database
const db = require('./config/database');

// Test DB
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))

//Handlebars
app.set('view engine', 'hbs');
app.engine('hbs', engine({
    layoutsDir: `${__dirname}/views/layouts`,
    extname: 'hbs',
    defaultLayout: 'index'
 }));


// Body Parser
app.use(bodyParser.urlencoded({ extended:false }));

//route to static folder
app.use(express.static('www'));

// Index route
app.get('/', (req, res) => res.render('main'));

//Entries routes
app.use('/entries', require('./routes/entries'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
