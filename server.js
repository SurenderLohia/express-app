var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var api = require('./routes/api');
var books = require('./routes/book');
var dbConfig = require('./db');
var mongoose = require('mongoose');

var port = process.env.PORT || 8080;

mongoose.connect(dbConfig.url);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.get('/', function(req, res) {
  res.send('Hello world');
});

app.use('/api', api);

app.use('/books', books);

app.listen(port);

console.log('App running on localhost:' + port);