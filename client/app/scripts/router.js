Client.Router.map(function () {
  
  this.resource('documents', function(){
    this.resource('document', { path: '/:document_id' }, function(){
      this.route('edit');
    });
    this.route('create');
  });
  
});
