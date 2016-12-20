class SequencesController < ApplicationController
  before_action :logged_in_user, only: [:create, :destroy]
  before_action :correct_user,   only: [:destroy]

  def new
    @sequence = current_user.sequences.build
    if @sequence.save
      @picture  = @sequence.pictures.build
      @pictures = @sequence.pictures
      render :show
    else
      redirect_to root_url
    end
  end

  def create
    @sequence = current_user.sequences.build(sequence_params)
    if @sequence.save
      flash[:success] = "Sequence created!"
      redirect_to @sequence
    else
      @feed_items = []
      render 'static_pages/home'
    end
  end

  def show
    @sequence = Sequence.find(params[:id])
    @pictures = @sequence.pictures
    @picture  = @sequence.pictures.build
  end

  def destroy
    @sequence.destroy
    flash[:success] = "Sequence deleted"
    redirect_to request.referrer || root_url
  end

  private

  def sequence_params
    params.require(:sequence).permit(:description)
  end

  def correct_user
    @sequence = current_user.sequences.find_by(id: params[:id])
    redirect_to root_url if @sequence.nil?
  end
end
