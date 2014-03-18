Client.DocumentEditController = Ember.ObjectController.extend({
  needs: 'document',
  actions: {
    save: function(){
      self = this
      this.get('buffer').forEach(function(attr){
        self.get('controllers.document.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('document',this.get('model'));
    }
  }
});

