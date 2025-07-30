"use strict";
const sum = (arr) => {
    return arr.reduce((acc, curr) => acc + curr, 0);
};
console.log(sum([1, 2, 3, 4])); // Output: 10
const concat = (arr) => {
    return arr.join(" ");
};
console.log(concat(["apple", "banana", "cherry", "is", "good"])); // Output: apple, banana, cherry
console.log(concat(["a", "b", "c", "d"])); // Output: a b c d
function legalUser(user) {
    return user.filter(u => u.age >= 18);
}
const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 17 },
    { id: 3, name: "Charlie", age: 20 }
];
console.log(legalUser(users)); // Output: [ { id: 1, name: 'Alice', age: 25 }, { id: 3, name: 'Charlie', age: 20 } ]
