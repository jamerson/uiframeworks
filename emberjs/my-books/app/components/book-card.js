import Ember from 'ember';

export default Ember.Component.extend({
  isRead: false,

  isReadChanged: Ember.K,

  onIsReadChanged: Ember.observer('isRead', function() {
    console.log('action from bookCard');
    this.get('isReadChanged')();
  })

});
