class Micropost < ApplicationRecord
  validates :user_id, presence: true
  validates :content, presence: true, length: { maximum: 140 }
  default_scope -> { order(created_at: :desc) }
  belongs_to :user
end
