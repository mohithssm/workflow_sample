function armstrong(x) {
    var a=x,b,sum=0;
    while(a>0) {
        b=a%10;
        sum+=(b*b*b);
        a=parseInt(a/10);
    }
    if (sum===x) {
        return true;
    } else {
        return false;
    }
}
var assert=require('assert')
assert(armstrong(153),"testcase passed");
assert(armstrong(5)===false,"testcase2 passed");
console.log("all testcases passed");