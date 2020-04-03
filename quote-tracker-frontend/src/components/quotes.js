console.log("I'm here")
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
            debugger
            this.createQuote
        })

        this.notesContainer.addEventListener('dblclick', function() {
            console.log('double clicked')
        })
    }

    createQuote(e) {
        e.preventDefault()
        debugger
        const value = this.newQuoteBody.value
        
        this.adapter.createQuote(value).then(quote => {
            
            this.quotes.push(new Quote(quote))
            this.newQuoteBody.value = ''
            this.render()
        })
    }

    fetchAndLoadQuotes() {
        this.adapter
        .getQuotes()
        .then(quotes => {
            notes.forEach(quote => this.quotes.push(new Quote(quote)))
        })
        .then(() => {
            this.render()
        })
    }

    render() {
        this.quotesContainer.innerHTML = this.quotes.map(quote => quote.renderLi()).join('')
    }
}