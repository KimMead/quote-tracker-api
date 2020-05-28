class Quotes {
    constructor() {
        this.quotes = []
        this.adapter = new QuotesAdapter()
        this.initBindingsAndEventListeners()
        this.bindEventListeners()
        this.fetchAndLoadQuotes()
    }
    
    initBindingsAndEventListeners() {
        this.quotesContainer = document.getElementById('quotes-container')
        this.newQuoteBody = document.getElementById('new-quote-body')
        this.quoteForm = document.getElementById('new-quote-form')
        console.log(this.quoteForm)
        this.quoteForm.addEventListener('submit', (e) => { 
            
            this.createQuote
        })

        this.notesContainer.addEventListener('dblclick', function() {
            console.log('double clicked')
        })
    }