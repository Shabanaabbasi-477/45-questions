"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//                             QUESTION : 18
//  Seeing the World: Think of at least five places in the world you’d like to visit.
// Store the locations in a array. Make sure the array is not in alphabetical order.
// Print your array in its original order.
// Print your array in alphabetical order without modifying the actual list.
// Show that your array is still in its original order by printing it.
// Print your array in reverse alphabetical order without changing the order of the original list.
// Show that your array is still in its original order by printing it again.
// Reverse the order of your list. Print the array to show that its order has changed.
// Reverse the order of your list again. Print the list to show it’s back to its original order.
// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// Store your five favorite locations in an array.Make sure that array is not in an alpabetical order.
let places = ["Japan", "Turkey", "Paris", "Kashmir", "China"];
// Print your array in its original order.
console.log("\n orignal order : " + places);
//Print your array in alphabetical order without modifing the actual list.
console.log("\n alphabetical order : " + [...places].sort());
// show that your array is still in its original order by printing it.
console.log("\n orignal order : " + places);
// Print your array in reverse alphabetical order without changing the order of the original list.
console.log(" \n reverse alphabetical order :" + [...places].sort().reverse());
// Show that your array is still in its original by printing it again.
console.log("\n orignal order : " + places);
// Reverse the order of your list.Print the array to show that its order has changed.
console.log(" \n reverse order :" + places.reverse());
// Reverse the order of your list again.Print the list to show its back to its original order.
console.log("\n orignal order : " + places.reverse());
// Sort your array so it is stored in alphabetical order.Print the array to show that its  order has been changed.
console.log("\n orignal alphabetical order : " + places.sort());
// Sort to change your array so it is stored in reverse alphabetical order.Print the list to show thatits order has changed. 
console.log("\n reverse alphabetical : " + places.sort().reverse());