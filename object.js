//
// ─── OLD SCHOOL ─────────────────────────────────────────────────────────────────
//

// If want to add default class var => goto prototype
var person = function(name,age){
    //init class vars
    this.name = name;
    this.age = age;
    this.introduce = function(){
        console.log(`My name is ${name} and I am ${age} years old`)
    }
    
}

var thiti = new person('thiti',15)
thiti.introduce()