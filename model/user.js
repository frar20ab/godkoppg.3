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
    constructor(user, credidCardInfo){
        super(user)
        this.credidCardInfo = credidCardInfo 
    }
}

class creditCard extends paymentUser {
    constructor(paymentUser, cardName, cardnumber, cardDate, cvc) {
        super(paymentUser)
        this.paymentUser = paymentUser
        this.cardName =cardName
        this.cardnumber = cardnumber
        this.cardDate = cardDate
        this.cvc = cvc
    }
}


class freeUser extends user {
    constructor(user, trialperiod){
        super(user)
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


class image {
    constructor(imgaeType, imageSize, imagePath){
        this.imgaeType = imgaeType
        this.imageSize = imageSize
        this.imagePath = imagePath
    }

}

var imageX = //find billede og set path ind
var imageY = //find billede og set path ind


var userY = new user ("Sandra", "Nielsen", 19, "sn@gmail.com", "12345678",)


var userX = new user ("Peter", "jacobsen", 22, "pj@gmail.com", "12345678")





module.exports = user;

