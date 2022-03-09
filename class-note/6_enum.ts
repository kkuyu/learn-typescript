enum Shoes {
  Nike,
  Adidas,
}

let myShoes = Shoes.Nike;
console.log(myShoes); // 0

enum Brand {
  Nike = "나이키",
  Adidas = "아디다스",
}

var myBrand = Brand.Nike;
console.log(myBrand); // '나이키'

enum Answer {
  Yes = "Y",
  No = "N",
}

function askQuestion(answer: Answer): boolean {
  if (answer === Answer.Yes) {
    return true;
  }
  if (answer === Answer.No) {
    return false;
  }
}

askQuestion(Answer.Yes);
