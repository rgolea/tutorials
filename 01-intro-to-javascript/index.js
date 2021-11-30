// .js, .ts

// Operaciones
3 + 3 // 6
3 - 3 // 0
3 * 3 // 9
3 / 3; // 1
4 % 3; // 1
3 ** 3 // 27;

// Variables
//x + 1 = y;
var x = 3;
const y = x + 1;
let z = x * y;
console.log(x, y, z)

x = 4;
z = y ** x;

console.log(x, y, z)

console.log({ a });

var a;
const b = 'b';
let c;

console.log({ a, b, c });


// Tipos

// String
const name = 'Juan';

// Number
const age = 30;

// Boolean
const hasKids = true;

// Null
const car = null;

// Undefined
let test;

// Object
const juan = {
  name: 'Juan',
  age: 30,
  hasKids: true,
  car: null,
  test: undefined
}

// Array
const hobbies = ['Sports', 'Cooking'];
const address = ['1299 S Juniper Street', 'Phoenix', 'AZ', '85034'];
const temparture = [100, 32];

const mixed = ['Juan', 30, true, null, undefined];

const people = [
  {
    name: 'Juan',
    age: 30,
    hasKids: true,
    car: null,
    test: undefined
  },
  {
    name: 'Maria',
    age: 25,
    hasKids: false,
    car: null,
    test: undefined
  }
];

(25).toString(); // '25'
'Juan'.toUpperCase(); // JUAN

// Funciones
/*
  function <name> (<parameters>) {
    <statements>
  }

  const <name> = function (<parameters>) {
    <statements>
  }

  function (<parameters>) {
    <statements>
  }

  const <name> = (<parameters>) => {
    <statements>
  }

  (<parameters>) => <statement>
*/

function sum(a, b) {
  return a + b;
}


const $1_plus_2 = sum(1, 2);
const $2_plus_3 = sum(2, 3);

function greet(name, age) {
  return `Hello ${name} you are ${age}`;
}

const anotherGreet = (name, age) => `Hello ${name} you are ${age}`;

const greetJuan = anotherGreet('Juan', 30);
console.log(greetJuan);

// if/else
// condition operators
// <, >, <=, >=, ===, !==
/*
*
  if (<condition>) {
    <statements>
  } else if(<condition>) {
    <statements>
  } else {
    <statements>
  }
*/

if(age >= 18) {
  // statements
  console.log('You are old enough to vote');
} else {
  // statements
  console.log('You are not old enough to vote');
}

// Switch
/*
  switch (<condition>) {
    case <value>:
      <statements>
      break;
    case <value>:
      <statements>
      break;
    default:
      <statements>
  }
*/

const language = 'es-ES';

switch(language){
  case 'es-ES':
    console.log('Hola');
    break;
  case 'fr-FR':
    console.log('Bonjour');
    break;
  case 'de-DE':
    console.log('Hallo');
    break;
  default:
    console.log('Hello');
}

// Loops and Iteration
/*
  for (<init>; <condition>; <increment>) {}
  while (<condition>) {}
  do {} while (<condition>) {}
  for (let i = 0; i < 10; i++) {}
*/

// for
console.log('======= FOR LOOP =======');
for(let i = 0; i < 10; i++) {
  console.log(i);
}

// while
console.log('======= WHILE LOOP =======');
let i = 0;
while(i < 10) {
  console.log(i);
  i++;
}

// do while
console.log('======= DO WHILE LOOP =======');
i = 0;
do {
  console.log(i);
  i++;
} while(i < 10);

// for in
console.log('======= FOR IN LOOP =======');
const person = {
  name: 'Juan',
  age: 30
}

for(let key in person) {
  console.log(key, person[key]);
}

// for of
console.log('======= FOR OF LOOP =======');
const names = ['Juan', 'Maria', 'Pedro'];

for(let name of names){
  console.log(name);
}

// Objects and methods and properties

const juanito = {
  name: 'Juanito',
  age: 30,
  greet() {
    console.log(`${this.name} says hello`)
  },
};

const pedrito = {
  name: 'Pedrito',
  age: 20,
  greet() {
    console.log(`${this.name} says hello`)
  },
};

juanito.greet();
pedrito.greet();

// Classes
class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`${this.name} says hello from inside a class`)
  }
}

const juanito2 = new Person('Juanito 2', 56);
const pedrito2 = new Person('Pedrito 2', 66);

juanito2.greet();
pedrito2.greet();
console.log(juanito2.name);
