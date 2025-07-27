"use strict";
let x = 1;
let name1 = "John";
let nullValue = null;
let undefinedValue = undefined;
let booleanValue = true;
function greet(name) {
    console.log(`Hello, ${name}`);
}
greet("Amelia");
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 10));
function isLegal(age) {
    return age >= 18;
}
console.log(isLegal(20)); // true
console.log(isLegal(16)); // false
