const User = {
    _email: 's@ski.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const code = Object.create(User)
console.log(code.email);