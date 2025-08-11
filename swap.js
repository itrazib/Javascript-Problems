/**
 *     Swap the number or string with temp use
 */

function swap(a,b){
    let temp;
    temp = a;
    a = b;
    b = temp;
    const result = a + " "+ b;
    return result;
}

let a = 5;
let b = 7;
// before swapping 
console.log("Before Swapping",a,b);
const swapTwo = swap(a,b);
// After swapping
console.log("After Swapping",swapTwo);

/**
 * Swap two number using destructing
 */

let x = 9;
let y = 12;

console.log("before swap",x,y);
// using destructing
[x,y] = [y, x];
console.log("After swapping",x,y);
