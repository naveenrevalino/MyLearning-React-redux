numbers = [1, 2, 3, 4];

const alteredArray = numbers.map(( number) => {
    return number *11;
}) 


// Check if all numbers in the array are greater than 10, using every method
// console.log( alteredArray );

// Check function that returns a boolean

console.log( alteredArray.every( checkIfGreater ) );

function checkIfGreater ( alteredArray ) {

    if ( alteredArray > 10) {
        return true
    }

    return false
}