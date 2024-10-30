const user = {id: 1, name: 'Gorib Amair', job: 'actor'};
//javascript object notation (json)
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);


// { id: 1, name: 'Gorib Amair', job: 'actor' }
// {"id":1,"name":"Gorib Amair","job":"actor"}

const shop = {
    owener : 'Alia',
    address: {
        street: 'kochukhet voot',
        city: 'ranbir',
        country: 'BD'
    },
    product: ['laptop', 'mic', 'monitor'],
    revevue: 45000,
    isOpen: true,
    isNew: false
};
console.log(shop);
// two thing must know

const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
// console.log(typeof shop);

const shopOBJ = JSON.parse(shopJ);
console.log(shopOBJ);