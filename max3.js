// Max number with three values

let a = 5;
let b = 7;
let c = 9;

if(a>b && a>c)
    console.log("A is the largest number");
else if(b>a && b>c)
    console.log("B is the largest number");
else console.log("C is the largest number");

// using function
function getmax(num1, num2, num3){
    let max = num1;
    if(max<num2)
        max = num2;
    if(max<num3)
        max = num3;

    return max;
}

const max = getmax(12,13,10);
console.log(max);

// using Math.max
const m = Math.max(1,3,0,56,7,8)
console.log("Maximum number using Math.max", m);