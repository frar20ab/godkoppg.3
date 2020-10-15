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
    constructor(user,cardName, cardnumber, cardDate, cvc) {
        super(user.firstname, user.age)
        this.cardName =cardName
        this.cardnumber = cardnumber
        this.cardDate = cardDate
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
    constructor(user, basketball, running, cooking){
        super(user.firstname, user.age)
        this.basketball = basketball
        this.running = running
        this.cooking = cooking
    }
}

class match extends user {
    constructor(female, male) {
        this.female = female
        this.male = male
    }
}


//class image extends user {
//     constructor()
// }

module.exports = user;

