function logText<T>(text: T): T {
  return text;
}

logText(10);
logText<string>("hello");

interface Dropdown<T> {
  value: T;
  selected: boolean;
}

const stringObj: Dropdown<string> = {
  value: "abc",
  selected: false,
};

const numberObj: Dropdown<number> = {
  value: 10,
  selected: false,
};

interface LengthType {
  length: number;
}

function logLengthA<T>(text: T[]): T[] {
  console.log(text.length);
  return text;
}

logLengthA(["hello", "type", "script"]);

function logLengthB<T extends LengthType>(text: T): T {
  console.log(text.length);
  return text;
}

logLengthB("joy");
logLengthB(["hello", "type", "script"]);

interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}

getShoppingItemOption("name");
getShoppingItemOption("price");
