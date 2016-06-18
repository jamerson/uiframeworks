import Model from 'ember-data/model';
import DS from 'ember-data';

export default Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  author: DS.attr('string'),
  image: DS.attr('string'),
  isRead: DS.attr('boolean')
});
