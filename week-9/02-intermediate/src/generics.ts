
const firstVal = <T> (arr: T[]) => {
    return arr[0];
}

console.log('First value:', firstVal([1, 2, 3])); // Output: First value: 1
console.log('First value:', firstVal(['apple', 'banana', 'cherry']));

const identify = <T>(arg: T) => {
    return arg;
}

const a = <string>("Kapil");
const b = <number>(234);

console.log('a ', a );
console.log('b ', b );