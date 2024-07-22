import { compose, pipe } from 'lodash/fp';
import store from './store';
import { bugAdded, bugRemoved, bugResolved } from './actionCreators';


console.log(store);

// Subscribe to store changes
// store.subscribe( ()=> { console.log("Store changed..", store.getState())})

store.dispatch( bugAdded("Bug 1") );
store.dispatch( bugAdded("Bug 2") );

// store.dispatch( bugRemoved(1) );
store.dispatch( bugResolved(2) );

console.log(store.getState());



console.log("Hello World!");

let input = "   JavaScript   ";
// let output = <div> + input.trim() + </div>;

const trim = str => str.trim();
const toLowerCase = str => str.toLowerCase();
const wrapInDiv = str => `<div>${str}</div>`;
const wrapInSpan = str => `<span>${str}</span>`;
const wrap = type => str => `<${type}>${str}</${type}>`;

const result = wrapInDiv( toLowerCase( trim(input) ) );
// The above step can get complicated with more funtions and more brackets, to solve this we can ue lodash.
// npm intsall lodash
// import two important functions of lodash to this class.

const transformedData = compose ( wrapInSpan, toLowerCase, trim ); // this code should be read from right to left
// const transformedData = pipe ( trim, toLowerCase, wrap("span", input) ); // will read the code from left to right, but there is a problem here
// for pipe we need to pass a function, not a string, because : wrapInDiv will rerun a string. Check the currying,js file to see the solution.
console.log( transformedData ( input ) );



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

// if you want to remove a specific number from the array 
const removed = modifiedArray.filter( number => number !== 3);
console.log(removed );


// if you want to update 
const updated = modifiedArray.map(number => number === 4 ? 20 : number );
console.log(updated);