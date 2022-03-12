interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return {
    name: "joy",
    age: 10,
    skill: "js",
  };
}

var joy = introduce();
console.log(joy.name);

if ((joy as Developer).skill) {
  var skill = (joy as Developer).skill;
  console.log(skill);
} else if ((joy as Person).age) {
  var age = (joy as Person).age;
  console.log(age);
}
