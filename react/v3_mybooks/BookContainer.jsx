import React, { Component } from 'react';

import Book from './Book'

class BookContainer extends Component {
  render(){

    const books = [
        {
          title: 'Game of Thrones',
          author: 'George Martin',
          description: 'Here is the first volume in George R. R. Martin’s magnificent cycle of novels that includes A Clash of Kings and A Storm of Swords.',
          image: 'images/got.jpg'
        }, {
          title: 'The Lord of the Rings',
          author: 'J.R.R. Tolkien',
          description: 'In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others.',
          image: 'images/lotr.jpg'
        }
    ];

    return (
      <div className="row">
      {
        books.map(function (book, index) {
          return (
              <Book key={index} {...book} />
          );
        })
      }
      </div>
    );
  }
}

export default BookContainer;
