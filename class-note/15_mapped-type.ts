type Heroes = "Hulk" | "Thor" | "Capt";
type HeroAges = {
  [K in Heroes]: number;
};

const ages: HeroAges = {
  Hulk: 10,
  Capt: 11,
  Thor: 12,
};
