import { compose, pipe } from 'lodash/fp';

let input = "   JavaScript   ";

const trim = str => str.trim();
const toLowerCase = str => str.toLowerCase();
const wrap = type => str => `<${type}>${str}</${type}>`;

const transformedData = pipe ( trim, toLowerCase, wrap("div") );
console.log( transformedData(input) );