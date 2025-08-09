/**
 * Cheack while a year is a leap year or not leap year
 */
function isleap(year){
    if(year % 100 !==0 && year % 4 === 0)
        return true;
    else if(year % 400 == 0)
        return true;
    else return false;
}

const leapCheck = isleap(2022);
console.log(leapCheck);
