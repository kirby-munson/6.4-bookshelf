var Backbone = require('backbone');

var Book = Backbone.Model.extend({

});

var BookCollection = Backbone.Collection.extend({
  model: Book
});

module.exports = {
  'Book': Book,
  'BookCollection': BookCollection
}
