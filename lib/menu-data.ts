export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price?: number;
  priceSmall?: number;
  priceLarge?: number;
  priceUnit?: number;
  pricePortion?: number;
  sizeLabels?: { small: string; large: string };
  image?: string;
  isNew?: boolean;
  isPopular?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  icon: string;
  items: MenuItem[];
}

export interface MenuGroup {
  id: string;
  name: string;
  icon: string;
  categories: MenuCategory[];
}

export interface ComboItem {
  id: string;
  name: string;
  description: string;
  items: string[];
  price: number;
  originalPrice: number;
  image?: string;
}

// TATLILAR
export const dessertCategories: MenuCategory[] = [
  {
    id: "klasik-tatlilar",
    name: "Klasik Tatlılar",
    icon: "🍰",
    items: [
      { id: "firin-sutlac", name: "Fırın Sütlaç", price: 220, isPopular: true },
      { id: "kazandibi", name: "Kazandibi", price: 220 },
      { id: "tavukgogsu", name: "Tavukgöğsü", price: 220 },
      { id: "keskul", name: "Keşkül", price: 220 },
      { id: "incirli-muhallebi", name: "İncirli Muhallebi", price: 220, isNew: true },
      { id: "asure", name: "Aşure", price: 220 },
    ],
  },
  {
    id: "cikolatali-tatlilar",
    name: "Belçika Çikolatalı Tatlılar",
    icon: "🍫",
    items: [
      { id: "supangle", name: "Supangle", price: 250 },
      { id: "profiterol", name: "Profiterol", price: 250, isPopular: true },
      { id: "brownie", name: "Brownie", price: 350 },
      { id: "cookie", name: "Cookie", price: 200 },
    ],
  },
  {
    id: "magnolia-cup",
    name: "Magnolialar ve Cuplar",
    icon: "🍓",
    items: [
      { id: "cilekli-cicibebeli", name: "Çilekli & Cicibebeli", price: 250 },
      { id: "muzlu-cicibebeli", name: "Muzlu & Cicibebeli", price: 250 },
      { id: "cilek-cikolata-cup", name: "Çilek Çikolata Cup", price: 300 },
      { id: "oreo-cup", name: "Oreo Cup", price: 300, isPopular: true },
      { id: "orman-meyve-cup", name: "Orman Meyve Cup", price: 300 },
      { id: "lotus-cup", name: "Lotus Cup", price: 380, isNew: true },
      { id: "dubai-cup", name: "Dubai Cup", price: 400, isNew: true },
    ],
  },
  {
    id: "ekler",
    name: "Ekler",
    icon: "🍩",
    items: [
      { id: "kucuk-paris-ekler-adet", name: "Küçük Paris Ekler (Adet)", price: 35 },
      { id: "kucuk-paris-ekler-porsiyon", name: "Küçük Paris Ekler (Porsiyon)", price: 200 },
      { id: "cikolatali-ekler-adet", name: "Çikolatalı Ekler (Adet)", price: 50 },
      { id: "cikolatali-ekler-porsiyon", name: "Çikolatalı Ekler (Porsiyon)", price: 250, isPopular: true },
    ],
  },
  {
    id: "soguk-tatlilar",
    name: "Soğuk Tatlılar",
    icon: "❄️",
    items: [
      { id: "soguk-baklava-kg", name: "Soğuk Baklava (Kg)", price: 900 },
      { id: "soguk-baklava-porsiyon", name: "Soğuk Baklava (Porsiyon)", price: 250, isPopular: true },
      { id: "soguk-kadayif-kg", name: "Soğuk Kadayıf (Kg)", price: 900 },
      { id: "soguk-kadayif-porsiyon", name: "Soğuk Kadayıf (Porsiyon)", price: 250 },
    ],
  },
  {
    id: "trileceler",
    name: "Trileçeler",
    icon: "🍮",
    items: [
      { id: "karamelli-trilece", name: "Karamelli Trileçe", price: 200, isPopular: true },
      { id: "frambuazli-trilece", name: "Frambuazlı Trileçe", price: 200 },
    ],
  },
  {
    id: "spesiyal-tatlilar",
    name: "Spesiyal Tatlılar",
    icon: "🎂",
    items: [
      { id: "fistik-pasta", name: "Fıstık Pasta", price: 450, isNew: true },
      { id: "yaban-mersini-pasta", name: "Yaban Mersini Pasta", price: 350 },
      { id: "karambol", name: "Karambol", price: 300 },
      { id: "limon-pasta", name: "Limon Pasta", price: 340 },
      { id: "cilekli-rulo-pasta", name: "Çilekli Rulo Pasta", price: 300 },
      { id: "tiramisu", name: "Tiramisu", price: 300, isPopular: true },
      { id: "coco-quin-pasta", name: "Coco Quin Pasta", price: 300 },
      { id: "kabak-pasta", name: "Kabak Pasta", price: 400, isNew: true },
      { id: "limonlu-cheesecake", name: "Limonlu Cheesecake", price: 300 },
      { id: "frambuazli-cheesecake", name: "Frambuazlı Cheesecake", price: 320 },
      { id: "san-sebastian", name: "San Sebastian", price: 300, isPopular: true },
      { id: "san-sebastian-cikolatali", name: "San Sebastian (Çikolatalı)", price: 350 },
    ],
  },
];

