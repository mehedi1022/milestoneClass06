// map ==> loops through each element of 

const numbers = [4, 5, 2, 8, 10];

// const doubled = [];
// for(const num of numbers){
//     const double = num * 2;
//     doubled.push(double)
// }

// console.log(doubled);

function doubleIt(num){
    console.log('num now', num);
    return num * 2;
}
const result = numbers.map(doubleIt)
console.log(result);

const double2 = n => n * 2;
const output = numbers.map(double2)
const output2 = numbers.map(n => n * 2)