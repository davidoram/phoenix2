/*global Ember*/
Client.Value = DS.Model.extend({
	field: 			DS.belongsTo('field'),
	content: 		DS.attr('string')
});

// delete below here if you do not want fixtures
Client.Value.FIXTURES = [
{
    id: 		1,
	content:    "CONT-123-ABC"
  }
];
