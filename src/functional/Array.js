const originalArray = [1, 2, 3];

// You want to add a new number in the place of 2;
const index = originalArray.indexOf(2);

const modifiedArray = [
    ...originalArray.slice(0, index),
    4,
    ...originalArray.slice(index) 
];

console.log(originalArray);
console.log(modifiedArray);