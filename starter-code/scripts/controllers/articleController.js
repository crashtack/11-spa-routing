(function(module) {
  var articleController = {};

  articleController.index = function() {
    Article.fetchAll(articleView.renderIndexPage);
    /* TODO: Reveal only the articles section! */
    $('.tab-content').hide();
    $('#articles').fadeIn();
  };

  module.articleController = articleController;
})(window);
