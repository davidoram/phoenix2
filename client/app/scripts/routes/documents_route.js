Client.DocumentsRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('document');
  }
});

