class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}shivish`
    }

    set password(value){
        this._password = value
    }
}

const shivish = new User("s@shivam.ai", "abc")
console.log(shivish.email);