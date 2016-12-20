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
end
