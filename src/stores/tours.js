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
    comments: [
      {
        id: 1,
        avatar: "image.jpg",
        from: "Мария С. из Москвы",
        where: "Летала в Париж 20.07.23 в отель Ritz-Carlton ",
        description:
          "Невероятное путешествие!Спасибо за организацию моей поездки в Париж. Все было просто идеально - от отелей до экскурсий. Не могу дождаться следующего приключения с вашей турфирмой!",
      },
      {
        id: 2,
        avatar: "angelo-pantazis.jpg",
        from: "Александр Г. из Санкт-Петербурга",
        where:
          "Летал в Тайланд 10.05.23 в отель The Silver Palm Wellness Resort",
        description:
          "Путешествие в Таиланд оказалось невероятным благодаря вашим услугам. Профессиональное планирование, отличные рекомендации по местам для посещения и великолепный выбор отелей. Обязательно вернусь к вам снова.",
      },
      {
        id: 3,
        avatar: "shifaaz-shamoon.jpg",
        from: "Екатерина Л. из Екатеринбурга",
        where: "Летала на Бали 12.08.23 в отель Hanging Gardens",
        description:
          "Спасибо за незабываемый отдых на Бали! Все было под контролем, начиная с бронирования и заканчивая возвращением домой. Отличная коммуникация и внимание к деталям создали идеальное путешествие.F",
      },
      {
        id: 4,
        avatar: "henri-meilhac.jpg",
        from: "Ольга И. из Новосибирска",
        where:
          "Летала в Японию 02.08.23 в отели Nishimuraya Honkan и Four Seasons Hotel Kyoto",
        description:
          "Ваша турфирма стала моим надежным проводником в мир :) После поездки в Японию я почувствовала себя настоящим путешественником. Отличная организация, забота о клиентах и интересные маршруты делают вас лучшими! Большое спасибо!",
      },
    ],
  }),
});
