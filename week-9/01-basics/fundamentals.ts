let x:number = 1;
let name1:string = "John";
let nullValue:null = null;
let undefinedValue:undefined = undefined; 
let booleanValue:boolean = true;

function greet (name:string){
    console.log( `Hello, ${name}`);
}

greet("Amelia");

function sum (a:number , b:number){
    return a + b;
}

console.log(sum(5, 10));

function isLegal(age: number){
    return age >= 18;
}

console.log(isLegal(20)); // true
console.log(isLegal(16)); // false