(function () {

  window.CommentView = Backbone.View.extend({
    className: 'row comment',
    template: _.getTemplate('comment'),

    events: {
    	'click .delete': 'deleteComment'
    },

    render: function () {
      var newCommentHtml = this.template( this.model.toJSON() );
      $(this.el).html(newCommentHtml);
    },

    deleteComment: function(e) {
    	e.preventDefault();
    	// this.remove();
    	this.model.destroy();
    }

  });

})();
