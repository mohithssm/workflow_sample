function isEven(no) {
    if (no % 2 === 0) {
        return true;
    }
    return false;
}

var assert = require('assert');

assert(isEven(2), 'test case 1 passed');
assert(isEven(3) === false, 'test case 2 passed');
assert(isEven(4), 'test case 3 passed');
assert(isEven(5) === false, 'test case 4 passed');

console.log("all test cases passed")