// KAHVELER
export const coffeeCategories: MenuCategory[] = [
  {
    id: "sicak-kahve",
    name: "Sıcak Kahve",
    icon: "☕",
    items: [
      { id: "espresso", name: "Espresso", priceSmall: 100, priceLarge: 120, sizeLabels: { small: "Küçük", large: "Büyük" } },
      { id: "americano", name: "Americano", priceSmall: 130, priceLarge: 150, sizeLabels: { small: "Küçük", large: "Büyük" } },
      { id: "cafe-latte", name: "Cafe Latte", priceSmall: 140, priceLarge: 160, sizeLabels: { small: "Küçük", large: "Büyük" }, isPopular: true },
      { id: "lotus-latte", name: "Lotus Latte", priceSmall: 160, priceLarge: 180, sizeLabels: { small: "Küçük", large: "Büyük" }, isNew: true },
      { id: "cafe-mocha", name: "Cafe Mocha", priceSmall: 160, priceLarge: 180, sizeLabels: { small: "Küçük", large: "Büyük" } },
      { id: "zebra-mocha", name: "Zebra Mocha", priceSmall: 160, priceLarge: 180, sizeLabels: { small: "Küçük", large: "Büyük" } },
      { id: "white-mocha", name: "White Mocha", priceSmall: 160, priceLarge: 180, sizeLabels: { small: "Küçük", large: "Büyük" } },
      { id: "cappuccino", name: "Cappuccino", priceSmall: 140, priceLarge: 160, sizeLabels: { small: "Küçük", large: "Büyük" }, isPopular: true },
      { id: "filtre-kahve", name: "Filtre Kahve", priceSmall: 100, priceLarge: 120, sizeLabels: { small: "Küçük", large: "Büyük" } },
      { id: "flat-white", name: "Flat White", priceSmall: 150, priceLarge: 160, sizeLabels: { small: "Küçük", large: "Büyük" } },
      { id: "cortado", name: "Cortado", priceSmall: 150, priceLarge: 160, sizeLabels: { small: "Küçük", large: "Büyük" } },
    ],
  },
  {
    id: "alternatif-sicak",
    name: "Alternatif Sıcak",
    icon: "🔥",
    items: [
      { id: "sicak-cikolata", name: "Sıcak Çikolata", priceSmall: 140, priceLarge: 160, sizeLabels: { small: "Küçük", large: "Büyük" }, isPopular: true },
      { id: "beyaz-cikolata", name: "Beyaz Çikolata", priceSmall: 140, priceLarge: 160, sizeLabels: { small: "Küçük", large: "Büyük" } },
      { id: "salep", name: "Salep", priceSmall: 140, priceLarge: 160, sizeLabels: { small: "Küçük", large: "Büyük" } },
      { id: "kahveli-salep", name: "Kahveli Salep", priceSmall: 150, priceLarge: 170, sizeLabels: { small: "Küçük", large: "Büyük" }, isNew: true },
      { id: "lotuslu-salep", name: "Lotuslu Salep", priceSmall: 150, priceLarge: 170, sizeLabels: { small: "Küçük", large: "Büyük" }, isNew: true },
      { id: "chai-tea-latte", name: "Chai Tea Latte", priceSmall: 150, priceLarge: 170, sizeLabels: { small: "Küçük", large: "Büyük" } },
    ],
  },
  {
    id: "soguk-kahve",
    name: "Soğuk Kahve",
    icon: "🧊",
    items: [
      { id: "ice-americano", name: "Ice Americano", priceSmall: 130, priceLarge: 150, sizeLabels: { small: "Küçük", large: "Büyük" } },
      { id: "ice-mocha", name: "Ice Mocha", priceSmall: 160, priceLarge: 180, sizeLabels: { small: "Küçük", large: "Büyük" } },
      { id: "ice-white-mocha", name: "Ice White Mocha", priceSmall: 160, priceLarge: 180, sizeLabels: { small: "Küçük", large: "Büyük" } },
      { id: "ice-latte", name: "Ice Latte", priceSmall: 140, priceLarge: 160, sizeLabels: { small: "Küçük", large: "Büyük" }, isPopular: true },
      { id: "ice-lotus-latte", name: "Ice Lotus Latte", priceSmall: 160, priceLarge: 180, sizeLabels: { small: "Küçük", large: "Büyük" }, isNew: true },
      { id: "ice-zebra-latte", name: "Ice Zebra Latte", priceSmall: 160, priceLarge: 180, sizeLabels: { small: "Küçük", large: "Büyük" } },
    ],
  },
  {
    id: "geleneksel-kahve",
    name: "Geleneksel Kahve",
    icon: "🍵",
    items: [
      { id: "turk-kahvesi", name: "Türk Kahvesi", priceSmall: 100, priceLarge: 140, sizeLabels: { small: "Küçük", large: "Double" }, isPopular: true },
      { id: "menengic-kahvesi", name: "Menengiç Kahvesi", priceSmall: 110, priceLarge: 150, sizeLabels: { small: "Küçük", large: "Double" } },
      { id: "dibek-kahvesi", name: "Dibek Kahvesi", priceSmall: 110, priceLarge: 150, sizeLabels: { small: "Küçük", large: "Double" } },
      { id: "damla-sakizli-turk-kahvesi", name: "Damla Sakızlı Türk Kahvesi", priceSmall: 110, priceLarge: 150, sizeLabels: { small: "Küçük", large: "Double" }, isNew: true },
    ],
  },
];

