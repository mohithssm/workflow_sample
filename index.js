
function leapyear(year)
{
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

var assert=require('assert') 
assert(leapyear(2016),"Testcase1 passed");
assert(leapyear(1700)===false,"Testcase2 passed");
assert(leapyear(100)===false,"Testcase3 passed");
assert(leapyear(1800)===false,"Testcase4 passed");
console.log("All testcases passed");
