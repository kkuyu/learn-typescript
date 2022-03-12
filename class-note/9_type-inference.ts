var a: number = 10;

function getB(b: number = 20): string {
  var c: string = "hi";
  return b + c;
}

interface Dropdown<T> {
  value: T;
  title: string;
}

var shoppingItem: Dropdown<string> = {
  value: "abc",
  title: "abc",
};
