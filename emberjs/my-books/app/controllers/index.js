import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    isReadChanged(book) {
      console.log('action from controller:' + book.get('isRead'));
      book.save();
    }
  }
});
