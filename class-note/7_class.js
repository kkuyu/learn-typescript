function Person01(name, age) {
  this.name = name;
  this.age = age;
}

class Person02 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const foo = new Person01("foo", 100);
const bar = new Person02("bar", 200);
