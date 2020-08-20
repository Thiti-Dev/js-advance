var someObjFromNowhere = {
    num1: 2,
    num2: 5
} // will be attached in some func

function addFunc(){
    return this.num1 + this.num2
}

var added = addFunc.bind(someObjFromNowhere)

console.log(added())