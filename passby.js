 //object and array passby by value
let num1 = 5;
let num2 = 7;

function mult(a, b){
    a = 27;
    const result = a * b;
    return result;
}

console.log(num1);
const output = mult(num1, num2);
console.log(output);

 //object and array passby reference
let stud1 = {name: 'jal', part: 'bosr'};
let stud2 = {name: 'jaimm', part: 'boomr'};
 function makeMovie(coup1, coup2){
    coup1.name = 'onto';
 }

 console.log(stud1,stud2);
 makeMovie(stud1, stud2);
 console.log(stud1, stud2);

 //object and array passby 