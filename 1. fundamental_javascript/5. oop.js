class Mail {
    constructor() {
        this._contacts = [];
        this.from = 'dicoding@gmail.com';
    }

    sendMessage = function(msg, to) {
        console.log('you send :', msg, 'to', to, 'from', this.from);
        this._contacts.push(to)
    }

    showAllContacts() {
        return this._contacts;
    }
}

class Whatsapp extends Mail {

    constructor(author) {
        super(author);
        this.username = 'dicoding'
        this.isBussinessAccount = true
    }

    myProfile() {
        return `my name ${this.username} is ${this.isBussinessAccount ? 'Bussiness':'Personal'}`
    }
}


const wa1 = new Whatsapp('081381377234')
console.log(wa1.myProfile())
console.log(wa1.username)