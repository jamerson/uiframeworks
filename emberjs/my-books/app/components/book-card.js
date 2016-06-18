import Ember from 'ember';

export default Ember.Component.extend({
  isReadChanged: Ember.K,

  onIsReadChanged: Ember.observer('book.isRead', function() {

    this.get('isReadChanged')(this.get('book'));
  })

});
