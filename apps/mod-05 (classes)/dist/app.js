"use strict";
class Department {
    constructor(name) {
        this._employees = [];
        this.name = name;
    }
    describe() {
        console.log(`Department: ${this.name}`);
    }
}
let accounting = new Department('Accounting');
console.info(accounting);
accounting.describe();
//# sourceMappingURL=app.js.map