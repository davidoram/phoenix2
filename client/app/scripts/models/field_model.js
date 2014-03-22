/*global Ember*/
var attr = DS.attr;
Client.Field = DS.Model.extend({
	document: 		DS.belongsTo('document'),
	layout: 		DS.belongsTo('layout'),
	value: 			DS.belongsTo('value')
});

// delete below here if you do not want fixtures
Client.Field.FIXTURES = [
  
  {
    id: 		1,
	layout: 	1,
	value: 		1
  },
  {
    id: 		2,
	layout: 	3,
	value: 		3
  },
  {
    id: 		3,
	layout: 	2,
	value: 		2
  }

];
