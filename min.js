// Find the minimum number
function getMin(numbers){
     let min = numbers[0];
     for(const number of numbers){
        if(number < min)
            min = number;
     }
     return min;
}
const numbers = [2,3,4,5,6,1];
const min = getMin(numbers);
console.log(min);