/*
truthy
1. true
2. any number (+ve , -ve) will be truth
3. any string other than empty string
4. '0']
5. {}
6.[]

falsy
1.false
2. 0
3. '' (empty string)
4. undefined
5. null
*/


let x = {a: 5, b:6};
console.log(x);
const x = '0';
if(x){
    console.log('vlaue of x is truethy');
}
else{
    console.log('vlaue of x is falsy');
}


//optional
//check falsy
// if(x === false){

// }
const y = '';
if(!x){
console.log('falsy');
}

const z = '';
//check true
if(!!x){
    console.log('vlaue is truthy');
}