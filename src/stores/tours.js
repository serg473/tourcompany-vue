import { defineStore } from "pinia";

export const useTourStore = defineStore("tourcompany", {
  state: () => ({
    toursData: [
      {
        id: 1,
        country: "Италия",
        city: "Венеция",
        preview: "../assets/img/dana-andreea-gheorghe.webp",
        date: "12-18 октября",
        term: "9",
        price: "25000",
      },
      {
        id: 2,
        country: "Турция",
        city: "Каппадокия",
        preview: "../assets/img/bechir-kaddech.webp",
        date: "16-30 сентября",
        term: "14",
        price: "95000",
      },
      {
        id: 3,
        country: "Италия",
        city: "Рим",
        preview: "../assets/img/francesco-bianco.webp",
        date: "10-15 ноября",
        term: "5",
        price: "80000",
      },
      {
        id: 4,
        country: "ОАЭ",
        city: "Дубай",
        preview: "../assets/img/darcey-beau.webp",
        date: "12-18 октября",
        term: "9",
        price: "25000",
      },
    ],
  }),
});
