//  unlimited params
// const add = (...numbers: number[]) => numbers.reduce((res, val) => res + val, 0);
//  limited to 3-tuple
const add = (...numbers: [number,number,number]) => numbers.reduce((res, val) => res + val, 0);
const addNumbers = add(5, 10, 15);
console.log(addNumbers);


//  destructuring
const hobbies = ['reading', 'triathlons'];
const [h1, h2, ...remaining] = hobbies;
console.log(h1, h2, hobbies);

const person = { firstName: 'phil', age: 55 };
const { firstName, age } = person;
console.log(firstName, age, person);
