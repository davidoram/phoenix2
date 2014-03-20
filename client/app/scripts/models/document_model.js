/*global Ember*/
Client.Document = DS.Model.extend({
	title: 			DS.attr('string'),
	key: 			DS.attr('string'),
	organisation: 	DS.attr('string'),
	fields: 		DS.hasMany('field',{async:true})
});

// probably should be mixed-in...
Client.Document.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

// delete below here if you do not want fixtures
Client.Document.FIXTURES = [
  
  {
    id: 			1,
	title: 			"Project to make bigger cows",
	key: 			"CONT-123-ABC",
	organisation: 	"University of Moo",
	fields: 		[1]
  }
  
  
];
