import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    isReadChanged() {
      console.log('action from bookList');
      this.get('isReadChangedList')();
    }
  }

});
