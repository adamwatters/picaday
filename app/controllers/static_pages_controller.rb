class StaticPagesController < ApplicationController
  def home
    if logged_in?
      @user = current_user
    else
      @user = User.new
    end
    @feed = Sequence.feed_for(@user)
    render 'home'
  end
end
