const dummyData = {
    dog: [
        {name:'x1',age:99},
        {name:'x2',age:10}
    ]
}

console.log(dummyData.dog.length) // 2

const rendered_html = dummyData.dog.map((element,index) => {
    return `
        <h1>Hello</h1>
        <p>This dog name ${element.name}</p>
    `
})
console.log(rendered_html)


// Filter only the dog that age <= 10
const young_dogs = dummyData.dog.filter(data => data.age <= 10)
console.table(young_dogs)