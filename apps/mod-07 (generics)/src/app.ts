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
    descText = `Got ${element.length} element(s)`;
  }
  return [element, descText];
}
console.info(countAndDescribe('Hi there'));
console.info(countAndDescribe(['Sports', 'Cooking']));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `Value: ${obj[key]}`;
}
extractAndConvert({ name: 'phil' }, 'name');

class TsStorage<T> {
  private data:T[] = [];
  addItem(item:T) {
    this.data.push(item);
  }
  removeItem(item:T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItems():T[] {
    return [...this.data];
  }
}
const stringStorage = new TsStorage<string>();
stringStorage.addItem(10);
