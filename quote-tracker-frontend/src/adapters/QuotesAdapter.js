class QuotesAdapter {
    constructor() {
        this.baseUrl =
        'http://localhost:3000/api/quotes'
    }

    getQuotes() {
        return fetch(this.baseUrl).then(res => res.json()
        )
    }

    createQuote(value) {
        const quote = {
            body: value,
        }
        return fetch(this.baseUrl, {
            method: 'POST',
            body: JSON.stringify({ quote }),
        })
    }
}

