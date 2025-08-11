// Max number in an array

function getMax(numbers){
      let max = numbers[0];
      for(const num of numbers){
          if(num > max)
            max = num;
      }
      return max;
}
const numbers = [2,3,4,5,6,2,1];
const max = getMax(numbers);
console.log("Maximum number in an array", max);