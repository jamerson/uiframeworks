import Ember from 'ember';

export default Ember.Component.extend({

  filteredBooks: Ember.computed('filterCriteria', 'books', function() {
    var filterCriteria = this.get('filterCriteria');
    return this.get('books').filter(function(item) {
      return item.get('title').toUpperCase().indexOf(filterCriteria.toUpperCase()) !== -1;
    });
  }),

  actions: {
    isReadChanged(book) {
      console.log('action from bookList');
      this.get('isReadChanged')(book);
    }
  }

});
