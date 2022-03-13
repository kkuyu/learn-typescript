interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
  any: object;
}

function fetchProducts(): Promise<Product[]> {}

type ShoppingItem = Pick<Product, "id" | "name" | "price">;
function displayProductDetail(shoppingItem: ShoppingItem) {}
