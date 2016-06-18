import Ember from 'ember';

export default Ember.Component.extend({

  filterCriteria: "",

  actions: {
    isReadChanged(book) {
      console.log('action from bookMain');
      this.get('isReadChanged')(book);
    }
  }
});
