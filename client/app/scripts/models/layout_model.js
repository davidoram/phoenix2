/*global Ember*/
Client.Layout = DS.Model.extend({
	field: 			DS.belongsTo('field'),
	label: 			DS.attr('string'),
	lblClass: 		DS.attr('string'),
	widgetClass:	DS.attr('string'),
	
});

// delete below here if you do not want fixtures
Client.Layout.FIXTURES = [
  
  {
    id: 			1,
	label:   		"Project Key",
	lblClass: 		"col-sm-2 control-label",
	widgetClass: 	"col-sm-4",
  }

];
