function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number) {
  console.info('Result: ' + num);
}

printResult(add(5, 12));

// let combineValues: Function;
let combineValues: (a: number, b: number) => number;
combineValues = add;
console.info(combineValues(10, 10));

function addAndHandle(n1: number, n2: number, cb: (a: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(5, 6, console.info);
addAndHandle(6, 6, (result) => console.info(result));

function generateError(message: string, code: number): never {
  throw { message, errorCode: code };
}
