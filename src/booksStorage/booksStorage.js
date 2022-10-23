const booksStorage = [
  {
    authors: [{
      firstName: "Карл",
      lastName: "Фон Клаузевиц"
    }],
    title: "О войне",
    ISBN: "9785389191150",
    publisher: "Питер",
    publishYear: "2022",
  },
  {
    authors: [{
      firstName: "Кевин",
      lastName: "Хорсли"
    }],
    title: "Безграничная память. Запоминай быстро, помни долго",
    ISBN: "9785446119295",
    publisher: "Азбука",
    publishYear: "2021",
  },
  {
    authors: [{
      firstName: "Дэвид Фостер",
      lastName: "Уоллес"
    }],
    title: "Метла системы",
    ISBN: "9785171133146",
    publisher: "АСТ",
    publishYear: "2022",
  },
  {
    authors: [{
      firstName: "Филип",
      lastName: "Дик"
    }],
    title: "Убик",
    ISBN: "9785699856961",
    publisher: "Э",
    publishYear: "2017",
  },
  {
    authors: [{
      firstName: "Павел",
      lastName: "Басинский"
    }],
    title: "Подлинная история Анны Карениной",
    ISBN: "9785171362393",
    publisher: "АСТ",
    publishYear: "2022",
  },
  {
    authors: [{
      firstName: "Лев",
      lastName: "Толстой"
    }],
    title: "Анна Каренина",
    ISBN: "9785171123819",
    publisher: "АСТ",
    publishYear: "2021",
  },
  {
    authors: [{
      firstName: "Рэй",
      lastName: "Брэдбери"
    }],
    title: "Передай добро по кругу. Рассказы, повесть",
    ISBN: "-",
    publisher: "Молодая гвардия",
    publishYear: "1982",
  },
  {
    authors: [{
      firstName: "Борис",
      lastName: "Акунин"
    }],
    title: "Не прощаюсь",
    ISBN: "9785815915411",
    publisher: "Захаров",
    publishYear: "2019",
  },
  {
    authors: [{
      firstName: "Борис",
      lastName: "Акунин"
    }],
    title: "Планета Вода",
    ISBN: "9785815916357",
    publisher: "Захаров",
    publishYear: "2021",
  },
  {
    authors: [{
      firstName: "Борис",
      lastName: "Акунин"
    }],
    title: "Нефритовые четки",
    ISBN: "9785815916500",
    publisher: "Захаров",
    publishYear: "2022",
  },
  {
    authors: [{
      firstName: "Борис",
      lastName: "Акунин"
    }],
    title: "Статский советник",
    ISBN: "9785815904668",
    publisher: "Захаров",
    publishYear: "2005",
  },
  {
    authors: [{
      firstName: "Борис",
      lastName: "Акунин"
    }],
    title: "Особые поручения",
    ISBN: "9785815908109",
    publisher: "Захаров",
    publishYear: "2008",
  },
  {
    authors: [{
      firstName: "Борис",
      lastName: "Акунин"
    }],
    title: "Коронация, или последний из романов",
    ISBN: "9785815916739",
    publisher: "Захаров",
    publishYear: "2022",
  },
  {
    authors: [{
      firstName: "Борис",
      lastName: "Акунин"
    }],
    title: "Левиафан",
    ISBN: "9785815916722",
    publisher: "Захаров",
    publishYear: "2022",
  },
  {
    authors: [{
      firstName: "Борис",
      lastName: "Акунин"
    }],
    title: "Турецкий гамбит",
    ISBN: "9785815916685",
    publisher: "Захаров",
    publishYear: "2022",
  },
  {
    authors: [{
      firstName: "Гай",
      lastName: "Дойчер"
    }],
    title: "Сквозь зеркало языка",
    ISBN: "9785171143732",
    publisher: "АСТ",
    publishYear: "2019",
  },
  {
    authors: [{
      firstName: "Йохан",
      lastName: "Хёйзинга"
    }],
    title: "Homo ludens. Человек играющий",
    ISBN: "9785389155657",
    publisher: "Азбука",
    publishYear: "2020",
  },
  {
    authors: [{
      firstName: "Корней",
      lastName: "Чуковский"
    }],
    title: "Высокое искусство",
    ISBN: "9785389104242",
    publisher: "Азбука",
    publishYear: "2019",
  },
  {
    authors: [{
      firstName: "Самуил",
      lastName: "Маршак"
    }],
    title: "Воспитание словом",
    ISBN: "9785389142503",
    publisher: "Азбука",
    publishYear: "2018",
  },
  {
    authors: [{
      firstName: "Константин",
      lastName: "Паустовский"
    }],
    title: "Радость творчества",
    ISBN: "9785389157576",
    publisher: "Азбука",
    publishYear: "2018",
  },
  {
    authors: [{
      firstName: "Нора",
      lastName: "Галь"
    }],
    title: "Слово живое и мертвое",
    ISBN: "9785171126582",
    publisher: "АСТ",
    publishYear: "2020",
  },
  {
    authors: [{
      firstName: "Кирилл",
      lastName: "Егерев"
    }],
    title: "Этой кнопке нужен текст: О UX-писательстве коротко и понятно",
    ISBN: "9785961442113",
    publisher: "Альпина Паблишер",
    publishYear: "2021",
  },
  {
    authors: [{
      firstName: "Е. А.",
      lastName: "Найманова"
    }],
    title: "Немецкий язык. Карманный самоучитель",
    ISBN: "9785947769661",
    publisher: "АСТ-ПРЕСС ШКОЛА",
    publishYear: "2016",
  },
  {
    authors: [{
      firstName: "Лю",
      lastName: "Цысинь"
    }],
    title: "Задача трех тел",
    ISBN: "9785040891122",
    publisher: "Э",
    publishYear: "2017",
  },
  {
    authors: [{
      firstName: "Лю",
      lastName: "Цысинь"
    }],
    title: "Темный лес",
    ISBN: "9785040902941",
    publisher: "Эксмо",
    publishYear: "2022",
  },
  {
    authors: [{
      firstName: "Виктор",
      lastName: "Шейнов"
    }],
    title: "2022",
    ISBN: "9785446113552",
    publisher: "Питер",
    publishYear: "2022",
  },
  {
    authors: [{
      firstName: "Джулиан",
      lastName: "Барнс"
    }],
    title: "Нум времени",
    ISBN: "9785389130364",
    publisher: "Азбука",
    publishYear: "2017",
  },
  {
    authors: [{
      firstName: "Михаил",
      lastName: "Булгаков"
    }],
    title: "Мастер и Маргарита",
    ISBN: "9785041076986",
    publisher: "Эксмо",
    publishYear: "2022",
  },
  {
    authors: [{
      firstName: "Михаил",
      lastName: "Булгаков"
    }],
    title: "Морфий. Повести и рассказы",
    ISBN: "9785041099138",
    publisher: "Эксмо",
    publishYear: "2022",
  },
  {
    authors: [{
      firstName: "Дэн",
      lastName: "Симмонс"
    }],
    title: "Мерзость",
    ISBN: "9785171471583",
    publisher: "АСТ",
    publishYear: "2022",
  },
  {
    authors: [{
      firstName: "Юрий",
      lastName: "Мамлеев"
    }],
    title: "Голос из ничто: рассказы",
    ISBN: "9785171447007",
    publisher: "АСТ",
    publishYear: "2022",
  },
  {
    authors: [{
      firstName: "Роберт",
      lastName: "Хайнлайн"
    }],
    title: "Чужак в стране чужой",
    ISBN: "9785389155244",
    publisher: "Азбука",
    publishYear: "2018",
  },
  {
    authors: [{
      firstName: "Стивен",
      lastName: "Кинг"
    }],
    title: "Доктор Сон",
    ISBN: "9785171181093",
    publisher: "АСТ",
    publishYear: "2019",
  },
  {
    authors: [{
      firstName: "Дэвид Дж.",
      lastName: "Питерсон"
    }],
    title: "Искусство создания языков: от вымершего языка высших классов до наречия кровожадных воинов-кочевников",
    ISBN: "9785171033941",
    publisher: "АСТ",
    publishYear: "2018",
  },
  {
    authors: [
      {
        firstName: "Ирина",
        lastName: "Голуб"
      },
      {
        firstName: "Дитмар",
        lastName: "Розенталь"
      },
    ],
    title: "Занимательная стилистика: Как мы говорим. А как мы пишем!",
    ISBN: "9785171140700",
    publisher: "АСТ",
    publishYear: "2019",
  },
  {
    authors: [{
      firstName: "Станислав",
      lastName: "Зарницкий"
    }],
    title: "Дюрер",
    ISBN: "-",
    publisher: "Молодая гвардия",
    publishYear: "1984",
  },
  {
    authors: [{
      firstName: "Рэй",
      lastName: "Бредбери"
    }],
    title: "Короткие рассказы",
    ISBN: "9785811266555",
    publisher: "АЙРИС-пресс",
    publishYear: "2017",
  },
  {
    authors: [{
      firstName: "Станислав",
      lastName: "Лем"
    }],
    title: "Солярис",
    ISBN: "9785170838998",
    publisher: "АСТ",
    publishYear: "2014",
  },
  {
    authors: [{
      firstName: "Михаил",
      lastName: "Елизаров"
    }],
    title: "Земля",
    ISBN: "97855171185442",
    publisher: "АСТ",
    publishYear: "2021",
  },
  {
    authors: [{
      firstName: "Владимир",
      lastName: "Гиляровский"
    }],
    title: "Москва и москвичи",
    ISBN: "9785386142346",
    publisher: "РИПОЛ классик",
    publishYear: "2021",
  },
  {
    authors: [
      {
        firstName: "Джозефф",
        lastName: "О'Коннор"
      },
      {
        firstName: "Иан",
        lastName: "Макдермот"
      },
    ],
    title: "ИСкусство системного мышления: Необходимые знания о системах и творческом подходе к решению проблем",
    ISBN: "9785961411751",
    publisher: "Альпина Паблишер",
    publishYear: "2019",
  },
  {
    authors: [{
      firstName: "Зигмунд",
      lastName: "Фрейд"
    }],
    title: "Семейный роман невротиков: сборник",
    ISBN: "9785389100206",
    publisher: "Азбука",
    publishYear: "2021",
  },
  {
    authors: [{
      firstName: "Ричард",
      lastName: "Докинз"
    }],
    title: "Бог как иллюзия",
    ISBN: "9785389098183",
    publisher: "Азбука",
    publishYear: "2021",
  },
  {
    authors: [{
      firstName: "Иммануил",
      lastName: "Кант"
    }],
    title: "Доказательство бытия Бога",
    ISBN: "9785171385309",
    publisher: "АСТ",
    publishYear: "2021",
  },
  {
    authors: [{
      firstName: "Питер",
      lastName: "Мейл"
    }],
    title: "Еще один год в Провансе",
    ISBN: "9785389112407",
    publisher: "Азбука",
    publishYear: "2020",
  },
  {
    authors: [{
      firstName: "Тимур",
      lastName: "Валитов"
    }],
    title: "Угловая комната",
    ISBN: "9785171448561",
    publisher: "АСТ",
    publishYear: "2022",
  },
  {
    authors: [{
      firstName: "Антония",
      lastName: "Байетт"
    }],
    title: "Обладать",
    ISBN: "9785389165960",
    publisher: "Азбука",
    publishYear: "2021",
  },
  {
    authors: [{
      firstName: "Квентин",
      lastName: "Тарантино"
    }],
    title: "Однажды в Голлливуде",
    ISBN: "9785604653081",
    publisher: "Individuum",
    publishYear: "2022",
  },
  {
    authors: [{
      firstName: "Владимир",
      lastName: "Набоков"
    }],
    title: "Бледный огонь",
    ISBN: "9785",
    publisher: "АСТ",
    publishYear: "2022",
  },
  {
    authors: [{
      firstName: "Роберт",
      lastName: "Хайнлайн"
    }],
    title: "Дверь в лето",
    ISBN: "9785389130173",
    publisher: "Азбука",
    publishYear: "2022",
  },
  {
    authors: [{
      firstName: "Жозеф",
      lastName: "Бедье"
    }],
    title: "Тристан и Изольда",
    ISBN: "9785907143760",
    publisher: "Аркадия",
    publishYear: "2021",
  },
  {
    authors: [{
      firstName: "Никлас",
      lastName: "Натт-о-Даг"
    }],
    title: "1793",
    ISBN: "9785386121969",
    publisher: "РИПОЛ классик",
    publishYear: "2020",
  },
  {
    authors: [
      {
        firstName: "Николай",
        lastName: "Свечин"
      },
      {
        firstName: "Валерий",
        lastName: "Введинский"
      },
      {
        firstName: "Иван",
        lastName: "Погонин"
      },
    ],
    title: "Повседневная жизнь Петербургской сыскной полоции",
    ISBN: "9785041171247",
    publisher: "Эксмо",
    publishYear: "2021",
  },
];

export default booksStorage;