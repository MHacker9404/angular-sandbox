function Logger(logString: string) {
  console.info(`Logger - factory`);
  return function (targetConstructor: Function) {
    console.info(`${logString}`);
    console.info(targetConstructor);
  };
}

function WithTemplate(selector: string, template: string) {
  console.info(`WithTemplate - factory`);
  return <T extends { new (...args: any[]): { name: string } }>(
    targetConstructor: T
  ) =>
    // extending the class that is decorated
    class extends targetConstructor {
      constructor(...args: any[]) {
        super();
        console.info(`Rendering template`);
        const elem = document.getElementById(selector);
        if (elem) {
          elem.innerHTML = template;
          elem.querySelector('h1')!.textContent = this.name;
        }
      }
    };
}

@Logger('LOGGING - PERSON')
@WithTemplate('app', '<h1>My Person Object</h1>')
class Person {
  name: string = 'phil';
  constructor() {
    console.info('creating person object');
  }
}

const person = new Person();
console.info(person);

//  decorator for property
//  executed as part of class definition/parsing in js
function Log(target: any, propertyName: string | Symbol) {
  console.info('Property decorator');
  console.info(target, propertyName);
}

//  accessor decoratory
//  can return value from decorator
function Log2(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.info('Accessor decorator');
  console.info(target);
  console.info(name);
  console.info(descriptor);
}

//  method decorator
//  https://stackoverflow.com/questions/32605074/typescript-decorators-and-arrow-function
//  can return value from decorator
function Log3(
  target: any,
  methodName: string | Symbol,
  descriptor?: PropertyDescriptor
) {
  console.info('Method decorator');
  console.info(target);
  console.info(methodName);
  console.info(descriptor);
}

function Log4(target: object, methodName: string | Symbol, position: number) {
  console.info('Parameter decorator');
  console.info(target);
  console.info(methodName);
  console.info(position);
}

class Product {
  @Log
  public title: string = 'title';
  private _price: number = 0.0;
  constructor() {}
  @Log2
  set price(value: number) {
    this._price = value;
  }

  //  gonna hid this for the accessor decorator to return a new PropertyDescriptor
  //   get price(): number {
  //     return this._price;
  //   }

  // @Log3
  // public getPriceWithTax = (@Log4 tax: number) => this._price * (1 + tax);
  @Log3
  public getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const origMethod = descriptor.value;
  const newDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      //  this refers to the object that defines the method
      const boundFn = origMethod.bind(this);
      return boundFn;
    },
  };
  return newDescriptor;
}
class Printer {
  message = 'This works';
  // showMessage = () => console.info(this.message);
  @AutoBind
  showMessage() {
    console.info(this.message);
  }
}
const printer = new Printer();
const button = document.querySelector('button');
button?.addEventListener('click', printer.showMessage);

interface ValidatorConfig {
  [prop: string]: {
    [prop: string]: string[]; //  ['required', 'positive']
  };
}
const registeredValidators: ValidatorConfig = {};
function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    [propName]: ['required']
  };
}
function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    [propName]: ['positive']
  };
}
function validate(obj: object): boolean {
  let result = true;
  return result;
}
class Course {
  @Required title: string;
  @Required price: number;
  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}
const form = document.querySelector('form');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = (document.getElementById('title') as HTMLInputElement).value;
  const price = +(document.getElementById('price') as HTMLInputElement).value;

  const createdCourse = new Course(title, price);
  if (!validate(createdCourse)) {
    alert('Invalid input - please try again');
    return;
  }
  console.info(createdCourse);
});
