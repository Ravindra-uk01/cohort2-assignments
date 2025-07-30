"use strict";
const user = {
    id: 1,
    name: "John Doe",
    email: "test@gmail.com",
    isActive: true,
};
class Employee {
    constructor(id, name, age, isEmployed) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.isEmployed = isEmployed;
    }
    greet(name) {
        return `Hello ${name}, my name is ${this.name}.`;
    }
}
const employee1 = new Employee(1, "Alice", 30, true);
console.log(employee1.greet("Bob")); // Output: Hello Bob, my name is Alice.
const product1 = {
    name: "Laptop",
    price: 1200,
    category: "Electronics"
};
const product2 = {
    name: "Phone",
    price: "1200",
    category: "Electronics"
};
console.log(product1); // Output: { name: 'Laptop', price: 1200, category: 'Electronics' }
console.log(product2);
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    color: "Blue"
};
console.log('car:', car); // Output: { brand: 'Toyota', model: 'Camry', year: 2020, color: 'Blue' }
