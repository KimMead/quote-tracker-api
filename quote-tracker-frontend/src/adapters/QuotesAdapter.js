class QuotesAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/quotes'
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
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ quote }),
        }).then(res => res.json())
    }
}

