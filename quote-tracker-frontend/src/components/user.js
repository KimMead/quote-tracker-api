class user {
    constructor(userJSON) {
        this.id = userJSON.id
        this.body = userJSON.body
    }

    renderLi() {
        return '<li>${this.body}</li>'
    }
}