class Department {
  name: string;
  private _employees: string[] = [];

  constructor(name: string) {
    this.name = name;
  }

  public describe() {
    console.log(`Department: ${this.name}`);
  }

  static createEmployee(name: string) {
    return { name };
  }
}

let accounting = new Department('Accounting');
console.info(accounting);
accounting.describe();

console.info(Department.createEmployee('phil'));
