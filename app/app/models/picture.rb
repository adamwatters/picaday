class Picture < ApplicationRecord
  validates :sequence_id, presence: true
  validates :image, presence: true
  validate  :image_size
  mount_uploader :image, ::PictureUploader
  default_scope -> { order(created_at: :asc) }
  belongs_to :sequence

  private

  # Validates the size of an uploaded picture.
  def image_size
    if image.size > 5.megabytes
      errors.add(:image, "should be less than 5MB")
    end
  end
end
