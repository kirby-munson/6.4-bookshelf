var $ = require('jquery');
var Backbone = require('backbone');
var views = require('./views/books');
var models = require('./models/books');

var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'detail/:id/': 'detail'
  },
  initialize: function(){
    /*
     * Initialize gets called when the router is invoked.
     * We will setup our collection here and assign it to a collection property
     * of the router itself
     */
    this.collection = new models.BookCollection();
  },
  index: function(){
    // Build the form view and insert it into the DOM
    var bookForm = new views.BookFormView({collection: this.collection});
    $('.app').html(bookForm.render().el);

    // Build the list view and insert it into the DOM
    var bookListing = new views.BookListView({collection: this.collection});
    $('.app').html(bookListing.render().el);

    // Now that the view is inserted, update the collection with some data
    //this.collection.fetch();
    this.collection.add([{
      'id': 1,
      'name': 'JavaScript The Good Parts',
      'imageUrl': 'http://akamaicovers.oreilly.com/images/9780596517748/cat.gif'
    }]);
  },
  detail: function(bookId){
    console.log(this.collection);
    var book = this.collection.get(bookId);
    var bookDetail = new views.BookDetailView({model: book});
    $('.app').html(bookDetail.render().el);
  }
});

var router = new Router();


module.exports = router;
