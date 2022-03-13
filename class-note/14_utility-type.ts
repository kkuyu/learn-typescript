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

interface AddressBook {
  name: string;
  phone: number;
  address: string;
  company: string;
}

const phoneBook: Omit<AddressBook, "address"> = {
  name: "재택근무",
  phone: 12342223333,
  company: "내 방",
};

const chingtao: Omit<AddressBook, "address" | "company"> = {
  name: "중국집",
  phone: 44455557777,
};

interface Address {
  email: string;
  address: string;
}

type MayHaveEmail = Partial<Address>;
const me: MayHaveEmail = {};
const you: MayHaveEmail = { email: "test@abc.com" };
const all: MayHaveEmail = { email: "capt@hero.com", address: "Pangyo" };

interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}

interface MoreUserProfileA {
  username?: string;
  email?: string;
  profilePhotoUrl?: string;
}

type MoreUserProfileB = {
  username?: UserProfile["username"];
  email?: UserProfile["email"];
  profilePhotoUrl?: UserProfile["profilePhotoUrl"];
};

type MoreUserProfileC = {
  [p in "username" | "email" | "profilePhotoUrl"]?: UserProfile[p];
};

type MoreUserProfileD = {
  [p in keyof UserProfile]?: UserProfile[p];
};

type MoreUserProfileE<T> = {
  [p in keyof T]?: T[p]; // same as Partial
};
