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
