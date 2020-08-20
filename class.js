class Human{
    constructor(){
        this.isAlive = true // default
    }
    checkIsAlive(){
        console.log('Isalive === ' + this.isAlive)
    }
}

class Person extends Human{ 
    constructor(name,age){
        super()
        this.name=name
        this.age=age
    }
    greeting(){
        console.log('My name is ' + this.name)
    }
    isAlives(){
        this.checkIsAlive()
    }
}

var thiti = new Person('thiti',5)
thiti.greeting()
thiti.isAlives()
console.log(thiti.isAlive) // true