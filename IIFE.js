//var customPrefix = 'x346523' // belongs to global namespace => window


// Immediately invoke after js initiated
(function() {
    //Only in this scope
    var customPrefix = 'x64'
    console.log(customPrefix)
})();