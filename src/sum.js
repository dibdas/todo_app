// function sum(a, b) {
//     return a + b;
// }
// module.exports = sum;

// const capitalize = (string) => {
//     const firstLetter = string.charAt(0).toUpperCase();
//     const otherLetters = string.slice(1).toLowerCase();
//     return firstLetter + otherLetters;
// };

// module.exports = capitalize;

// const capitalize = require('../src/capitalize');

// test('it should capitalize the first letter of a string', () => {
//     const str = capitalize('hello WORLD');
//     expect(str).toBe('Hello world');
// });

// test('it should capitalize the first letter of a string that has punctuations after the first letter', () => {
//     const str = capitalize('hello, WORLD!');
//     expect(str).toBe('Hello, world!');
// });

// test('it should not change a string that has a number as the first character', () => {
//     const str = capitalize('1hello world');
//     expect(str).toBe('1hello world');
// });

// test('it should not capitalize other letters apart from the first letter of a string', () => {
//     const str = capitalize('hello WORLD');
//     expect(str).not.toBe('Hello World');
// });

// test('it should not change a string that has a punctuation as the first character', () => {
//     const str = capitalize('.hello world');
//     expect(str).toBe('.hello world');
// });