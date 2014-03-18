/*global Ember*/
Client.Document = DS.Model.extend({});

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
