function Logger(targetConstructor: Function) {
  console.info('logging....');
  console.info(targetConstructor);
}

@Logger
class Person {
  name: string = 'phil';
  constructor() {
    console.info('creating person object');
  }
}

const person = new Person();
console.info(person);
