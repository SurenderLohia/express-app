var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
  id: Number,
  name: String,
  price: Number,
  author: String
});

var Book = mongoose.model('Book', bookSchema);

module.exports = Book;