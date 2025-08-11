/**
 * Chair --> 3 cft
 * table --> 10 cft
 * Bed --> 50 cft
 */

function woodQuantity(chairQuantity, tableQuantity, bedQuantity){
    const perchairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairTotalWood = chairQuantity * perchairWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const bedTotalWood = bedQuantity * perBedWood;

    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;

    return totalWood;
}

const quantity = woodQuantity(5, 5, 3);
console.log(quantity,"cft");