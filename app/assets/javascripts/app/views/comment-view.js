(function () {

  window.CommentView = Backbone.View.extend({
    className: 'row comment',
    template: _.getTemplate('comment'),

    events: {
    	'click .delete': 'deleteComment'
    },
    initialize: function(options) {
     this.listenTo(this.model, 'change', this.render);
    },
    render: function () {
      var newCommentHtml = this.template( this.model.toJSON() );
      $(this.el).html(newCommentHtml);
      if (g.user === undefined) {
        $(this.el).find('.delete').remove();
      } else {
        var doesUserOwnComment = g.user.id === this.model.get('user_id');
        console.log(doesUserOwnComment);
        $(this.el).find('.delete').toggle(doesUserOwnComment);
      }
      
    },

    deleteComment: function(e) {
    	e.preventDefault();
    	// this.remove();
    	this.model.destroy();
    }

  });

})();
