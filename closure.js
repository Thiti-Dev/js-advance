function statCount(){
    let level = 0
    return (increment) => {
        return level = level + increment
    }
}

var addLevel = statCount()

console.log(addLevel(2)) //2

console.log(addLevel(2)) //4

console.log(addLevel(-2)) //2