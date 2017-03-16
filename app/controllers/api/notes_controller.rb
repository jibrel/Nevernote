class Api::NotesController < ApplicationController
  before_action :require_author, only: [:show, :update, :destroy]

  def create
    @note = Note.new(note_params)
    if @note.save
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def index
    @notes = Note.where(author_id: current_user.id)
    render :index
  end

  def show
    @note = Note.find(params[:id])
    if @note
      render :show
    else
      render json: ["This note doesn't exist."], status: 404
    end
  end

  def update
    @note = Note.find(params[:id])
    if @note.update_attributes(note_params)
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def destroy
    @note = Note.find(params[:id])
    if @note
      @note.destroy
      render json: {}
    else
      render json: ["Could not delete note."], status: 404
    end
  end

  private
  def note_params
    params.require(:note).permit(:id, :title, :body, :author_id, :notebook_id)
  end

  def require_author
    unless note_params[:author_id] == current_user.id
      render json: ["Action not allowed."], status: 422
    end
  end
end
