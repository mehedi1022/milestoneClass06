// const number = [2, 4, 1];

// const number1 = number;
// const number1 = [];

// for(let num of number){
//     number1.push(num);
// }
// const number1 = [...number];

// number.push(10);
// number1.push(20);
// number1.push(30);

// console.log("number: ", number);
// console.log("number1: ", number1);

// NEW TOPIC 
//rest operator

const nums = [3, 5, 2, 6, 7, 8, 9];

// const a = nums[0]
// const b = nums[1]
// const c = nums[2]
// const d = nums[3]

const [a, b, c, ...d] = nums;


console.log(a, b, c, d);

// middle const x = nums[3]