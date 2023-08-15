module Authentication
  module JsonWebToken
    ACCESS_TOKEN_EXPIRATION = ENV['ACCESS_TOKEN_EXPIRATION']
    ACCESS_JWT_HMAC_SECRET = ENV['ACCESS_JWT_HMAC_SECRET']
    ACCESS_JWT_ALGORITHM = ENV['ACCESS_JWT_ALGORITHM']
    ACCESS_TOKEN_EXPIRATION = ENV['ACCESS_TOKEN_EXPIRATION']
    ACCESS_JWT_HMAC_SECRET = ENV['ACCESS_JWT_HMAC_SECRET']
    REFRESH_JWT_ALGORITHM = ENV['REFRESH_JWT_ALGORITHM']


    def self.access_token

    end

    def refresh_token
    end

    private
    def self.encode(user:)
      payload = {
        id: user.id,
        email: user.email,
        exp: EXP.to_i.minutes.from_now.to_i
      }
      JWT.encode(payload, hmac_secret, algorithm)
    end
  
    def self.decode(token:)
      JWT.decode(token, SECRET, true, { algorithm: 'HS256' })
    end

  end
end