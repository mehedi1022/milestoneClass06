//int a = 5;
// string b = 'allim halim kalim';
// bool c = True;
// object student = {name: 'noya dhman', id: 55}
// int [] numbers = [12, 45, 78]
// string[] friends = ['abul', 'babul', 'shamsu'];

//dynamic type Language

// primitive type
const a = 5;
const b = 'Samsu kopai na';
const d = true;

// non primitive
const ages = [45, 56, 66];
const student = {id: 23, class: 8}
// console.log(typeof a, typeof b, typeof d, typeof ages, typeof student);

let x = 5;
let y = x;
console.log(x, y);

y = 7;
console.log(x, y);

const p = {job: 'web developer'}
let q = p;
// q = {job: 'Backend end'}
q.job = 'front end develper';
console.log(p, q);