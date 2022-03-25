"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Logger(logString) {
    console.info(`Logger - factory`);
    return function (targetConstructor) {
        console.info(`${logString}`);
        console.info(targetConstructor);
    };
}
function WithTemplate(selector, template) {
    console.info(`WithTemplate - factory`);
    return (targetConstructor) => class extends targetConstructor {
        constructor(...args) {
            super();
            console.info(`Rendering template`);
            const elem = document.getElementById(selector);
            if (elem) {
                elem.innerHTML = template;
                elem.querySelector('h1').textContent = this.name;
            }
        }
    };
}
let Person = class Person {
    constructor() {
        this.name = 'phil';
        console.info('creating person object');
    }
};
Person = __decorate([
    Logger('LOGGING - PERSON'),
    WithTemplate('app', '<h1>My Person Object</h1>'),
    __metadata("design:paramtypes", [])
], Person);
const person = new Person();
console.info(person);
function Log(target, propertyName) {
    console.info('Property decorator');
    console.info(target, propertyName);
}
function Log2(target, name, descriptor) {
    console.info('Accessor decorator');
    console.info(target);
    console.info(name);
    console.info(descriptor);
}
function Log3(target, methodName, descriptor) {
    console.info('Method decorator');
    console.info(target);
    console.info(methodName);
    console.info(descriptor);
}
function Log4(target, methodName, position) {
    console.info('Parameter decorator');
    console.info(target);
    console.info(methodName);
    console.info(position);
}
class Product {
    constructor() {
        this.title = 'title';
        this._price = 0.0;
    }
    set price(value) {
        this._price = value;
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log,
    __metadata("design:type", String)
], Product.prototype, "title", void 0);
__decorate([
    Log2,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Product.prototype, "getPriceWithTax", null);
function AutoBind(_, _2, descriptor) {
    const origMethod = descriptor.value;
    const newDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = origMethod.bind(this);
            return boundFn;
        },
    };
    return newDescriptor;
}
class Printer {
    constructor() {
        this.message = 'This works';
    }
    showMessage() {
        console.info(this.message);
    }
}
__decorate([
    AutoBind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Printer.prototype, "showMessage", null);
const printer = new Printer();
const button = document.querySelector('button');
button === null || button === void 0 ? void 0 : button.addEventListener('click', printer.showMessage);
const registeredValidators = {};
function Required(target, propName) {
    registeredValidators[target.constructor.name] = {
        [propName]: ['required']
    };
}
function PositiveNumber(target, propName) {
    registeredValidators[target.constructor.name] = {
        [propName]: ['positive']
    };
}
function validate(obj) {
    let result = true;
    return result;
}
class Course {
    constructor(t, p) {
        this.title = t;
        this.price = p;
    }
}
__decorate([
    Required,
    __metadata("design:type", String)
], Course.prototype, "title", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], Course.prototype, "price", void 0);
const form = document.querySelector('form');
form === null || form === void 0 ? void 0 : form.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const price = +document.getElementById('price').value;
    const createdCourse = new Course(title, price);
    if (!validate(createdCourse)) {
        alert('Invalid input - please try again');
        return;
    }
    console.info(createdCourse);
});
//# sourceMappingURL=app.js.map