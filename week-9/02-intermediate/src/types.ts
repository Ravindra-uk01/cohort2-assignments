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