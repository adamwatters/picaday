class Sequence < ApplicationRecord
  belongs_to :user
  has_many :pictures
  default_scope -> { order(created_at: :desc) }
  validates :user_id, presence: true
  validates :description, presence: true, length: { maximum: 140 }
end
