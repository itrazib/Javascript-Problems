/**
 * Remove duplicate element in an array
 */

function noDuplicate(array){
    let arr = [];
    for(const a of array){
        if(arr.includes(a) === false)
            arr.push(a);
    }
    return arr;
    
}
const numbers = [1,2,3,4,2,1,3,5,6];
const removeDuplicate =  noDuplicate(numbers);
console.log(removeDuplicate);