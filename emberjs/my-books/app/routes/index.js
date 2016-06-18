import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let books = this.get('store').findAll('book');
    return books;
  }
});
