/**
 * Array -> add Even or odd number
 */
function addEven(numbers){
    const adds = [];
    for(const number of numbers){
        if(number % 2 === 0)
        {
            adds.push(number);
        }
    }
    console.log(adds);
    const len = adds.length;
    let sum = 0;
    for(const num of adds){
        sum += num;
    }
    const avg = sum/len;
    return avg;
}
const numbers = [1,2,3,4,5,6];
const average = addEven(numbers);
console.log('IN array all Even number avg : ', average);