class List < ApplicationRecord

  validates :list_title, presence: true

  has_many :tasks,
    class_name: 'Task',
    foreign_key: :list_id,
    primary_key: :id

  belongs_to :user,
    class_name: 'User',
    foreign_key: :user_id,
    primary_key: :id

end
