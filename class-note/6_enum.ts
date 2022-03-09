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
