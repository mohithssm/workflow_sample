function is_perfect(number)
{
var temp = 0;
   for(var i=1;i<=number/2;i++)
    {
        if(number%i === 0)
        {
            temp += i;
        }
    }
    if(temp === number && temp !== 0)
    {
        return true;
    }
    else
    {
        return false;
    }  
} 
var assert=require('assert')
assert(is_perfect(28),"Testcase 1 passed");
assert(is_perfect(5)===false,"Testcase 2 passed");
console.log("All testcases passed");