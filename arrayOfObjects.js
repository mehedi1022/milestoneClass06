const products = [
    {id: 1, name: 'levevo', price: 65000}
    {id: 2, name: 'dell', price: 65000}
    {id: 3, name: 'hp', price: 65000}
    {id: 4, name: 'mac', price: 65000}
]

//map
const names = products.map(product => product.name);
console.log(names);
const prices = products.map(p => p.price)

//filter 
const expensive = products.filter( p => p.price > 50000)
console.log(expensive);

// find 
const affordable = products.find()
console.log(affordable);

// rduce 
const total = products.reduce((acum, cureent) acum.price)