class user {
    constructor(firstname, lastname, age, email, password){
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
        this.email = email
        this.password = password
    }
}

class paymentUser extends user{
    constructor(user){
        super(user.firstname, user.age)
    }
}

class creditCard extends paymentUser {
    constructor(user, cardnumber, cvc) {
        super(user.firstname, user.age)
        this.cardnumber = cardnumber
        this.cvc = cvc
    }
}


class freeUser extends user {
    constructor(user, trialperiod){
        super(user.firstname, user.age)
        this.trialperiod = trialperiod
    }
} 

class interest extends user {
    constructor(user, interest){
        super(user.firstname, user.age)
        this.interest = interest
    }
}

class match extends user {
    constructor(user, matchId) {
        super(user.firstname, user.age)
        this.match = matchId
    }
}


class image extends user {
    constructor()
}

module.exports = User;

