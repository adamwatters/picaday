class PicturesController < ApplicationController
  before_action :logged_in_user, only: [:create, :destroy]
  before_action :correct_user,   only: :destroy

  def create
    @sequence = Sequence.find(params[:sequence_id])
    @picture = @sequence.pictures.build(picture_params)
    if @picture.save
      flash[:success] = "Picture uploaded!"
      redirect_to @sequence
    else
      @feed_items = []
      render 'static_pages/home'
    end
  end

  def show
    @sequence = Sequence.find(params[:id])
    @pictures = @sequence.pictures
    @picture  = @sequences.pictures.build
  end

  def destroy
    @picture.destroy
    flash[:success] = "Picture deleted"
    redirect_to request.referrer || root_url
  end

  private

  def picture_params
    params.require(:picture).permit(:image)
  end

  def correct_user
    @picture = current_user.pictures.find_by(id: params[:id])
    redirect_to root_url if @picture.nil?
  end
end
