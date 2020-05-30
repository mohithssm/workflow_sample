function isPalindrome(input){
    if(typeof input === 'string'){
        var input = input.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
    }
    var c = 0;
    if(input==="") {
        return false;
    }
    if((input.length) % 2 === 0) {
        c = (input.length) / 2;
    } 
    else {
        if (input.length === 1) {
            return true;
        } 
        else {
            c = (input.length - 1) / 2;
        }
    }
    for (var x = 0; x < c; x++) {
        if (input[x] != input.slice(-1-x)[0]) {
            return false;
        }
    }
    return true;
}

var assert = require("assert");
assert(isPalindrome(101) == true);
assert(isPalindrome(10101010101) == true);
assert(isPalindrome("Madam") == true);
assert(isPalindrome("Hai") == false);
assert(isPalindrome("Hello") == false);
console.log("All test cases passed");
