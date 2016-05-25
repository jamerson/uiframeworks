import Ember from 'ember';

export default Ember.Component.extend({

  filteredBooks: Ember.computed('filterCriteria', 'books', function() {
    var filterCriteria = this.get('filterCriteria');
    return this.get('books').filter(function(item) {
      return item.title.toUpperCase().indexOf(filterCriteria.toUpperCase()) !== -1;
    });
  }),

  actions: {
    isReadChanged() {
      console.log('action from bookList');
      this.get('isReadChangedList')();
    }
  }

});
