function isSevenMultiple(num) {
    if ((num > 0) && (num % 7 == 0)){
        return true;
    }
     return false;
    
}


var assert=require('assert') 
assert(isSevenMultiple(35),"Testcase1 passed");
assert(isSevenMultiple(12)===false,"Testcase2 passed");
assert(isSevenMultiple(40)===false,"Testcase3 passed");
assert(isSevenMultiple(220)=== false,"Testcase4 passed");
console.log("All testcases passed");