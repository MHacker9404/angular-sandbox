interface OldPerson {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user1: OldPerson;
user1 = {
  name: 'Max',
  age: 30,
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  },
};

user1.greet('Hi there - I am');

interface Named {
  name: string;
  outputName?: string;    //optional in extending/implementing classes
}
interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  constructor(public name: string) {}
  greet = (phrase: string) => console.info(`${phrase} ${this.name}`);
}

let user2: Greetable;
user2 = {
  name: 'Max',
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  },
};
console.info(user2);
user2 = new Person('Maui');

type AddFn = (n1: number, n2: number) => number;
interface IAddFn {
  (n1: number, n2: number): number;
}
let add: IAddFn;
add = (n1: number, n2: number) => n1 + n2;
console.info(add(2, 3));
