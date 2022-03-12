var foo: any;
foo = 20;
foo = "a";
var bar = foo as string;

var divA: HTMLDivElement | null = document.querySelector("#app");
if (divA) {
  console.log(divA.innerText);
}
var divB = document.querySelector("#app") as HTMLDivElement;
console.log(divB.innerText);
