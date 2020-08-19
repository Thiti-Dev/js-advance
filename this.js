console.log(this) // in chrome it should be window //// in node it should be empty {}

var myobj = {
    name: 'aaw0kenn',
    hello: function(){
        return this.name
    }
}

console.log(myobj.hello()) // shows aaw0kenn 