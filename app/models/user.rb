class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :omniauthable, :omniauth_providers => [:facebook]
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable


  def self.new_with_session(params, session)
    super.tap do |user|
      if data = session["devise.facebook_data"] && session["devise.facebook_data"]["extra"]["raw_info"]
        user.email = data["email"] if user.email.blank?
      end
    end
  end

  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.email = auth.info.email
      user.password = Devise.friendly_token[0,20]
      user.name = auth.info.name   # assuming the user model has a name
      user.image = auth.info.image # assuming the user model has an image
    end
  end

  def profile_thumbnail
    image
  end

  def large_profile_image
    "https://graph.facebook.com/#{uid}/picture?height=1080&width=1080"
  end

  def profile_image_is_size(width = 400, height = 400)
    "https://graph.facebook.com/#{uid}/picture?height=#{height}&width=#{width}"
  end

  def first_name
    name.split(" ").first
  end

  def last_name
    name.split(" ").last
  end
  
  
end
