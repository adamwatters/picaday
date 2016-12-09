class PicturesController < ApplicationController
  before_action :logged_in_user, only: [:create, :destroy]
  before_action :correct_user,   only: :destroy

  def create
    @sequence = Sequence.find(params[:sequence_id])
    @picture = @sequence.pictures.build(picture_params)
    if @picture.save
      redirect_to crop_picture_path(@picture)
      # flash[:success] = "Picture uploaded!"
      # redirect_to @sequence
    else
      @feed_items = []
      render 'static_pages/home'
    end
  end

  def update
    @picture = Picture.find(params[:id])
    @sequence = @picture.sequence
    @feed_items = []
    render @picture
  end

  def crop
    @picture = Picture.find(params[:id])
    render 'crop'
  end

  def show
    @picture = Picture.find(params[:id])
  end

  def destroy
    @picture.destroy
    flash[:success] = "Picture deleted"
    redirect_to request.referrer || root_url
  end

  private

  def picture_params
    params.require(:picture).permit(:image, :crop_x, :crop_y, :crop_w, :crop_h)
  end

  def correct_user
    @picture = current_user.pictures.find_by(id: params[:id])
    redirect_to root_url if @picture.nil?
  end
end
