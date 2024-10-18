//var : no reason to use var
//let : allow it to reassign
// const : do not allow it to reassign

const money = 25;
// money = 50;
const rich = money + 25;
console.log(rich);

let count = 0;
count = count + 10;
console.log(count);
  
const numbers = [23, 4, 23, 12, 56];
numbers[1] = 55;
numbers.push(8, 9, 65);
console.log(numbers);

//object

const sudent = {
    name: 'moyna pakhi',
    class : 12
}

student = {name: 'kokhil konthi'}
// student.name = 'moyur kothi';
console.log(student);

//loop
const sum = 0;

for(let i = 0; i < 10; i++){
    const num = i;
    sum = sum + i;
}