"use strict";
const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    isEmployed: true,
};
console.log(person1); // Output: { firstName: 'John', lastName: 'Doe', age: 25, isEmployed: true }
const item = {
    name: "Laptop",
    price: 1500,
    category: "Electronics"
};
console.log(item);
const identifier = "Product123";
console.log(identifier); // Output: Product123
const teamLead1 = {
    name: "Alice",
    age: 35,
    department: "Development",
    // address: "123 Main St"  will not work as address is not part of teamLead type
};
console.log("team lead1:", teamLead1); // Output: { name: 'Alice', age: 35, department: 'Development' }
// overriding types in TypeScript - can't be merged multiple types with the same name
// type vehicle = {
//     make: string;
//     model: string;
//     year: number;
// }
// type vehicle = {
//     model : string ,
//     name: string
// }
// const car: vehicle = {
//     make: "Toyota",
//     model: "Camry",
//     year: 2020,
//     name: "Sedan"
// }
// console.log('car:', car); // Output: { make: 'Toyota', model: 'Camry', year: 2020, name: 'Sedan' }
