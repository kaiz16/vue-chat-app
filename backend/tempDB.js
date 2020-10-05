class SCHEMA {
    constructor() {
        this.users = [],
            this.messages = []
    }
    singUp(username) {
        if (this.users.includes(this.username)) {
            throw new Error('User already signed up')
        }
        this.users.push(username)
    }
    sendMessage(msg) {
        this.messages.push({
            user: this.me,
            msg,
        })
    }
}
const Schema = new SCHEMA

module.exports = {
    Schema
}