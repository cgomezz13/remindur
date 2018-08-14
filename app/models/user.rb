class User < ApplicationRecord
  validates :first_name, :last_name, :username, :email, presence: true #add image_url ?
  validates :username, :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  has_many :tasks,
    class_name: 'Task',
    foreign_key: :user_id,
    primary_key: :id

  has_many :lists,
    class_name: 'List',
    foreign_key: :user_id,
    primary_key: :id

  has_one_attached :photo

  attr_reader :password
  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    if (user!=nil) && user.is_password?(password)
      return user
    else
      return nil
    end
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def reset_session_token
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

end
