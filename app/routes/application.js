import Ember from 'ember';

export default Ember.Route.extend({
  actions:{
      press(){
          alert('Hi From Route!');
      }
  }
});
