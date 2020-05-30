function smallestNumber(array) {
    var lenArray = array.length
    var smallest = array[0];
    for(let loop = 1; loop < lenArray; loop++) {
        if( smallest > array[loop] ) 
        smallest = array[loop];
    }
    return smallest;
}
var assert = require("assert")
assert(smallestNumber([5,12,3,56,23]))
assert(smallestNumber([5,12,45,76,23]))
assert(smallestNumber([51,12,32,65,23]))
console.log("all test cases passed")


