var myobj = {
    name: 'aaw0kenn'
}

var sayHello = function(){
    return 'Hello ' + this.name
}

console.log(sayHello()) // returns undefine

// This is where call comes in , for attaching the variable from object(myobj) to sayHello function
console.log(sayHello.call(myobj)) // returns aaw0kenn


//
// ─── ANOTHER PRACTICAL ──────────────────────────────────────────────────────────
//

var num_dict = {
    num: 2
}

var myfunc = function(added_number){
    return this.num + added_number
}

myfunc(2) //NaN
var result = myfunc.call(num_dict, 5) // Return 7 // the first one is the thing that we want to attach to myfunc => the second one is just a number that gonna be passed in the function
console.log(result)

// If you want to pass the array use apply instead