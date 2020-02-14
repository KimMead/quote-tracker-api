class Quotes {
    constructor() {
        this.quotes = []
        this.adapter = new QuotesAdapter()
        this.bindEventListeners()
        this.fetchAndLoadQuotes()
    }

    initBindingsAndEventListeners() {
        this.quotesContainer = document.getElementById('quotes-container')
        this.newQuoteBody = document.getElementById('new-quote-body')
        this.quoteForm = document.getElementById('new-quote-form')
        this.quoteForm.addEventListener('submit', this.createQuote.bind(this))
    }

    createQuote(e) {
        e.preventDefault()
        const value = this.newQuoteBody.value
        
        this.adapter.createQuote(value).then(note => {
            this.quotes.push(new Quote(quote))
            this.newQuoteBody.value = ''
            this.render()
        })
    }