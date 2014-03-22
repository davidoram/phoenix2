/*global Ember*/
Client.Layout = DS.Model.extend({
	field: 			DS.belongsTo('field'),
	row:         	DS.attr('numeric'),
	label: 			DS.attr('string'),
	lblClass: 		DS.attr('string'),
	widgetClass:	DS.attr('string'),
	
});

// delete below here if you do not want fixtures
Client.Layout.FIXTURES = [
  
  {
    id: 			1,
	row: 			1,
	label:   		"Project Key",
	lblClass: 		"col-sm-2 control-label",
	widgetClass: 	"col-sm-4",
  },
  {
    id: 			2,
	row: 			2,
	label:   		"Description",
	lblClass: 		"col-sm-2 control-label",
	widgetClass: 	"col-sm-10",
  },
  {
    id: 			3,
	row: 			1,
	widgetClass: 	"col-sm-4",
  }

];
