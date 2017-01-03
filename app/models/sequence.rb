class Sequence < ApplicationRecord
  belongs_to :user
  has_many :pictures, dependent: :destroy
  default_scope -> { order(created_at: :desc) }
  validates :user_id, presence: true

  def self.feed_for(user)
    take(5)
  end

  def picture_urls
    self.pictures.map{|picture| picture.image_url(:thumb)}
  end

  def picture_created_at_times
    # returned as milliseconds since epoch for javascript
    self.pictures.map{|picture| picture.created_at.to_time.to_i * 1000}
  end

end
