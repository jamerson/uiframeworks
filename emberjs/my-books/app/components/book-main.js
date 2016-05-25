import Ember from 'ember';

export default Ember.Component.extend({

  filterCriteria: "",

  actions: {
    isReadChangedMain() {
      console.log('action from bookMain');
    }
  }
});
