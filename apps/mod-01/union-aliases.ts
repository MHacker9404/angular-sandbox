function combine(input1: number | string, input2: number | string) {
  let result: string | number;

  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  }
  else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

const combinedAges = combine(30, 26);
console.info(combinedAges);

const combinedNames = combine('Phil', 'Clara');
console.info(combinedNames);
