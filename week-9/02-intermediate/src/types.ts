type person1 = {
    firstName : string ,
    lastName : string ,
    age: number,
    isEmployed: boolean,
}

const person1: person1 = {
    firstName: "John",  
    lastName: "Doe",
    age: 25,        
    isEmployed: true,
}   

console.log(person1); // Output: { firstName: 'John', lastName: 'Doe', age: 25, isEmployed: true }

// using intersection and union in types 

type product1 = {
    name: string;
    price: number | string;
    category: string;
}

const item : product1 = {
    name: "Laptop",
    price: 1500,
    category: "Electronics"
}

console.log(item);

type name = string | number;

const identifier: name = "Product123";
console.log(identifier); // Output: Product123

// using intersection types
type employee1 = {
    name: string;
    age: number;
}

type manager1 = {
    name : string;
    department: string;
}

type teamLead = employee1 & manager1;

const teamLead1: teamLead = {
    name: "Alice",
    age: 35,
    department: "Development",
    // address: "123 Main St"  will not work as address is not part of teamLead type
}

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