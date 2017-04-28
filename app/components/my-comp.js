import Ember from 'ember';

export default Ember.Component.extend({
    actions:{
        button(){
//            this.sendAction('mypress');
              this.attrs.mypress();
        }
    }
});
