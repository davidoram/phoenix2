/*global Ember*/
var attr = DS.attr;
Client.Value = DS.Model.extend({
	field: 			DS.belongsTo('field'),
	label: 			DS.attr('string'),
	content: 		DS.attr('string')
	
});

// delete below here if you do not want fixtures
Client.Value.FIXTURES = [
  
  {
    id: 		1,
	label:   	"Project Key",
	content:    "CONT-123-ABC"
  }
];
