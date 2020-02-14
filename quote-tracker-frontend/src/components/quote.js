class quote {
    constryctor(quoteJSON) {
        this.id = quoteJSON.id
        this.body = quoteJSON.body
    }

    renderLi() {
        return '<li>${this.body}</li>'
    }
}