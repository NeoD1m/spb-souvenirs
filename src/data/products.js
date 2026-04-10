export const categories = [
  { id: "all", label: "Все" },
  { id: "breloki", label: "Брелоки" },
  { id: "figurki", label: "Фигурки" },
  { id: "steklo", label: "Стекло и посуда" },
  { id: "novogodnie", label: "Новогодние" }
];

export const products = [
  {
    id: "brelok-hram",
    slug: "brelok-hram-spasa-na-krovi",
    title: "Брелок с храмом Спаса на Крови",
    image: "/brelokHramSpasNaKroviSPB.jpg",
    category: "breloki",
    price: 450,
    short: "Металлический брелок с узнаваемым силуэтом храма.",
    description:
      "Компактный сувенир для ключей с детализированным изображением храма Спаса на Крови. Упаковка подарочная по запросу."
  },
  {
    id: "angel",
    slug: "figurka-aleksandrovskiy-angel",
    title: "Фигурка «Александровский ангел»",
    image: "/figurkaAleksandrovskiyAngelSPB.jpg",
    category: "figurki",
    price: 1890,
    short: "Коллекционная фигурка в стиле петербургской скульптуры.",
    description:
      "Подходит для полки, рабочего стола или как подарок ценителям архитектуры Невского проспекта."
  },
  {
    id: "glass",
    slug: "steklyannyj-suvenir-spb",
    title: "Стеклянный сувенир СПб",
    image: "/GlassSpb.jpg",
    category: "steklo",
    price: 1200,
    short: "Прозрачное стекло с городским мотивом.",
    description:
      "Изящный предмет интерьера: переливается на свету, гармонично смотрится на подоконнике или в витрине."
  },
  {
    id: "hram-kartina",
    slug: "hram-spasa-na-krovi-kartina",
    title: "Храм Спаса на Крови",
    image: "/hramSpasaNaKroviSPB.jpg",
    category: "figurki",
    price: 2100,
    short: "Декоративная композиция с видом на храм.",
    description:
      "Яркие цвета и узнаваемый силуэт — отличный подарок гостям города и коллегам из других регионов."
  },
  {
    id: "korushka",
    slug: "korushka-peterburga",
    title: "Корюшка Санкт-Петербурга",
    image: "/KorushkaSPB.jpg",
    category: "figurki",
    price: 990,
    short: "Символ маленькой рыбки — душа петербургской кухни.",
    description:
      "Тематический сувенир к гастрономическим фестивалям и просто для тех, кто любит Неву и местные традиции."
  },
  {
    id: "kot",
    slug: "peterburgskij-kot",
    title: "Петербургский кот",
    image: "/KotSPB.jpg",
    category: "figurki",
    price: 1350,
    short: "Фигурка кота в духе дворов Петербурга.",
    description:
      "Тёплый персонаж для подарка детям и взрослым — напоминание о прогулках по дворам и каналам."
  },
  {
    id: "petr",
    slug: "petr-i-suvenir",
    title: "Памятный сувенир «Пётр I»",
    image: "/Petr1SPB.jpg",
    category: "figurki",
    price: 1650,
    short: "Образ основателя города в коллекционном исполнении.",
    description:
      "Подойдёт для историков, туристов и коллекционеров городской символики."
  },
  {
    id: "sfera",
    slug: "suvenirnaya-sfera-spb",
    title: "Сувенирная сфера СПб",
    image: "/SferaSPB.jpg",
    category: "steklo",
    price: 890,
    short: "Стеклянная сфера с панорамой города.",
    description:
      "Смотрится эффектно на столе при дневном и вечернем свете; стойкая основа в комплекте."
  },
  {
    id: "shar",
    slug: "novogodnij-shar-spb",
    title: "Новогодний шар СПб",
    image: "/SharSPB.jpg",
    category: "novogodnie",
    price: 550,
    short: "Ёлочное украшение с мотивами Петербурга.",
    description:
      "Лёгкий шар для новогодней ёлки или подарка к празднику — упаковка в фирменный пакет."
  },
  {
    id: "tarelka",
    slug: "dekorativnaya-tarelka-spb",
    title: "Декоративная тарелка СПб",
    image: "/TarelkaSPB.jpg",
    category: "steklo",
    price: 2400,
    short: "Настенная тарелка с городским орнаментом.",
    description:
      "Для оформления кухни или гостиной; крепление на стену приобретается отдельно."
  }
];

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}
