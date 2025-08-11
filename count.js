/**
 * You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2
 */
const numbers = [5,6,11,12,98,5];
const find = 25;

function count(numbers, find){
      let c = 0;
      for(const number of numbers){
        if(number === find){
            c++;
        }
      }
      return c;
}
console.log(count(numbers, find));