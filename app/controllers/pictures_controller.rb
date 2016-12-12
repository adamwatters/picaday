class PicturesController < ApplicationController
  before_action :logged_in_user, only: [:create, :destroy]
  before_action :correct_user,   only: :destroy

  def create
    @sequence = Sequence.find(params[:sequence_id])
    @picture = @sequence.pictures.build(picture_params)
    if @picture.save
      redirect_to edit_picture_path(@picture)
    else
      redirect_to @sequence
    end
  end

  def edit
    @picture = Picture.find(params[:id])
  end

  def update
    @picture = Picture.find(params[:id])
    if @picture.update(crop_params)
      flash[:success] = "picture successful updated"
      redirect_to @picture.sequence
    else
      flash[:warning] = "picture not update updated"
      @picture = Picture.find(params[:id])
      redirect_to @sequence
    end
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

  def crop_params
    params.require(:picture).permit(:crop_x, :crop_y, :crop_w, :crop_h)
  end

  def correct_user
    @picture = current_user.pictures.find_by(id: params[:id])
    redirect_to root_url if @picture.nil?
  end
end
