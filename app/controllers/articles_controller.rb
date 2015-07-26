class ArticlesController < ApplicationController

  def create
    article = Article.create(article_params)

    render json: article
  end

  def index
    render json: Article.all
  end

  private

  def article_params
    params.require(:article).permit(:title, :link, :language, :published_at, :tags, :description, :author_name)
  end

  # TODO search

end
