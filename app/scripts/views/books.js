var $ = require('jquery');
var Backbone = require('backbone');
var bookItemTemplate = require('../../templates/booklist.hbs');
var formTemplate = require('../../templates/bookform.hbs');

var BookFormView = Backbone.View.extend({
  tagName: 'form',
  template: formTemplate,
  events: {
    'submit': 'addBook'
  },
  render: function(){
    var renderedHtml = this.template();
    this.$el.html(renderedHtml);
    return this;
  },
  addBook: function(event){
    event.preventDefault();
    this.collection.create({
      name: $('#name').val(),
      url: $('#url').val()
    });

    $('#name').val('');
    $('#url').val('');
  }
});

var BookListView = Backbone.View.extend({
  tagName: 'ul',
  initialize: function(){
    this.listenTo(this.collection, 'add', this.renderItem);
  },
  render: function(){
    return this;
  },
  renderItem: function(book){
    console.log('book', book);
    var bookItem = new BookItemView({model: book});
    this.$el.append(bookItem.render().el);
  }
});

var BookItemView = Backbone.View.extend({
  tagName: 'li',
  template: bookItemTemplate,
  render: function(){
    var context = this.model.toJSON();
    this.$el.html(this.template(context));
    return this;
  }
});

var BookDetailView = Backbone.View.extend({
  render: function(){
    this.$el.html('<img src="' + this.model.get('url') + '"/>');
    return this;
  }
});

module.exports = {
  'BookFormView': BookFormView,
  'BookListView': BookListView,
  'BookItemView': BookItemView,
  'BookDetailView': BookDetailView
}
