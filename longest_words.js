/**
 * Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming
 */
const str = 'I am learning Programming to become a programmer';

function longestWord(str){
    const words = str.split(" ");
    console.log(words);
    let string = "";
    for( const s of words){
        if(s.length > string.length){
            string = s;
        }
    }
    return string;
}
console.log(longestWord(str));