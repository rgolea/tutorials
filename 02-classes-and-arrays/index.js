class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hola, soy ${this.name}`);
  }

  sayAge() {
    console.log(`Tengo ${this.age} años`);
  }
}

// Camel case: nombreDeLaClase

const juan = new Person('Juan', 30);
const pedro = new Person('Pedro', 25);
const ana = new Person('Ana', 20);

// class JobWorker { // Pascal case: ClassName
//   constructor(name, age, job){
//     this.name = name;
//     this.age = age;
//     this.job = job;
//   }

//   sayHello(){ 
//     console.log(`Hola, soy ${this.name}`);
//   }

//   explainJob(){
//     console.log(`Mi trabajo es ${this.job}`);
//   }
// }

class JobWorker extends Person { // Pascal case: ClassName
  constructor(name, age, job) {
    super(name, age);
    this.job = job;
  }

  explainJob() {
    console.log(`Mi trabajo es ${this.job}`);
  }
}

class ExtendedPerson extends Person {
  sayHelloWithNameAndAge() {
    console.log(`Hola, soy ${this.name} y tengo ${this.age} años`);
  }
}

// const jose = new JobWorker('Jose', 35, 'Programador');
// jose.sayHello();
// jose.sayAge();
// jose.explainJob();

const people = [
  ['Juan', 30, 'Programador'],
  ['Pedro', 25, 'Estudiante'],
  ['Jose', 15],
  ['Ana', 20, 'Estudiante'],
];

const getClasses = (people) => {
  return people.map(person => {
    if(person[1] < 18){
      return new Person(person[0], person[1]);
    } else {
      return new JobWorker(person[0], person[1], person[2]);
    }
  });
}

const peopleWithClasses = getClasses(people);

// for(let p of peopleWithClasses){
//   if(p.age < 18){
//     p.sayHello();
//   }
// }


// function ES5Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// ES5Person.prototype.sayHello = function() {
//   console.log(`Hola, soy ${this.name} desde ES5 >> 2015`);
// }

// const p = new ES5Person('Juan', 30);

// function ES5JobWorker(name, age, job) {
//   ES5Person.call(this, name, age);
//   this.job = job;
// }

// Es5JobWorker.prototype = Object.create(ES5Person.prototype);

// ES5Person.prototype.explainJob = function() {
//   console.log(`Mi trabajo es ${this.job}`);
// }
/*
*  - Person
      - Jose
*       - JobWorker
*             - Ana
*/

/*
* Array y objetos
*/


// class FakeArray {
//   _value = {};

//   constructor(){
//     for(let i = 0; i < arguments.length; i++){
//       this._value[i] = arguments[i];
//     }
//   }

//   get length() {
//     let count = 0;
//     for(let i in this._value){
//       count = +i + 1;
//     }
//     return count;
//   }

//   reduce(callback, initialValue) {
//     let accumulator = initialValue;
//     for(let i = 0; i < this.length; i++){
//       accumulator = callback(accumulator, this._value[i], i, this);
//     }
//     return accumulator;
//   }

//   map(callback) {
//     return this.reduce(callback, new FakeArray());
//   }

//   filter(callback) {
//     return this.reduce((acc, value, index, array) => {
//       if(callback(value, index, array)){
//         acc.push(value);
//       }
//       return acc;
//     }, []);
//   }
// }

// const fakeArray = new FakeArray(1, 2, 3, 4, 5);
// const arr = new Array(1, 2, 3, 4, 5);

// console.log(fakeArray.length, arr.length);
// const sum = arr.reduce((acc, cur) => acc + cur, 0);
// const fakeSum = fakeArray.reduce((acc, cur) => acc + cur, 0);
// console.log({ sum, fakeSum });

// const map = arr.map(cur => cur * 2);
// const fakeMap = fakeArray.map(cur => cur * 2);
// console.log({ map, fakeMap })

const names = ['Juan', 'Pedro', 'Jose', 'Ana']
const popped = names.pop()
names.push('Lucas')
console.log({ names, popped });

function arrJoin(arr, separator = ',') {
  return arr.reduce((acc, cur, index, array) => {
    if(index === array.length - 1){
      return acc + cur;
    } else {
      return acc + cur + separator;
    }
  }, '');
}

console.log(arrJoin(names, ' & '));

function arrReverse(arr) {
  return arr.reduce((acc, _, index, array) => {
    const i = array.length - 1 - index;
    acc.push(array[i]);
    return acc;
  }, [])
}

console.log(arrReverse([1,2,3,4,5]));

function arrSome(arr, callback) {
  return arr.reduce((acc, cur, index, array) => {
    const result = callback(cur, index, array);
    return acc || Boolean(result);
  }, false);
}

console.log(arrSome([1,2,3,4,5], cur => cur % 2 === 0));

function arrEvery(arr, callback) {
  return arr.reduce((acc, cur, index, array) => {
    const result = callback(cur, index, array);
    return acc && Boolean(result);
  }, true);
}

console.log(arrEvery([1,2,3,4,5], cur => cur % 2 === 0));

function arrFilter(arr, callback){
  return arr.reduce((acc, cur, index, array) => {
    const result = callback(cur, index, array);
    if(result){
      acc.push(cur);
    }
    return acc;
  }, []);
}

console.log(arrFilter([1,2,3,4,5], cur => cur % 2 === 0));

function arrIncludes(arr, value) {
  return arr.reduce((acc, cur) => {
    return acc || cur === value;
  }, false);
}

console.log(arrIncludes([1,2,3,4,5], 5));

function arrFindIndex(arr, value) {
  return arr.reduce((acc, curr, index) => {
    if(acc > -1) return acc;
    if(curr === value){
      return index;
    } else {
      return acc;
    }
  }, -1);
}

console.log(arrFindIndex([1,2,3,4,5], 5));
