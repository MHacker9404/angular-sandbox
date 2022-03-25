"use strict";
const add = (...numbers) => numbers.reduce((res, val) => res + val, 0);
const addNumbers = add(5, 10, 15);
console.log(addNumbers);
const hobbies = ['reading', 'triathlons'];
const [h1, h2, ...remaining] = hobbies;
console.log(h1, h2, hobbies);
const person = { firstName: 'phil', age: 55 };
const { firstName, age } = person;
console.log(firstName, age, person);
//# sourceMappingURL=app.js.map