class QuotesController < ApplicationController

def index 
    @quotes = Quote.all 
    render json: @quotes 
end 

def show 
    @quote = Quote.find(params[:id])
    render json: @quote 
end 


def create 
    @quote = Quote.create(quote_params)
    render json: @quote 
end 

def update
    @quote = Quote.find(params[:id])
    @quote.update(quote_params)
    render json: @quote 
end 

def destroy
    @quote = Quote.find(params[:id])
    @quote.delete 
    render json: {quoteId: @quote.id}

end 

private 
    def quote_params
        params.require(:quote).permit(:body)
    end 
end 





