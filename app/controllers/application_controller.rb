class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :set_posts
  before_action :set_post

  def set_posts
    @posts = Post.all
  end

  def set_post
    @post = Post.new()
  end
end