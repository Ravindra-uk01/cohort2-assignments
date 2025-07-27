interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

const user : User = {
    id: 1,
    name: "John Doe",
    email: "test@gmail.com",
    isActive: true,
}

interface person {
    id: number;
    name: string;
    age: number;
    isEmployed: boolean;
    greet(name: string): string;
}

class Employee implements person {
    id: number;
    name: string;
    age: number;
    isEmployed: boolean;

    constructor(id: number, name: string, age: number, isEmployed: boolean) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.isEmployed = isEmployed;
    }

    greet(name: string): string {
        return `Hello ${name}, my name is ${this.name}.`;
    }
}

const employee1 = new Employee(1, "Alice", 30, true);
console.log(employee1.greet("Bob")); // Output: Hello Bob, my name is Alice.

interface product {
    name: string;
    price: number|string;
}

interface product{
    category: string 
}

const product1: product = {
    name: "Laptop",
    price: 1200,
    category: "Electronics"
}

const product2: product = {
    name: "Phone",
    price: "1200",
    category: "Electronics"
}

console.log(product1); // Output: { name: 'Laptop', price: 1200, category: 'Electronics' }
console.log(product2); 

interface fruit {
    name : string & number;
    color: string;
}

// const fruit1: fruit = {
//     name: "Apple",  /// this will give an error because name cannot be both string and number
//     color: "Red"
// }