const glass = {name: 'glass', color: 'golden', price: 12, isCleaned: true};

console.log(glass);
//{ name: 'glass', color: 'golden', price: 12, isCleaned: true }

// const keys = Object.keys(glass);
// console.log(keys);


// const values = Object.values(glass);
// console.log(values);

// const entries = Object.entries(glass);
// console.log(entries);
// [
//     [ 'name', 'glass' ],
//     [ 'color', 'golden' ],
//     [ 'price', 12 ],
//     [ 'isCleaned', true ]
//   ]

// delete glass.isCleaned;
// console.log(glass);

// const {isCleaned, ...shortGlass}
// console.log(shortGlass);

//freeze
Object.freeze(glass);
glass.source = 'Bangladesh';
glass.price = 5000;
delete glass.name;
console.log(glass);