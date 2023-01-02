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
    ISBN: "",
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
    title: "Говорить \"нет\", не испытывая чувства вины",
    ISBN: "9785446113552",
    publisher: "Питер",
    publishYear: "2022",
  },
  {
    authors: [{
      firstName: "Джулиан",
      lastName: "Барнс"
    }],
    title: "Шум времени",
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
    ISBN: "",
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
    title: "Искусство системного мышления: Необходимые знания о системах и творческом подходе к решению проблем",
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
    title: "Повседневная жизнь Петербургской сыскной полиции",
    ISBN: "9785041171247",
    publisher: "Эксмо",
    publishYear: "2021",
  },
  {
    authors: [
      {
        firstName: "Хауэрд Ф.",
        lastName: "Лавкрафт"
      },
    ],
    title: "По ту сторону сна",
    translator: "В. Бернацкой",
    ISBN: "S860800010",
    publisher: "Петербург: Terra Incognito",
    publishYear: "1991",
  },
  {
    authors: [
      {
        firstName: "Патрисия",
        lastName: "Мойес"
      },
    ],
    title: "Призрак убийства",
    ISBN: "9785171161941",
    publisher: "АСТ",
    publishYear: "2019",
  },
  {
    authors: [
      {
        firstName: "Юрий",
        lastName: "Чабан"
      },
    ],
    title: "Современный сборник типовых договоров с комментариями",
    ISBN: "5797800063",
    publisher: "Торговый дом Герда",
    publishYear: "1998",
  },
  {
    authors: [
      {
        firstName: "Владимир Валентинович",
        lastName: "Зотов"
      },
      {
        firstName: "Леонтий Алексеевич",
        lastName: "Мигунов"
      },
    ],
    title: "Пособие оператора электронно-вычислительных машин",
    ISBN: "5060018822",
    publisher: "Высшая школа",
    publishYear: "1993",
  },
  {
    authors: [
      {
        firstName: "Геннадий Вадимович",
        lastName: "Зеленко"
      },
      {
        firstName: "Виктор Васильевич",
        lastName: "Панов"
      },
      {
        firstName: "Сергей Николаевич",
        lastName: "Попов"
      },
    ],
    title: "Домашний компьютер",
    ISBN: "5256003127",
    publisher: "Радио и связь",
    publishYear: "1989",
  },
  {
    authors: [
      {
        firstName: "Виталий Михайлович",
        lastName: "Виноградов"
      },
    ],
    title: "Технология Машиностроения: Введение в специальность",
    ISBN: "9785769555909",
    publisher: "Академия",
    publishYear: "2008",
  },
  {
    authors: [
      {
        firstName: "Дэн",
        lastName: "Ричардсон"
      },
    ],
    title: "ROUGH GUIDE. Санкт-Петербург",
    ISBN: "9785170454150",
    translator: "М. Я. Беньковская",
    publisher: "АСТ. Астрель",
    publishYear: "2009",
  },
  {
    authors: [
      {
        firstName: "Министерство",
        lastName: "связи"
      },
    ],
    title: "Краткий телефонный справочник",
    ISBN: "",
    translator: "",
    publisher: "Ленинградская городская телефонная сеть",
    publishYear: "1976",
  },
  {
    authors: [
      {
        firstName: "Инна Александровна",
        lastName: "Розенсон"
      },
    ],
    title: "Основы теории дизайна: Учебник для вузов",
    ISBN: "9785496000192",
    translator: "",
    publisher: "Питер",
    publishYear: "2013",
  },
  {
    authors: [
      {
        firstName: "Стивен",
        lastName: "Фрай"
      },
    ],
    title: "Теннисные мячики небес",
    ISBN: "9785699534531",
    translator: "Сергей Ильин",
    publisher: "Эксмо",
    publishYear: "2012",
  },
  {
    authors: [
      {
        firstName: "Катерина",
        lastName: "Даймонд"
      },
    ],
    title: "Учитель",
    ISBN: "9785171199418",
    translator: "Т. А. Осина",
    publisher: "АСТ",
    publishYear: "2020",
  },
  {
    authors: [
      {
        firstName: "Алан",
        lastName: "Брэдли"
      },
    ],
    title: "Сорняк, обвивший сумку палача",
    ISBN: "9785271415524",
    translator: "Елена Измайлова",
    publisher: "Владимир",
    publishYear: "2012",
  },
  {
    authors: [
      {
        firstName: "Роберт",
        lastName: "Гэлбрейт"
      },
    ],
    title: "Зов кукушки",
    ISBN: "9785389094758",
    translator: "Елена Петрова",
    publisher: "Азбука",
    publishYear: "2019",
  },
  {
    authors: [
      {
        firstName: "",
        lastName: ""
      },
    ],
    title: "Англо-русский и русско-английский словарь для школьников",
    ISBN: "5770770562",
    translator: "",
    publisher: "Аконит",
    publishYear: "1996",
  },
  {
    authors: [
      {
        firstName: "Адриана",
        lastName: "Ригутти"
      },
    ],
    title: "Космос. Иллюстрированный путеводитель по звездному небу",
    ISBN: "9785991010177",
    translator: "Антон Шигимага",
    publisher: "Клуб семейного досуга",
    publishYear: "2010",
  },
  {
    authors: [
      {
        firstName: "Людмила Максимовна",
        lastName: "Фёдорова"
      },
      {
        firstName: "Сергей Николаевич",
        lastName: "Никитаев"
      },
    ],
    title: "Деловой английский для аспирантов-юристов",
    ISBN: "5472015537",
    translator: "",
    publisher: "Экзамен",
    publishYear: "2006",
  },
  {
    authors: [
      {
        firstName: "Жиль",
        lastName: "Делёз"
      },
    ],
    title: "Кино",
    ISBN: "9785911034641",
    translator: "Борис Скуратов",
    publisher: "Ад Маргинем Пресс, Музей соверменного искусства \"Гараж\"",
    publishYear: "2020",
  },
  {
    authors: [
      {
        firstName: "Джон Р.Р.",
        lastName: "Толкин"
      },
    ],
    title: "Неоконченные предания Нуменора и Средиземья",
    ISBN: "9785171017231",
    translator: "Анна Хромовая",
    publisher: "АСТ",
    publishYear: "2020",
  },
  {
    authors: [
      {
        firstName: "Джон Р.Р.",
        lastName: "Толкин"
      },
    ],
    title: "Братство кольца",
    ISBN: "9785170818020",
    translator: "Наталия Григорьева, Владимир Грушецкий",
    publisher: "АСТ",
    publishYear: "2014",
  },
  {
    authors: [
      {
        firstName: "Джон Р.Р.",
        lastName: "Толкин"
      },
    ],
    title: "Две крепости",
    ISBN: "9785170818037",
    translator: "Наталия Григорьева, Владимир Грушецкий",
    publisher: "АСТ",
    publishYear: "2014",
  },
  {
    authors: [
      {
        firstName: "",
        lastName: ""
      },
    ],
    title: "LEXT-справочник. Уголовный кодекс Российской Федерации по состоянию на 1 декабря 2010 года",
    ISBN: "9785699464692",
    translator: "",
    publisher: "Эксмо",
    publishYear: "2010",
  },
  {
    authors: [
      {
        firstName: "",
        lastName: ""
      },
    ],
    title: "LEXT-справочник. Уголовно-исполнительный кодекс Российской Федерации по состоянию на 2010 год",
    ISBN: "9785699437702",
    translator: "",
    publisher: "Эксмо",
    publishYear: "2010",
  },
  {
    authors: [
      {
        firstName: "",
        lastName: ""
      },
    ],
    title: "LEXT-справочник. Уголовно-процессуальный кодекс Российской Федерации по состоянию на 1 декабря 2010 года",
    ISBN: "9785699464715",
    translator: "",
    publisher: "Эксмо",
    publishYear: "2010",
  },
  {
    authors: [
      {
        firstName: "Аллан",
        lastName: "Пиз"
      },
      {
        firstName: "Барбара",
        lastName: "Пиз"
      },
    ],
    title: "Новый язык телодвижений. Расширенная версия",
    ISBN: "9785699118724",
    translator: "Т. Новикова",
    publisher: "Эксмо",
    publishYear: "2012",
  },
  {
    authors: [
      {
        firstName: "Ю. И.",
        lastName: "Филиппов"
      },
      {
        firstName: "А. Г.",
        lastName: "Придатко"
      },
      {
        firstName: "А. Н.",
        lastName: "Елисеев"
      },
      {
        firstName: "В. А.",
        lastName: "Лукьяновский"
      },
      {
        firstName: "Е. П.",
        lastName: "Копенкин"
      },
      {
        firstName: "М. С.",
        lastName: "Борисов"
      },
      {
        firstName: "А. И.",
        lastName: "Белых"
      },
      {
        firstName: "Ю. И.",
        lastName: "Минусаев"
      },
      {
        firstName: "Ф. И.",
        lastName: "Василевич"
      },
    ],
    title: "Домашние кошки",
    ISBN: "5260003144",
    translator: "",
    publisher: "Росагропромиздат",
    publishYear: "1991",
  },
  {
    authors: [
      {
        firstName: "Дейл",
        lastName: "Карнеги"
      },
    ],
    title: "Как завоевывать друзей и оказывать влияние на людей...",
    ISBN: "9856165164",
    translator: "Д. С. Лободенко",
    publisher: "СЛК",
    publishYear: "1997",
  },
  {
    authors: [
      {
        firstName: "О. К.",
        lastName: "Петренко"
      },
    ],
    title: "Англо-русский словарь по ядерным взрывам",
    ISBN: "",
    translator: "",
    publisher: "Воениздат",
    publishYear: "1977",
  },
  {
    authors: [
      {
        firstName: "Уильям",
        lastName: "Шекспир"
      },
    ],
    title: "Том II",
    ISBN: "",
    translator: "А. Кронеберг, А. Дружинин, П. Вейнберг, А. Григорьев, П. Козлов",
    publisher: "РООСА",
    publishYear: "",
  },
  {
    authors: [
      {
        firstName: "Александр",
        lastName: "Иликаев"
      },
    ],
    title: "Большая книга славянских мифов",
    ISBN: "9785041019037",
    translator: "",
    publisher: "Эксмо",
    publishYear: "2022",
  },
  {
    authors: [
      {
        firstName: "Стивен",
        lastName: "Холзнер"
      },
    ],
    title: "Visual C++ 6: учебный курс",
    ISBN: "5804600532",
    translator: "Е. Матвеев",
    publisher: "Питер",
    publishYear: "2001",
  },
  {
    authors: [
      {
        firstName: "Александр",
        lastName: "Аузан"
      },
    ],
    title: "Институционная экономика для чайников",
    ISBN: "",
    translator: "",
    publisher: "Esquire",
    publishYear: "2011",
  },
  {
    authors: [
      {
        firstName: "Сергей Владимирович",
        lastName: "Глушаков"
      },
      {
        firstName: "Александр Викторович",
        lastName: "Коваль"
      },
      {
        firstName: "Сергей Александрович",
        lastName: "Черепнин"
      },
    ],
    title: "Программирование на Visual C++",
    ISBN: "517007333X",
    translator: "",
    publisher: "АСТ",
    publishYear: "2003",
  },
  {
    authors: [
      {
        firstName: "Сергей Иванович",
        lastName: "Федоров"
      },
    ],
    title: "Марьино",
    ISBN: "5268004131",
    translator: "",
    publisher: "Советская Россия",
    publishYear: "1989",
  },
  {
    authors: [
      {
        firstName: "Юрий",
        lastName: "Ревич"
      },
    ],
    title: "Практическое программирование микроконтроллеров Atmel AVR на языке ассемблера",
    ISBN: "9785977506571",
    translator: "",
    publisher: "БХВ-Петербург",
    publishYear: "2012",
  },
  {
    authors: [
      {
        firstName: "Всеволод Борисович",
        lastName: "Иванов"
      },
    ],
    title: "Программирование микроконтроллеров для начинающих. Визуальное проектирование, язык C, ассемблер",
    ISBN: "9785793105590",
    translator: "",
    publisher: "КОРОНА-ВЕК",
    publishYear: "2010",
  },
  {
    authors: [
      {
        firstName: "Марсель",
        lastName: "Паке"
      },
    ],
    title: "Магритт",
    ISBN: "9785404002423",
    translator: "С. С. Лосев, Н. А. Тихонова",
    publisher: "АРТ-РОДНИК",
    publishYear: "2012",
  },
  {
    authors: [
      {
        firstName: "Кобо",
        lastName: "Абэ"
      },
    ],
    title: "Чужое лицо | Женщина в песках",
    ISBN: "9785367023435",
    translator: "В. С. Гривнин",
    publisher: "Амфора",
    publishYear: "2012",
  },
  {
    authors: [
      {
        firstName: "Питер",
        lastName: "Мейл"
      },
    ],
    title: "Год в Провансе",
    ISBN: "9785389083578",
    translator: "Ирина Пандер",
    publisher: "Азбука",
    publishYear: "2020",
  },
  {
    authors: [
      {
        firstName: "Анатолий Васильевич",
        lastName: "Митяев"
      },
    ],
    title: "Тысяча четыреста восемнадцать дней",
    ISBN: "",
    translator: "",
    publisher: "Детская литература",
    publishYear: "1987",
  },
  {
    authors: [
      {
        firstName: "Сергей",
        lastName: "Зотов"
      },
    ],
    title: "Манускрипт Войнича",
    ISBN: "9785171021443",
    translator: "",
    publisher: "АСТ",
    publishYear: "2021",
  },
  {
    authors: [
      {
        firstName: "Вильям",
        lastName: "Теккерей"
      },
    ],
    title: "Ярмарка тщеславия. Том 2",
    ISBN: "",
    translator: "Р. М. Гальперинаб М. Ф. Лорие",
    publisher: "Государственное издательство художественной литературы",
    publishYear: "1953",
  },
  {
    authors: [
      {
        firstName: "Джеймс",
        lastName: "Джойс"
      },
    ],
    title: "Улисс",
    ISBN: "5250021816",
    translator: "В. Хинкис, С. Хоружий",
    publisher: "Республика",
    publishYear: "1993",
  },
  {
    authors: [
      {
        firstName: "Эдгар",
        lastName: "Берроуз"
      },
    ],
    title: "Боги на Марсе",
    ISBN: "5855050106",
    translator: "Э. К. Бродерсон",
    publisher: "ЛИК",
    publishYear: "1992",
  },
  {
    authors: [
      {
        firstName: "Питер",
        lastName: "Мейл"
      },
    ],
    title: "Прованс навсегда",
    ISBN: "9785389101418",
    translator: "Юрий Балаян",
    publisher: "Азбука",
    publishYear: "2019",
  },
  {
    authors: [
      {
        firstName: "Питер",
        lastName: "Мейл"
      },
    ],
    title: "Мои двадцать пять лет в Провансе",
    ISBN: "9785389173590",
    translator: "Нина Жутовская",
    publisher: "Азбука",
    publishYear: "2020",
  },
  {
    authors: [
      {
        firstName: "Роберт",
        lastName: "Хайнлайн"
      },
    ],
    title: "Неприятная профессия Джонатана Хога",
    ISBN: "9785040975518",
    translator: "М. Пчелинцев",
    publisher: "Эксмо",
    publishYear: "2018",
  },
  {
    authors: [
      {
        firstName: "Дэн",
        lastName: "Симмонс"
      },
    ],
    title: "Друд, или Человек в черном",
    ISBN: "9785389127371",
    translator: "Мария Куренная",
    publisher: "Азбука",
    publishYear: "2017",
  },
  {
    authors: [
      {
        firstName: "Дэн",
        lastName: "Симмонс"
      },
    ],
    title: "Пятое сердце",
    ISBN: "9785389138711",
    translator: "Елена Доброхотова-Майкова",
    publisher: "Азбука",
    publishYear: "2018",
  },
  {
    authors: [
      {
        firstName: "Роджер",
        lastName: "Желязны"
      },
    ],
    title: "Хроники Амбера",
    ISBN: "9785699067787",
    translator: "И. Тогоева, Ю. Соколов, Н. Сосновская, А. Пчелинцев, М. Пчелинцев, В. Гольдич, И. Оганесова, Н. Белякова, М. Гутов, Е. Доброхотова-Майкова, Е. Волковыский",
    publisher: "Эксмо",
    publishYear: "2015",
  },
  {
    authors: [
      {
        firstName: "Константин Михайлович",
        lastName: "Симонов"
      },
    ],
    title: "Двадцать дней без войны",
    ISBN: "9785389077133",
    translator: "",
    publisher: "Азбука",
    publishYear: "2014",
  },
  {
    authors: [
      {
        firstName: "Кирстен",
        lastName: "Брэдбери"
      },
    ],
    title: "Дали",
    ISBN: "9785170490011",
    translator: "О. Ф. Иоффе",
    publisher: "АСТ",
    publishYear: "2011",
  },
  {
    authors: [
      {
        firstName: "Борис",
        lastName: "Иванов"
      },
    ],
    title: "Введение в японскую анимацию",
    ISBN: "5901631013",
    translator: "",
    publisher: "Эйзенштейновский центр исследования кинокультуры",
    publishYear: "2001",
  },
  {
    authors: [
      {
        firstName: "Евгений Иванович",
        lastName: "Замятин"
      },
    ],
    title: "Мы",
    ISBN: "9785170885060",
    translator: "",
    publisher: "АСТ",
    publishYear: "2020",
  },
  {
    authors: [
      {
        firstName: "У",
        lastName: "Чэнъэнь"
      },
    ],
    title: "Сунь Укун - царь обезьян",
    ISBN: "9785389066106",
    translator: "А. Рогачев, И. Смирнов, А. Штейнберг",
    publisher: "Иностранка",
    publishYear: "2014",
  },
  {
    authors: [
      {
        firstName: "Энн",
        lastName: "Маккефри"
      },
    ],
    title: "Полет дракона",
    ISBN: "5835200439",
    translator: "Юрий Барабаш, Михаил Нахмансон",
    publisher: "Северо-Запад",
    publishYear: "1992",
  },
  {
    authors: [
      {
        firstName: "Энн",
        lastName: "Маккефри"
      },
    ],
    title: "Странствия дракона",
    ISBN: "5835200501",
    translator: "Михаил Нахмансон",
    publisher: "Северо-Запад",
    publishYear: "1992",
  },
  {
    authors: [
      {
        firstName: "Энн",
        lastName: "Маккефри"
      },
    ],
    title: "Белый дракон",
    ISBN: "5835201672",
    translator: "Галя Трубицына",
    publisher: "Северо-Запад",
    publishYear: "1993",
  },
  {
    authors: [
      {
        firstName: "Карл",
        lastName: "Маркс"
      },
    ],
    title: "Нищета философии",
    ISBN: "9785699883721",
    translator: "В. Засулич",
    publisher: "Эксмо",
    publishYear: "2019",
  },
  {
    authors: [
      {
        firstName: "Владимир",
        lastName: "Савельев"
      },
    ],
    title: "Статистика и котики",
    ISBN: "9785171082871",
    translator: "",
    publisher: "АСТ",
    publishYear: "2019",
  },
  {
    authors: [
      {
        firstName: "Джордж",
        lastName: "Клейсон"
      },
    ],
    title: "Самый богатый человек в Вавилоне",
    ISBN: "9789851545441",
    translator: "С. Э. Борич",
    publisher: "Попурри",
    publishYear: "2020",
  },
  {
    authors: [
      {
        firstName: "Дэвид",
        lastName: "Смит"
      },
      {
        firstName: "Фил",
        lastName: "Эванс"
      },
    ],
    title: "\"Капитал\" Маркса в комиксах",
    ISBN: "9785699918768",
    translator: "З. Мамедьяров",
    publisher: "Эксмо",
    publishYear: "2019",
  },
  {
    authors: [
      {
        firstName: "Beatrix",
        lastName: "Potter"
      },
    ],
    title: "Peter Hase - Sämtliche Abenteuer",
    ISBN: "9783730601068",
    translator: "",
    publisher: "Anaconda",
    publishYear: "2014",
  },
  {
    authors: [
      {
        firstName: "Леонид Владимирович",
        lastName: "Рожников"
      },
    ],
    title: "Подробный иллюстрированный комментарий к роману в стихах \"Евгений Онегин\"",
    ISBN: "9785392257423",
    translator: "",
    publisher: "Проспект",
    publishYear: "2018",
  },
  {
    authors: [
      {
        firstName: "Эдгар",
        lastName: "По"
      },
    ],
    title: "Рассказы",
    ISBN: "",
    translator: "Р. Облонская, М. Беккер, И. Гуровая, Э. Березина, В. Рогов, Н. Галь, Р. Гальперина, М. Богословская, Р. Померанцева, Е. Суриц, В. Хинкис, А. Старцев, И. Бернштейн, З. Александрова",
    publisher: "Художественная литература",
    publishYear: "1980",
  },
  {
    authors: [
      {
        firstName: "Алексей Петрович",
        lastName: "Павлов"
      },
    ],
    title: "Природа землетрясений и землетрясения в Японии",
    ISBN: "",
    translator: "",
    publisher: "Москва",
    publishYear: "1924",
  },
  {
    authors: [
      {
        firstName: "Михаил Юрьевич",
        lastName: "Лермонтов"
      },
    ],
    title: "Демон",
    ISBN: "",
    translator: "",
    publisher: "Чечено-Ингушское книжное издательство",
    publishYear: "1975",
  },
  {
    authors: [
      {
        firstName: "Фрэнсис Скотт",
        lastName: "Фицджеральд"
      },
    ],
    title: "Избранные произведения том третий",
    ISBN: "5857910056",
    translator: "Много переводчиков",
    publisher: "Сварог",
    publishYear: "1993",
  },
  {
    authors: [
      {
        firstName: "Олесь",
        lastName: "Бенюх"
      },
    ],
    title: "Джун и Марвин",
    ISBN: "",
    translator: "",
    publisher: "Молодая гвардия",
    publishYear: "1980",
  },
  {
    authors: [
      {
        firstName: "Федор Михайлович",
        lastName: "Достоевский"
      },
    ],
    title: "Идиот",
    ISBN: "",
    translator: "",
    publisher: "Государственное издательство художественной литературы",
    publishYear: "1955",
  },
  {
    authors: [
      {
        firstName: "Теодор",
        lastName: "Драйзер"
      },
    ],
    title: "Сестра Керри",
    ISBN: "",
    translator: "",
    publisher: "Государственное издательство художественной литературы Литовской ССР",
    publishYear: "1953",
  },
  {
    authors: [
      {
        firstName: "Дэн",
        lastName: "Симмонс"
      },
    ],
    title: "Террор",
    ISBN: "9785389203426",
    translator: "Мария Куренная",
    publisher: "Азбука",
    publishYear: "2022",
  },
  {
    authors: [
      {
        firstName: "Вильям",
        lastName: "Теккерей"
      },
    ],
    title: "Ярмарка тщеславия. Том 1",
    ISBN: "",
    translator: "Р. М. Гальперинаб М. Ф. Лорие",
    publisher: "Государственное издательство художественной литературы",
    publishYear: "1953",
  },
  {
    authors: [
      {
        firstName: "Артур",
        lastName: "Кларк"
      },
    ],
    title: "Лунная пыль. Рассказы",
    ISBN: "",
    translator: "Л. Жданов",
    publisher: "Знание",
    publishYear: "1965",
  },
  {
    authors: [
      {
        firstName: "Александр Иванович",
        lastName: "Куприн"
      },
    ],
    title: "Повести и рассказы",
    ISBN: "",
    translator: "",
    publisher: "Совесткая Россия",
    publishYear: "1987",
  },
  {
    authors: [
      {
        firstName: "Михаил Афанасьевич",
        lastName: "Булгаков"
      },
    ],
    title: "ЖЗЛ. Жизнь господина де Мольера",
    ISBN: "",
    translator: "",
    publisher: "Молодая гвардия",
    publishYear: "1962",
  },
  {
    authors: [
      {
        firstName: "Ева",
        lastName: "Кюри"
      },
    ],
    title: "Мария Кюри",
    ISBN: "",
    translator: "Е. Ф. Корш",
    publisher: "Атомиздат",
    publishYear: "1973",
  },
  {
    authors: [
      {
        firstName: "Владимир Петрович",
        lastName: "Карцев"
      },
    ],
    title: "ЖЗЛ. Кржижановский",
    ISBN: "",
    translator: "",
    publisher: "Молодая гвардия",
    publishYear: "1980",
  },
  {
    authors: [
      {
        firstName: "Уильям Сомерсет",
        lastName: "Моэм"
      },
    ],
    title: "Бремя страстей человеческих",
    ISBN: "",
    translator: "Е. Голышева, Б. Изаков",
    publisher: "Лениздат",
    publishYear: "1984",
  },
  {
    authors: [
      {
        firstName: "Илья",
        lastName: "Ильф"
      },
      {
        firstName: "Евгений",
        lastName: "Петров"
      },
    ],
    title: "Двенадцать стульев; Золотой теленок",
    ISBN: "",
    translator: "",
    publisher: "Мысль",
    publishYear: "1983",
  },
  {
    authors: [
      {
        firstName: "Александр Сергеевич",
        lastName: "Пушкин"
      },
    ],
    title: "Лирика",
    ISBN: "",
    translator: "",
    publisher: "Детская литература",
    publishYear: "1978",
  },
  {
    authors: [
      {
        firstName: "Сонали",
        lastName: "Дераньягала"
      },
    ],
    title: "Волна. О немыслимой потере и исцеляющей силе памяти",
    ISBN: "9785001691846",
    translator: "Мария Сухотина",
    publisher: "Манн, Иванов и Фербер",
    publishYear: "2020",
  },
  {
    authors: [
      {
        firstName: "Ирвин",
        lastName: "Ялом"
      },
    ],
    title: "Все мы творения на день",
    ISBN: "9785041020880",
    translator: "Е. Перова",
    publisher: "Эксмо",
    publishYear: "2021",
  },
  {
    authors: [
      {
        firstName: "Ирвин",
        lastName: "Ялом"
      },
    ],
    title: "Вглядываясь в солнце. Жизнь без страха смерти",
    ISBN: "9785041021221",
    translator: "А. Петренко, Э. Мельник",
    publisher: "Эксмо",
    publishYear: "2021",
  },
  {
    authors: [
      {
        firstName: "Ефрем Павлович",
        lastName: "Левитан"
      },
    ],
    title: "Астрономия. Учебник для 11 класса общеобразовательных учреждений",
    ISBN: "5090049130",
    translator: "",
    publisher: "Просвещение",
    publishYear: "1994",
  },
  {
    authors: [
      {
        firstName: "Дафна",
        lastName: "де Морье"
      },
    ],
    title: "Не позже полуночи. Рассказы",
    ISBN: "5289004467",
    translator: "Много переводчиков",
    publisher: "Лениздат",
    publishYear: "1989",
  },
  {
    authors: [
      {
        firstName: "Владимир Федорович",
        lastName: "Тендряков"
      },
    ],
    title: "Покушение на миражи",
    ISBN: "5265000733",
    translator: "",
    publisher: "Советский писатель",
    publishYear: "1988",
  },
  {
    authors: [
      {
        firstName: "Ник",
        lastName: "Кварри"
      },
      {
        firstName: "Эд",
        lastName: "Макбейн"
      },
      {
        firstName: "Дик",
        lastName: "Френсис"
      },
    ],
    title: "Головоломка. Сборник зарубежных детективов",
    ISBN: "",
    translator: "Аркадий Гершман, Дмитрий Павленко, Михаил Загота",
    publisher: "Книголюб",
    publishYear: "1990",
  },
  {
    authors: [
      {
        firstName: "Айзек",
        lastName: "Азимов"
      },
      {
        firstName: "Джеймс",
        lastName: "Блиш"
      },
      {
        firstName: "Рэй",
        lastName: "Брэдберри"
      },
      {
        firstName: "Мартин",
        lastName: "Гарднер"
      },
      {
        firstName: "Гарри",
        lastName: "Гаррисон"
      },
      {
        firstName: "Артур",
        lastName: "Кларк"
      },
      {
        firstName: "Урсула",
        lastName: "ле Гуин"
      },
      {
        firstName: "Ричард",
        lastName: "Матесон"
      },
      {
        firstName: "Льюис",
        lastName: "Пэджетт"
      },
      {
        firstName: "Артур",
        lastName: "Порджесс"
      },
      {
        firstName: "Эрик",
        lastName: "Рассел"
      },
      {
        firstName: "Клиффорд",
        lastName: "Саймак"
      },
      {
        firstName: "Уильям",
        lastName: "Тэнн"
      },
      {
        firstName: "Роберт",
        lastName: "Шекли"
      },
      {
        firstName: "Джек",
        lastName: "Финней"
      },
      {
        firstName: "Роберт",
        lastName: "Янг"
      },
    ],
    title: "Стрела времению. Сборник научно-фантастичеких рассказов",
    ISBN: "",
    translator: "Много переводчиков",
    publisher: "Правда",
    publishYear: "1989",
  },
  {
    authors: [
      {
        firstName: "Рене",
        lastName: "Менар"
      },
    ],
    title: "Мифы в искусстве старом и новом",
    ISBN: "5289017380",
    translator: "",
    publisher: "Лениздат",
    publishYear: "1994",
  },
  {
    authors: [
      {
        firstName: "Кэролин",
        lastName: "Ларрингтон"
      },
    ],
    title: "Скандинаские мифы. От Тора и Локи до Толкина и \"Игры престолов\"",
    ISBN: "9785001692874",
    translator: "Ольга Чумичева",
    publisher: "Манн, Иванов и Фербер",
    publishYear: "2021",
  },
  {
    authors: [
      {
        firstName: "Владимир",
        lastName: "Плунгян"
      },
    ],
    title: "Почему языки такие разные. Популярная лингвистика",
    ISBN: "9785780512189",
    translator: "",
    publisher: "Русистика",
    publishYear: "2018",
  },
  {
    authors: [
      {
        firstName: "Вениамин Александрович",
        lastName: "Каверин"
      },
    ],
    title: "Два капитана",
    ISBN: "9785433505599",
    translator: "",
    publisher: "Нигма",
    publishYear: "2022",
  },
  {
    authors: [
      {
        firstName: "Терри",
        lastName: "Пратчетт"
      },
    ],
    title: "Творцы заклинаний",
    ISBN: "9785699789115",
    translator: "И. Кравцова, В. Вольфсон",
    publisher: "Эксклюзивное издание",
    publishYear: "2016",
  },
  {
    authors: [
      {
        firstName: "Наталья Николаева",
        lastName: "Мельникова"
      },
    ],
    title: "300 рецептов французской кухни",
    ISBN: "5704200923",
    translator: "",
    publisher: "Прометей",
    publishYear: "1990",
  },
  {
    authors: [
      {
        firstName: "Нагата",
        lastName: "Хироси"
      },
    ],
    title: "История философской мысли Японии",
    ISBN: "5010015900",
    translator: "А. Н. Игнатович, Б. П. Лаврентьев, Т. А. Розанова",
    publisher: "Прогресс",
    publishYear: "1991",
  },
  {
    authors: [
      {
        firstName: "Сергей",
        lastName: "Иванов"
      },
    ],
    title: "В бесконечном лесу и другие истории о 6-м \"В\"",
    ISBN: "5080015365",
    translator: "",
    publisher: "Детская литература",
    publishYear: "1991",
  },
  {
    authors: [
      {
        firstName: "Осип",
        lastName: "Мандельштам"
      },
    ],
    title: "Камень",
    ISBN: "5020280232",
    translator: "",
    publisher: "Наука",
    publishYear: "1990",
  },
  {
    authors: [
      {
        firstName: "Уилки",
        lastName: "Коллинз"
      },
    ],
    title: "Лунный камень",
    ISBN: "5268000306",
    translator: "Мариэтта Шагинян",
    publisher: "Русская книга",
    publishYear: "1992",
  },
  {
    authors: [
      {
        firstName: "Аркадий",
        lastName: "Бухов"
      },
    ],
    title: "Жуки на булавках",
    ISBN: "",
    translator: "",
    publisher: "Художественная литература",
    publishYear: "1971",
  },
  {
    authors: [
      {
        firstName: "Мартти",
        lastName: "Ларни"
      },
    ],
    title: "Рассказы",
    ISBN: "5852300535",
    translator: "В. Богачев",
    publisher: "Прейскурантиздат",
    publishYear: "1991",
  },
  {
    authors: [
      {
        firstName: "Георгий Иванович",
        lastName: "Иванов"
      },
    ],
    title: "Камень-Гром",
    ISBN: "5878970015",
    translator: "",
    publisher: "Стройиздат СпБ",
    publishYear: "1994",
  },
  {
    authors: [
      {
        firstName: "Александр Борисович",
        lastName: "Салтыков"
      },
    ],
    title: "Самое близкое искусство",
    ISBN: "",
    translator: "",
    publisher: "Просвещение",
    publishYear: "1969",
  },
];

export default booksStorage;