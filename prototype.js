var person = function(){} //empty
person.prototype.name = 'n/a'
person.prototype.age = 0

var thiti = new person()
console.log(thiti.name) // return default embeded prop => n/a


// Adding function to the prototype
person.prototype.greeting = function(){
    console.log(`Hello this is ${this.name}`)
}

thiti.greeting() // shows line11 and the value from line2