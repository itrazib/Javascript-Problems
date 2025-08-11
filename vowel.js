/**
 * Write a function to count the number of vowels in a string.
 */

function countVowel(str){
    const string = str.toLowerCase();
    let count = 0;
     for(const s of string){
        if(s=='a' || s==='e' || s === 'i' || s === 'o' || s === 'u'){
            count++;
        }
     }
     return count;
}
const str = 'I love you';
const result = countVowel(str);
console.log(result);