// ÇAYLAR VE İÇECEKLER
export const drinkCategories: MenuCategory[] = [
  {
    id: "cay",
    name: "Çay",
    icon: "/tea.png",
    items: [
      { id: "cay", name: "Çay", price: 35 },
      { id: "fincan-cay", name: "Fincan Çay", price: 50 },
      { id: "yesil-cay", name: "Yeşil Çay", price: 110 },
      { id: "winter-tea", name: "Winter Tea", price: 110, isNew: true },
      { id: "elma-tarcin", name: "Elma Tarçın", price: 110, isPopular: true },
      { id: "ihlamur", name: "Ihlamur", price: 110 },
      { id: "adacayi", name: "Adaçayı", price: 110 },
      { id: "hibiscus", name: "Hibiscus", price: 110 },
    ],
  },
  {
    id: "soguk-icecek",
    name: "Soğuk İçecek",
    icon: "🥤",
    items: [
      { id: "su", name: "Su", price: 20 },
      { id: "sade-soda", name: "Sade Soda", price: 30 },
    ],
  },
];

// ŞEFIN TAVSİYELERİ
export const chefCombos: ComboItem[] = [
  {
    id: "combo-turk-keyfi",
    name: "Türk Keyfi",
    description: "Geleneksel lezzetlerin buluşması",
    items: ["Türk Kahvesi (Double)", "Fırın Sütlaç"],
    price: 320,
    originalPrice: 360,
  },
  {
    id: "combo-cikolata-aski",
    name: "Çikolata Aşkı",
    description: "Çikolata tutkunları için mükemmel ikili",
    items: ["Cafe Mocha (Büyük)", "Brownie"],
    price: 480,
    originalPrice: 530,
  },
  {
    id: "combo-tatli-mola",
    name: "Tatlı Mola",
    description: "Günün yorgunluğunu atan kombinasyon",
    items: ["Cafe Latte (Büyük)", "San Sebastian"],
    price: 420,
    originalPrice: 460,
  },
  {
    id: "combo-lotus-ruyasi",
    name: "Lotus Rüyası",
    description: "Lotus sevenler için özel",
    items: ["Lotus Latte (Büyük)", "Lotus Cup"],
    price: 520,
    originalPrice: 560,
  },
];

// Tüm grupları bir arada tutan yapı
export const menuGroups: MenuGroup[] = [
  {
    id: "coffees",
    name: "Kahveler",
    icon: "☕",
    categories: coffeeCategories,
  },
  {
    id: "desserts",
    name: "Tatlılar",
    icon: "🍰",
    categories: dessertCategories,
  },
  {
    id: "drinks",
    name: "Çay & İçecek",
    icon: "/tea_2.png",
    categories: drinkCategories,
  },
];
