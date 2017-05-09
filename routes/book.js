var express = require('express');
var Book = require('../models/book');
var bookRouter = express.Router();

bookRouter.get('/', function(req, res) {
  Book.find(function(err, books) {
    if(err) {
      res.send(err);
    }

    //res.send(books);
    res.render('books.ejs', {books: books});
  });
});

bookRouter.post('/', function(req, res) {
  var book = new Book({
    id: req.body.id,
    name: req.body.name,
    price: req.body.price,
    author: req.body.author
  });

  book.save(function(err) {
    if(err) {
      res.send(err);
    }

    res.send('Book saved');
  })
});

bookRouter.get('/:book_id', function(req, res) {
  Book.findOne({id: req.params.book_id}, function(err, book) {
    if(err) {
      res.send(err);
    }

    res.send(book);
  });
});

bookRouter.put('/:book_id', function(req, res) {
  Book.findOne({id: req.params.book_id}, function(err, book) {
    if(err) {
      res.send(err);
    }

    console.log(book);

    if(req.body.name) {
      book.name = req.body.name;

      book.save(function(err) {
        if(err) {
          res.send(err);
        }

        res.send(book);  
      });
    }

    
  });
});

bookRouter.delete('/:book_id', function(req, res) {
  Book.findOne({id: req.params.book_id}, function(err, book) {
    if(err) {
      res.send(err);
    }

    book.remove(function(err) {
      if(err) {
        console.log(err);
      }

      res.send('Deleted successfully...');
    })

  });
});


module.exports = bookRouter;