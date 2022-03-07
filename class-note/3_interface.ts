interface User {
  age: number;
  name: string;
}

let joy: User = {
  age: 10,
  name: "조이",
};

function getUser(user: User): void {
  console.log(user);
}

getUser(joy);

interface SumFunction {
  (a: number, b: number): number;
}

let sum: SumFunction;
sum = function (a: number, b: number): number {
  return a + b;
};

interface StringArray {
  [index: number]: string;
}

let arr: StringArray = ["a", "b", "c"];
arr[0] = "A";

interface StringRegexDictionary {
  [key: string]: RegExp;
}

let obj: StringRegexDictionary = {
  sth: /abc/,
  jsFile: /\.js$/,
};
