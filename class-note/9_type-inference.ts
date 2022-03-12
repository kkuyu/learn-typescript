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
  value: "foo",
  title: "foo",
};

interface DetailedDropdown<K> extends Dropdown<K> {
  tag: K;
}

var detailedItem: DetailedDropdown<number> = {
  value: 123,
  title: "123",
  tag: 123,
};
