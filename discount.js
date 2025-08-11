/**
 * 100 --> 100
 * 101-200 --> 90
 * more than 200 --> 70
 */

function discount(quantity){
    if(quantity<=100){
        const total = quantity * 100;
        return total;
    }
    else if(quantity<=200){
        const total = quantity * 90;
        return total;
    }
    else {
        const total = quantity * 70;
        return total;
    }
}
const quantity = discount(10);
console.log(quantity);