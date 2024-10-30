const person = {
    name: "Hero Alam",
    age: 34,
    phone: "02340",
    address: {
        zilla: "Rajshahi",
        village: "bolbo"
    },
    p: [1, 4 , 6, 7]
}

const {address:{zilla:thikana}} = person;
// const {zilla} = address;

console.log(thikana);

// const person1 = {...person};
// person1.email = "hello@gmail.com"
// console.log(person1);

// const {phone:mobile, address,name:amarNaam} = person;


// const {zilla} = address
// console.log(address);
// console.log(amarNaam);
// console.log(name);
// console.log(mobile);

// const {name,...hello} = person;
// console.log(hello);

// const {p, name, ...reset} = person;
// console.log(name);