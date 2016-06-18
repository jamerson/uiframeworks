/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var booksRouter = express.Router();
  var books = [{
    id: '1', //Explicar o porque
    title: 'Game of Thrones',
    author: 'George Martin',
    description: 'Here is the first volume in George R. R. Martin’s magnificent cycle of novels that includes A Clash of Kings and A Storm of Swords.',
    image: 'got.jpg',
    isRead: 0
  }, {
    id: '2', //Explicar o porque
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    description: 'In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others.',
    image: 'lotr.jpg',
    isRead: 0
  }];

  booksRouter.get('/', function(req, res) {
    res.send({
      'books': [{
        id: '1', //Explicar o porque
        title: 'Game of Thrones',
        author: 'George Martin',
        description: 'Here is the first volume in George R. R. Martin’s magnificent cycle of novels that includes A Clash of Kings and A Storm of Swords.',
        image: 'got.jpg',
        isRead: '0'
      }, {
        id: '2', //Explicar o porque
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        description: 'In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others.',
        image: 'lotr.jpg',
        isRead: '0'
      }]
    });
  });

  booksRouter.post('/', function(req, res) {
    //var book_id = req.params.id
    //books[book_id - 1].isRead = req.body.book.isRead;
    res.status(201).end();
  });

  booksRouter.get('/:id', function(req, res) {
    res.send({
      'books': {
        id: req.params.id
      }
    });
  });

  booksRouter.put('/:id', function(req, res) {
    res.send({
      'books': {
        id: req.params.id
      }
    });
  });

  booksRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/books', require('body-parser').json());
  app.use('/api/books', booksRouter);
};
