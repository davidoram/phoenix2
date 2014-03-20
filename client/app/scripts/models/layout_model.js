/*global Ember*/
var attr = DS.attr;
Client.Layout = DS.Model.extend({
	field: 			DS.belongsTo('field'),
	row: 			DS.attr('number'),
	columnStart: 	DS.attr('number'),
	columnSpan: 	DS.attr('number'),
	type: 			DS.attr('string'),
	classes: 		DS.attr('string')
	
});

// delete below here if you do not want fixtures
Client.Layout.FIXTURES = [
  
  {
    id: 			1,
	row:            1,
	columnStart:   	4,
	columnSpan:    	3,
	type:           "text", 
	classes:        ""      
	
  }

];
