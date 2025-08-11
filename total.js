//  shoping total item price

const products = [
    {name: 'shampoo', price: 300, quantity: 2 },
    {name: 'chiruni', price: 100,quantity: 3 },
    {name: 'shirt', price: 700, quantity: 4 }, 
    {name: 'pant', price: 1200, quantity: 2 } 
]
function getShoppingTotal(products){
    let total = 0;
    for(const product of products){
        let thisItemCost = product.price * product.quantity;
         total = total + thisItemCost;
    }
    return total;
}
const total = getShoppingTotal(products);
console.log(total);