class SessionsController < ApplicationController
  # skip_before_action :authenticate_user!, only: [:signin, :create, :signup, :omniauth]

  def signin
  end

  def signup
  end

  def create
    @user = User.find_by(email: params[:email])
    if @user && @user.authenticate(params[:password])
      access_token = JsonWebToken.encode(user: user)
      session[:access_token] = access_token
      flash[:notice] = 'Signin OK!'
      redirect_to user_path
    else
      redirect_to signin_path
    end
  end

  def destroy
    session[:token] = nil
    flash[:notice] = "Sign Out!!!"
    redirect_to signin_path
  end

  def omniauth
    @user = User.find_or_create_by(email: auth[:info][:email]) do |user|
      user.provider = auth[:provider]
      user.uid = auth[:uid]
      user.email = auth[:info][:email]
      user.password = 'password'
      user.password_confirmation = user.password
    end
    if @user.valid?
      session[:token] = JsonWebToken.encode(@user)
      flash[:notice] = "Đăng nhập thành công!!!"
      redirect_to request.referer
    else
      flash[:notice] = 'Credential error'
      redirect_to signin_path
    end
  end

end
