const numbers = [1, 6, 8, 4];
for(let i = 0; i < numbers.length; i++){
    console.log(numbers);
}

const nobab = 'Siraj Ud Doula';
for(const char of nobab){
    console.log(char);
}

const glass = {

}

// for( const key of glass){
//     console.log(key);
// }

for (const key of glass){
    const vlaue = glass[key];
    console.log(key, vlaue);
}

// optional

const keys = Object.keys(galss);
console.log(keys);

for(const key of keys){
    const vlaue = glass[key];
    console.log(key, value);
}