import Ember from 'ember';

const books = [
        {
          title: 'Game of Thrones',
          author: 'George Martin',
          description: 'Here is the first volume in George R. R. Martin’s magnificent cycle of novels that includes A Clash of Kings and A Storm of Swords.',
          image: 'got.jpg'
        }, {
          title: 'The Lord of the Rings',
          author: 'J.R.R. Tolkien',
          description: 'In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others.',
          image: 'lotr.jpg'
        }
    ];

export default Ember.Route.extend({
  model() {
    return books;
  }
});
