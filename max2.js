//  Max two number 

let a = 5;
let b = 7;

if(a > b){
    console.log("Maximum number a");
}
else{
    console.log("Maximum number b");
}
// using function
function getmax(num1, num2){
    if(num1 > num2)
        return num1;
    else return num2;
}

const max1 = getmax(10, 85);
const max2 = getmax(100, 40);
const ultimateMax = getmax(max1, max2);
console.log("Max two is a", ultimateMax);