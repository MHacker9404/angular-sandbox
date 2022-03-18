enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR
};

const person: {
  name: string;
  age: number;
  hobbies: string[];
  // role: [number, string]; //  tuple: fixed-length and type descriptors
  role: Role
} = {
  name: 'phil',
  age: 30,
  hobbies: ['Sports', 'Reading'],
  // role: [2, 'author']
  role: Role.AUTHOR
};

console.info(person);
