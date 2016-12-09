class StaticPagesController < ApplicationController
  def home
    if logged_in?
      @sequence  = current_user.sequences.build
    end
  end
end
