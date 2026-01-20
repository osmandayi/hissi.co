export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  isNew?: boolean;
  isPopular?: boolean;
}

export interface ComboItem {
  id: string;
  name: string;
  description: string;
  items: string[];
  price: number;
  originalPrice: number;
  image: string;
}

export const coffeeItems: MenuItem[] = [
  {
    id: "turkish-coffee",
    name: "Türk Kahvesi",
    description: "Geleneksel yöntemle pişirilen, köpüklü ve yoğun aromalı kahvemiz",
    price: 45,
    image: "/images/turkish-coffee.jpg",
    isPopular: true,
  },
  {
    id: "espresso",
    name: "Espresso",
    description: "Yoğun ve zengin kremalı tek shot espresso",
    price: 40,
    image: "/images/espresso.jpg",
  },
  {
    id: "latte",
    name: "Latte",
    description: "Kadifemsi süt köpüğü ile buluşan espresso",
    price: 55,
    image: "/images/latte.jpg",
    isNew: true,
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    description: "Eşit oranda espresso, buharla ısıtılmış süt ve köpük",
    price: 55,
    image: "/images/cappuccino.jpg",
    isPopular: true,
  },
  {
    id: "americano",
    name: "Americano",
    description: "Sıcak su ile seyreltilmiş double espresso",
    price: 45,
    image: "/images/espresso.jpg",
  },
  {
    id: "mocha",
    name: "Mocha",
    description: "Çikolata sosu, espresso ve buharlı süt karışımı",
    price: 60,
    image: "/images/latte.jpg",
  },
];

export const dessertItems: MenuItem[] = [
  {
    id: "cheesecake",
    name: "San Sebastian Cheesecake",
    description: "Karamelize üstü ile kremsi dokulu cheesecake",
    price: 85,
    image: "/images/cheesecake.jpg",
    isPopular: true,
  },
  {
    id: "brownie",
    name: "Brownie",
    description: "Cevizli, ıslak dokulu el yapımı brownie",
    price: 65,
    image: "/images/brownie.jpg",
    isNew: true,
  },
  {
    id: "tiramisu",
    name: "Tiramisu",
    description: "Mascarpone peyniri ve espresso ile hazırlanan İtalyan klasiği",
    price: 80,
    image: "/images/tiramisu.jpg",
    isPopular: true,
  },
  {
    id: "baklava",
    name: "Antep Baklavası",
    description: "Fıstıklı, ince yufkalı geleneksel baklava (4 adet)",
    price: 90,
    image: "/images/baklava.jpg",
  },
  {
    id: "cookie",
    name: "Çikolatalı Cookie",
    description: "Yumuşak dokulu, bol çikolata parçacıklı cookie",
    price: 45,
    image: "/images/brownie.jpg",
  },
  {
    id: "magnolia",
    name: "Magnolia",
    description: "Bisküvi tabanı üzerine hafif kremalı tatlı",
    price: 70,
    image: "/images/cheesecake.jpg",
  },
];

export const chefCombos: ComboItem[] = [
  {
    id: "combo-turkish",
    name: "Osmanlı Keyfi",
    description: "Türk kahvesi ile geleneksel baklavanın mükemmel uyumu",
    items: ["Türk Kahvesi", "Antep Baklavası (2 adet)"],
    price: 110,
    originalPrice: 135,
    image: "/images/combo-turkish.jpg",
  },
  {
    id: "combo-latte",
    name: "Tatlı Mola",
    description: "Latte ve cheesecake ile kendinize bir mola verin",
    items: ["Latte", "San Sebastian Cheesecake"],
    price: 120,
    originalPrice: 140,
    image: "/images/combo-latte.jpg",
  },
  {
    id: "combo-espresso",
    name: "Çikolata Aşkı",
    description: "Espresso ve brownie ile yoğun çikolata deneyimi",
    items: ["Double Espresso", "Brownie"],
    price: 95,
    originalPrice: 115,
    image: "/images/brownie.jpg",
  },
];
