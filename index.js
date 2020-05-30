
function checkfibonacci(n)
        {
            let a = 0;
            let b = 1;
            if (n==a || n==b) return true;
            let c = a+b;
            while(c<=n)
            {
                if(c == n) return true;
                a = b;
                b = c;
                c = a + b;
            }
            return false;
        }

var assert = require('assert');
assert(checkfibonacci(1),"Test case 1 failed ");
assert(checkfibonacci(0),"Test case 2 failed ");
assert(checkfibonacci(8),"Test case 3 failed ");
assert(checkfibonacci(55),"Test case 4 failed ");
assert(checkfibonacci(14)==false,"Test case 5 failed ");
assert(checkfibonacci(22)==false,"Test case 6 failed ");

console.log("All Test Cases Passed !!")
