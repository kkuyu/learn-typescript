function logMessage(value: string | number) {
  console.log(value);
  if (typeof value === "number") {
    value.toLocaleString();
  }
  if (typeof value === "string") {
    value.toString();
  }
  throw new TypeError("value must be string or number");
}

logMessage("hello");
logMessage(100);

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function askSomeone(someone: Developer | Person) {
  console.log(someone.name);
  // console.log(someone.skill);
  // console.log(someone.age);
}

askSomeone({ name: "foo", skill: "js" });
askSomeone({ name: "bar", age: 10 });

function askSomebody(someone: Developer & Person) {
  console.log(someone.name);
  // console.log(someone.skill);
  // console.log(someone.age);
}

askSomebody({ name: "baz", skill: "js", age: 10 });
