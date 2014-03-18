/*global Ember*/
var attr = DS.attr;
Client.Document = DS.Model.extend({
	title: attr(),
	key: attr(),
	organisation: attr()
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
    id: 0,
	title: "Project to make bigger cows",
	key: "CONT-123-ABC",
	organisation: "University of Moo",
  	fields: [
		{
	      value: {
	  			key:      20010,
	  			type:     "Project",
	  			column:   "projectKey",
	  			value:    "CONT-123-ABC",
	  			dataType: "string",
	  			label:    "Project key"
	  		},
	  		layout: {
	  			component: "read-only-string",
	  			bootstrap:  {
	  				row:            1,
	  				column_start:   4,
	  				column_span:    3,
	  				type:           "text", 
	  				classes:        []      
	  			}
	      }
    	}
  	]
  }
  
  
];
