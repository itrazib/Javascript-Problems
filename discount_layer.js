/**
 * first 100 --> 100 tk
 * second 100 --> 90 tk
 * above 200 --> 70 tk
 */

function discountLayerd(quantity){
    const first100Price = 100;
    const second100Price = 90;
    const remainingPrice = 70;

    if(quantity<=100){
        const total = quantity * 100;
        return total;
    }
    else if(quantity<=200){
        const first100Total = 100 * first100Price;
        const remaining = quantity - 100;
        const remainingTotal = remaining * second100Price;
        const total = first100Total + remainingTotal;
        return total;
    }
    else{
        const first100Total = 100 * first100Price;
        const second100Total = 100 * second100Price;
        const remaining = quantity - 200;
        const remainingTotal = remaining * remainingPrice;
        const total = first100Total + second100Total + remainingTotal;
        return total;
    }
}
const total = discountLayerd(102);
console.log(total);