//  celcius to fahrenheit temperature
function fahrenheit(celcius){
    const fahrenheit = (celcius * 9)/5 + 32;
    return fahrenheit;
}
const celcius = fahrenheit(30);
// console.log(celcius);

// fahrenheit to celcius temperature
function cel(fahren){
    const cel = (fahren - 32)*5/9;
    return cel;
}
const fahren = cel(86);
console.log(fahren);