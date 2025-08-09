/**
 * inch to meter
 * miles to kilometer
 */

// 12 inch equal 1 feet
function inchToMeter(inch){
    const feet = inch/12;
    return feet;
}

const razibHeight = inchToMeter(75);
console.log(razibHeight);

// another solution
function inchToMeter2(inch){
    const feetFraction = inch/12;
    const feet = parseInt(feetFraction);
    const feetRemaining = inch%12;
    const result = feet + ' ft '+feetRemaining+' inch';
    return result;
}

const razibHeight2 = inchToMeter2(75);
// string print korbe
console.log(razibHeight2);

// miles to kilometer

function mileToKilometer(mile){
    const kilo = mile * 1.60934;
    return kilo;
}

console.log(mileToKilometer(4),'Kilometer');

// kilometer to mile
function kilometerToMile(kilo){
    const mile = kilo * 0.621371;
    return mile;
}
console.log(kilometerToMile(5),'Miles');