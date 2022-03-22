function merge<T extends object, U extends object>(oA: T, oB: U) {
  return Object.assign(oA, oB);
}

const mergedObject = merge({ name: 'phil', hobbies: ['sports'] }, { age: 54 });
// const mergedObject2 = merge({ name: 'phil', hobbies: ['sports'] }, 30);

interface Lengthy {
  length: number;
}
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descText = 'Got no value';
  if (element.length > 0) {
    descText = `Got ${element.length} element(s)`
  }
  return [element, descText]
 }
console.info(countAndDescribe('Hi there'));
console.info(countAndDescribe(['Sports','Cooking']));
