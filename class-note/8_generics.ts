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

function logLengthA<T>(text: T[]): T[] {
  console.log(text.length);
  return text;
}

logLengthA(["hello", "type", "script"]);
