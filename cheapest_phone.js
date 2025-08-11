const phones = [
    { name: 'xiomi', price: 20000, camera: '12mp', color: 'blak'},
    { name: 'samsung', price: 25000, camera: '12mp', color: 'blak'},
    { name: 'Iphone', price: 200000, camera: '12mp', color: 'blak'},
    { name: 'walton', price: 18000, camera: '12mp', color: 'blak'}
]

function getCheapestPhone(phones){
    let min = phones[0];
    for(const phone of phones){
        if(phone.price < min.price)
            min = phone;
    }
    return min;
}
const cheap = getCheapestPhone(phones);
console.log(cheap);