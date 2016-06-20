(function(module) {
  var statsController = {};

  statsController.index = function() {
    /* TODO: Reveal only the about section! */
    $('.tab-content').hide();
    $('#blog-stats').fadeIn();
  };

  module.statsController = statsController;
})(window);
