interface Color01 {
  name: string;
  hex: string;
}

type Color02 = {
  name: string;
  hex: string;
};

const red: Color01 = {
  name: "red",
  hex: "ff0000",
};

const orange: Color02 = {
  name: "orange",
  hex: "ffa500",
};

type MyString = string;
var str: MyString = "hello";

type Todo = { id: number; title: string; doen: boolean };
function getTodo(todo: Todo): void {
  console.log(todo);
}
