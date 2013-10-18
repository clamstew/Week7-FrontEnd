(function () {

  window.CommentWallView = Backbone.View.extend({
    initialize: function (options) {
      this.modelViews = {};
      this.listenTo(this.collection, 'add', this.addCommentToWall);
      // TODO: Listen for a remove event
      this.listenTo(this.collection, 'remove', this.removeCommentFromWall);
    },

    addCommentToWall: function (comment) {
      var view = new CommentView({ model: comment });
      view.render();
      $(this.el).append(view.el);
      // Store the view using the comment model's local id
      this.modelViews[comment.cid] = view;
    },

    removeCommentFromWall: function (comment) {
      // this removes the view from the DOM
      this.modelViews[comment.cid].remove();
      // this deletes the view from this.modelViews
      delete this.modelViews[comment.cid];
    }
  });

})();
