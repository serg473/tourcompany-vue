import { defineStore } from "pinia";

export const useTourStore = defineStore("tourcompany", {
  state: () => ({
    toursData: [
      {
        id: 1,
        country: "Италия",
        city: "Венеция",
        preview: "dana-andreea-gheorghe.webp",
        date: "12-18 октября",
        term: "9",
        price: "25000",
      },
      {
        id: 2,
        country: "Турция",
        city: "Каппадокия",
        preview: "bechir-kaddech.webp",
        date: "16-30 сентября",
        term: "14",
        price: "95000",
      },
      {
        id: 3,
        country: "Италия",
        city: "Рим",
        preview: "francesco-bianco.webp",
        date: "10-15 ноября",
        term: "5",
        price: "80000",
      },
      {
        id: 4,
        country: "ОАЭ",
        city: "Дубай",
        preview: "darcey-beau.webp",
        date: "12-18 октября",
        term: "9",
        price: "25000",
      },
    ],
    favouriteTour: [
      {
        id: 1,
        name: "Villa Flori Como",
        raiting: 5,
        preview: "oswald-elsaboath.webp",
      },
      {
        id: 2,
        name: "Ritz-Carlton",
        raiting: 4.9,
        preview: "manuel-moreno.webp",
      },
      {
        id: 3,
        name: "Ikos Dassia",
        raiting: 4.8,
        preview: "edvin-johansson.webp",
      },
    ],
  }),
});
