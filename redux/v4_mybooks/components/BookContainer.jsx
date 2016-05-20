import React, { Component } from 'react';

import Book from './Book'

const BookContainer = ({ books, searchString, onBookIsReadClick }) => (
  <div className="row">
    {
      books
      .filter(el => el.title.search(searchString) > -1)
      .map((book, index) => (<Book key={index} {...book} onIsRead={onBookIsReadClick.bind(null, book.id)} />))
    }
  </div>
);

export default BookContainer;
