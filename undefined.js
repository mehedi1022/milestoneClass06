/*
8 ways to get undefine 
1. variable that is not initialized will given undefined
2. function with no return
3. parameter that is not passed will
4. if return has nothing on the right side will
5.property does not exixt
6.
7.
8. set a value directly to undefined
*/

let first;

function second(a, b){
    const total = a + b;
}
const result = second();

function third (a, b, c, d){
    const total = a + b + c + d;
    // console.log(a, b, c, d);
}

third(2, 5);
//conole.log(result);


function noNegative(a, b){
    if(a < 0 || b < 0){
        return
    }
    return a + b;
}

const total = noNegative(2, -5);
// console.log(total);

const fifth = {id: 2, name: 'ponchom', age :40}
console.log(fifth.age, fifth.salary);

const sixth = [4, 89, 87, 56, 54];
// you should not do
console.log(sixth[1], sixth[5], sixth[200]);
console.log(sixth);

const eighth = undefined;

const ninth = null;

const data = {result: [], updated: null};
// console.log(typeof undefined);
console.log(typeof null);