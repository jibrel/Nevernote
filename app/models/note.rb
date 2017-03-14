# == Schema Information
#
# Table name: notes
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  body        :text
#  author_id   :integer          not null
#  notebook_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Note < ApplicationRecord
  validates :title, presence: true
  validates :body
  validates :author, presence: true
  validates :notebook

  belongs_to :notebook

  belongs_to :author,
    foreign_key: :author_id,
    class_name: User

  has_many :taggings

  has_many :tags,
    through: :taggings,
    source: :tag
end
