const max = Math.max(6, 23, 45, 1, 89, 23)

const numbers = [3, 5, 2, 45, 5, 43, 90, 32, 15];
// const arrayMax = Math.max(numbers);
const arrayMax = Math.max(...numbers);

// console.log(numbers);
// console.log(...numbers);
console.log(arrayMax);

//use spread operator to copy

const friends = [4, 5, 87, 9];
const bondu = friends;
// bondu.push(12);
const dosto = [...friends]
console.log(dosto);
friends.push(100)
console.log(friends);
// const nums2 = nums;

// nums2.push(12);
// console.log(nums);

//advanced
const sonkha = [...friends, 9999]

