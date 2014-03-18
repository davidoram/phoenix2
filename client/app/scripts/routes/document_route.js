Client.DocumentRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('document', params.document_id);
  }
});

