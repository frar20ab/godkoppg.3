class user {
    constructor(firstname, lastname, gender, age, location, email, interest){
        this.firstname = firstname
        this.lastname = lastname
        this.gender = gender
        this.age = age
        this.location = location
        this.email = email
        this.interest = []
    }
}

class paymentUser extends user{
    constructor(user, credidCardInfo){
        super(user.firstname, user.lastname, user.gender, user.age, user.location, user.email)
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
        super(user.firstname, user.lastname, user.gender, user.age, user.location, user.email)
        this.trialperiod = trialperiod
    }
} 

class interest extends user {
    constructor(user, interest){
        super(user)
        user.interest = interest
    }
}

class match extends user {
    constructor(match1, match2) {
        this.match1 = match1
        this.match2 = match2
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


var userX = new user ("Sandra", "Nielsen", "Female", 19, "Østerbro", "sn@gmail.com", "12345678", imageX)
var credit = new creditCard ("Sandra", "Nielsen", "1234123412341234", "21/12", 124)
var sandra = new paymentUser (userX, interestSandra, creditCard)
var interestSandra = new Interest (userX, "Running")


var userY = new user ("Peter", "Jacobsen", "Male", 22, "Nørrebro", "pj@gmail.com", "12345678", imageY)

new interest(userX, "Running", "Cooking", "Religion")
new interest(userY, "Basketball", "Running", "Sleep")


var testmatch = new match(userX.firstname, userY.firstname)
var testMatch2 = new match("Sandra", "Peter")


var userArray = []
userArray [userX, userY]

var interestsArray = []
interestsArray = [userX.interest, userY.interest]


var matchArray = []
matchArray = [testMatch1, testMatch2]




module.exports = {userArray, interestsArray, matchArray};

