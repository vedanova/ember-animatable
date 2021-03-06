import Ember from 'ember';
import AnimatableMixin from 'ember-animatable';

export default Ember.Component.extend(AnimatableMixin, {
  classNames: ['my-component'],
  click(){
    this.animate('pulse');
  },

  didInsertElement(){
    this.$().offset();
    this._super(...arguments);
  }
});
