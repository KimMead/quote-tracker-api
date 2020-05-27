class User < ApplicationRecord
    has_many :quotes 
    validates :email, uniqueness: true

end
