const collect = require('collect.js');

let arr = [1, 2, 3]

// Convert array into collection
const collection = collect(arr);

// Returning the array
let newObject = collection.all();

console.log("Result : ", newObject);