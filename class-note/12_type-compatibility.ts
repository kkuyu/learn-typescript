interface Ironman {
  name: string;
}

class Avengers {
  name: string;
}

let i: Ironman;
i = new Avengers();

var add = function (a: number) {};
var sum = function (a: number, b: number) {};

// sum = add;

interface Empty<T> {}

var empty1: Empty<string>;
var empty2: Empty<number>;

// empty1 = empty2;
// empty2 = empty1;

interface NotEmpty<T> {
  data: T;
}

var notEmpty1: NotEmpty<string>;
var notEmpty2: NotEmpty<number>;

// notEmpty1 = notEmpty2
// notEmpty2 = notEmpty1
