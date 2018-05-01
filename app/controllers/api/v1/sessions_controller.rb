class Api::V1::SessionsController < ApplicationController

    def create
        user = User.where(id: params[:id]).first
        if user && user.valid_password?(params[:password])
            render json: user.as_json(only:[:id, :name, :email, :image ]), status: :created
        else
            head(:unauthorized)
        end
    end

    def destroy

    end
end