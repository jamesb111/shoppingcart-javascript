"use strict";

let shoppingCart = [];

let itemList = [
    {name: "socks", price: 300},
    {name: "tshirt", price: 30},
    {name: "coat", price: 3000},
    {name: "hat", price: 250},
    {name: "pants", price: 4},
];

function addItem(itemName, itemPrice) {
    shoppingCart = [ ...shoppingCart,{name: itemName, price: itemPrice}];
};

function removeItem(itemName) {
    let index = shoppingCart.findIndex(element => element.name === itemName);
    shoppingCart = [...shoppingCart.slice(0, index), ...slice.shoppingCart.slice(index + 1)];
}

function editItem(itemName, newName, newPrice) {
    let index = shoppingCart.findIndex(element => element.name === itemName);
    shoppingCart = [...shoppingCart.slice(0, index), {itemName: newName, price: newPrice}];
};

function printTotal() {
    let total = 0;
    for ( let {price} of shoppingCart) {
    total += (price * 1.06);
    }
    console.log(total);
};






addItem("shoes", 289);
console.log(shoppingCart);

addItem("hoodie", 3500);
console.log(shoppingCart);

editItem("hoodie", "windbreaker", 4200);
console.log(shoppingCart);

printTotal();

