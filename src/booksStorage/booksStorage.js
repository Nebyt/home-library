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
      firstName: "Михаил Афанасьевич",
      lastName: "Булгаков"
    }],
    title: "Мастер и Маргарита",
    ISBN: "9785041076986",
    publisher: "Эксмо",
    publishYear: "2022",
  },
  {
    authors: [{
      firstName: "Михаил Афанасьевич",
      lastName: "Булгаков"
    }],
    title: "Морфий. Повести и рассказы",
    ISBN: "9785041099138",
    translator: "",
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
    translator: "Ю. Гольдберг",
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
    title: "ЖЗЛ. Дюрер",
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
      firstName: "Владимир Владимирович",
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
    translator: "Сергей Штерн",
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
  {
    authors: [
      {
        firstName: "Рэй",
        lastName: "Брэдбери"
      },
    ],
    title: "К западу от Октября",
    ISBN: "9785699396863",
    translator: "Елена Петрова",
    publisher: "Эксмо",
    publishYear: "2012",
  },
  {
    authors: [
      {
        firstName: "Рэй",
        lastName: "Брэдбери"
      },
    ],
    title: "Канун дня всех святых",
    ISBN: "978504173109",
    translator: "Арам Оганян",
    publisher: "Эксмо",
    publishYear: "2022",
  },
  {
    authors: [
      {
        firstName: "Элиезер",
        lastName: "Юдковский"
      },
    ],
    title: "Гарри Поттер и методы рационального мышления. Книга первая",
    ISBN: "",
    translator: "Коллектив переводчиков",
    publisher: "ИП \"Самин Михаил Иванович\"",
    publishYear: "2022",
  },
  {
    authors: [
      {
        firstName: "Элиезер",
        lastName: "Юдковский"
      },
    ],
    title: "Гарри Поттер и методы рационального мышления. Книга вторая",
    ISBN: "",
    translator: "Коллектив переводчиков",
    publisher: "ИП \"Самин Михаил Иванович\"",
    publishYear: "2022",
  },
  {
    authors: [
      {
        firstName: "Элиезер",
        lastName: "Юдковский"
      },
    ],
    title: "Гарри Поттер и методы рационального мышления. Книга третья",
    ISBN: "",
    translator: "Коллектив переводчиков",
    publisher: "ИП \"Самин Михаил Иванович\"",
    publishYear: "2022",
  },
  {
    authors: [
      {
        firstName: "Агата",
        lastName: "Кристи"
      },
    ],
    title: "Рождество Эркюля Пуаро",
    ISBN: "9785041060978",
    translator: "Александр Викторович Бушуев",
    publisher: "Эксмо",
    publishYear: "2022",
  },
  {
    authors: [
      {
        firstName: "Владимир Владимирович",
        lastName: "Набоков"
      },
    ],
    title: "Приглашение на казнь",
    ISBN: "9785171378332",
    translator: "",
    publisher: "2022",
    publishYear: "АСТ",
  },
  {
    authors: [
      {
        firstName: "Максим",
        lastName: "Ильяхов"
      },
      {
        firstName: "Людмила",
        lastName: "Сарычева"
      },
    ],
    title: "Пиши, сокращай. Как создавать сильный текст",
    ISBN: "9785961465266",
    translator: "",
    publisher: "Альпина Паблишер",
    publishYear: "2022",
  },
  {
    authors: [
      {
        firstName: "Рид",
        lastName: "Кинг"
      },
    ],
    title: "Ранее известная как Америка",
    ISBN: "978041071820",
    translator: "М. Бондарев",
    publisher: "Эксмо",
    publishYear: "2022",
  },
  {
    authors: [
      {
        firstName: "Николай",
        lastName: "Свечин"
      },
    ],
    title: "Дело Варнавинского маньяка",
    ISBN: "9785041727185",
    translator: "",
    publisher: "Эксмо",
    publishYear: "2022",
  },
  {
    authors: [
      {
        firstName: "Федор Михайлович",
        lastName: "Достоевский"
      },
    ],
    title: "Записки из подполья",
    ISBN: "9785170970186",
    translator: "",
    publisher: "АСТ",
    publishYear: "2021",
  },
  {
    authors: [
      {
        firstName: "Никлас",
        lastName: "Натт-О-Даг"
      },
    ],
    title: "1795",
    ISBN: "9785386145248",
    translator: "Сергей Штерн",
    publisher: "РИПОЛ классик",
    publishYear: "2021",
  },
  {
    authors: [
      {
        firstName: "Никлас",
        lastName: "Натт-О-Даг"
      },
    ],
    title: "1794",
    ISBN: "9785386137328",
    translator: "Сергей Штерн",
    publisher: "РИПОЛ классик",
    publishYear: "2020",
  },
  {
    authors: [
      {
        firstName: "Рагнар",
        lastName: "Йонассон"
      },
    ],
    title: "Снежная слепота",
    ISBN: "9785389199651",
    translator: "Борис Жаров",
    publisher: "Азбука",
    publishYear: "2022",
  },
  {
    authors: [
      {
        firstName: "Рагнар",
        lastName: "Йонассон"
      },
    ],
    title: "Мгла",
    ISBN: "9785389199699",
    translator: "Вадим Грушевский",
    publisher: "Азбука",
    publishYear: "2022",
  },
  {
    authors: [
      {
        firstName: "Рагнар",
        lastName: "Йонассон"
      },
    ],
    title: "Остров",
    ISBN: "9785389207226",
    translator: "Вадим Грушевский",
    publisher: "Азбука",
    publishYear: "2022",
  },
  {
    authors: [
      {
        firstName: "Джулия",
        lastName: "Бойд"
      },
    ],
    title: "Записки из третьего рейха. Жизнь накануне войны глазами обычных туристов",
    ISBN: "9785040987061",
    translator: "А. Андреев",
    publisher: "Эксмо",
    publishYear: "2023",
  },
  {
    authors: [
      {
        firstName: "Ханс",
        lastName: "Фаллада"
      },
    ],
    title: "Один в Берлине (Каждый умирает в одиночку)",
    ISBN: "9785906837042",
    translator: "Нина Федорова",
    publisher: "Синдбад",
    publishYear: "2022",
  },
  {
    authors: [
      {
        firstName: "Ханс",
        lastName: "Фаллада"
      },
    ],
    title: "Кошмар в Берлине",
    ISBN: "9785001310020",
    translator: "Дарья Андреева",
    publisher: "Синдбад",
    publishYear: "2019",
  },
  {
    authors: [
      {
        firstName: "Эрик",
        lastName: "Ларсон"
      },
    ],
    title: "В саду чудовищ. Любовь и террор в гитлеровском Берлине",
    ISBN: "9785961454529",
    translator: "Алексей Капанадзе",
    publisher: "Альпина Паблишер",
    publishYear: "2022",
  },
  {
    authors: [
      {
        firstName: "Александр Романович",
        lastName: "Беляев"
      },
    ],
    title: "Человек-амфибия",
    ISBN: "",
    translator: "",
    publisher: "Карелия",
    publishYear: "1974",
  },
  {
    authors: [
      {
        firstName: "Кормак",
        lastName: "Маккарти"
      },
    ],
    title: "Дорога",
    ISBN: "9785998500435",
    translator: "Юлия Степаненко",
    publisher: "Азбука",
    publishYear: "2010",
  },
  {
    authors: [
      {
        firstName: "Дуглас",
        lastName: "Адамс"
      },
    ],
    title: "Автостопом по галактике. Ресторан \"У конца Вселенной\"",
    ISBN: "9785170324583",
    translator: "В. И. Баканов, В. И. Генкин, С. В. Силакова",
    publisher: "АСТ",
    publishYear: "2013",
  },
  {
    authors: [
      {
        firstName: "Виктор",
        lastName: "Пелевин"
      },
    ],
    title: "Generation \"П\"",
    ISBN: "5956000910",
    translator: "",
    publisher: "Вагриус",
    publishYear: "2003",
  },
  {
    authors: [
      {
        firstName: "Генри",
        lastName: "Форд"
      },
    ],
    title: "Моя жизнь. Мои достижения",
    ISBN: "9785170823468",
    translator: "Е. А. Качелин",
    publisher: "АиФ. Я люблю читать",
    publishYear: "2014",
  },
  {
    authors: [
      {
        firstName: "Грейс",
        lastName: "Келли"
      },
    ],
    title: "Принцесса Монако",
    ISBN: "9785170838141",
    translator: "",
    publisher: "АСТ",
    publishYear: "2014",
  },
  {
    authors: [
      {
        firstName: "Франц",
        lastName: "Кафка"
      },
    ],
    title: "Превращение",
    ISBN: "9785699547937",
    translator: "",
    publisher: "Эксмо",
    publishYear: "2012",
  },
  {
    authors: [
      {
        firstName: "Владлен Тереньтевич",
        lastName: "Логинов"
      },
    ],
    title: "Ленин в 1917 году. На грани возможного",
    ISBN: "9785906880628",
    translator: "",
    publisher: "Алгоритм",
    publishYear: "2016",
  },
  {
    authors: [
      {
        firstName: "Олдос",
        lastName: "Хаксли"
      },
    ],
    title: "Вечная философия",
    ISBN: "9785170796601",
    translator: "Е. Д. Сыромятникова",
    publisher: "АСТ",
    publishYear: "2014",
  },
  {
    authors: [
      {
        firstName: "Дэниел",
        lastName: "Киз"
      },
    ],
    title: "Таинственная история Билли Миллигана",
    ISBN: "9785699432943",
    translator: "А. Бойков, А. Кострова",
    publisher: "Эксмо",
    publishYear: "2012",
  },
  {
    authors: [
      {
        firstName: "Сергей",
        lastName: "Есенин"
      },
    ],
    title: "Собрание сочинений в 2-х томах. Том 2. Стихотворения. Проза. Статьи. Письма",
    ISBN: "5268011537",
    translator: "",
    publisher: "Современник",
    publishYear: "1990",
  },
  {
    authors: [
      {
        firstName: "Борис",
        lastName: "Акунин"
      },
    ],
    title: "Инь и Ян",
    ISBN: "9785815911284",
    translator: "",
    publisher: "Захаров",
    publishYear: "2012",
  },
  {
    authors: [
      {
        firstName: "Herbert George",
        lastName: "Wells"
      },
    ],
    title: "The Invisible Man",
    ISBN: "9785521053919",
    translator: "",
    publisher: "T8RUGRAM",
    publishYear: "2017",
  },
  {
    authors: [
      {
        firstName: "Isaac",
        lastName: "Asimov"
      },
    ],
    title: "I, Robot",
    ISBN: "9785949621813",
    translator: "",
    publisher: "Антология",
    publishYear: "2011",
  },
  {
    authors: [
      {
        firstName: "",
        lastName: ""
      },
    ],
    title: "Три комедии. Сборник сценариев",
    ISBN: "",
    translator: "",
    publisher: "Искусство",
    publishYear: "1969",
  },
  {
    authors: [
      {
        firstName: "Мэтт",
        lastName: "Морган"
      },
    ],
    title: "Реанимация: истории на грании жизни и смерти",
    ISBN: "9785041052904",
    translator: "О. Я. Ляшенко",
    publisher: "Эксмо",
    publishYear: "2020",
  },
  {
    authors: [
      {
        firstName: "Джеймс",
        lastName: "Боуэн"
      },
    ],
    title: "Уличный кот по имени Боб. Как человек и кот обрели надежду на улицах Лондона",
    ISBN: "9785386060947",
    translator: "Е. И. Колябина",
    publisher: "РИПОЛ классик",
    publishYear: "2016",
  },
  {
    authors: [
      {
        firstName: "Стивен",
        lastName: "Хокинг"
      },
    ],
    title: "Краткая история времени. От Большого взрыва до черных дыр",
    ISBN: "9785171022846",
    translator: "Н. Смородинская",
    publisher: "АСТ",
    publishYear: "2018",
  },
  {
    authors: [
      {
        firstName: "Стивен",
        lastName: "Хокинг"
      },
    ],
    title: "Теория всего",
    ISBN: "9785171023409",
    translator: "Е. В. Шимановская",
    publisher: "АСТ",
    publishYear: "2019",
  },
  {
    authors: [
      {
        firstName: "Айзек",
        lastName: "Азимов"
      },
    ],
    title: "Я, робот",
    ISBN: "9785041000141",
    translator: "А. И. Иорданский",
    publisher: "Эксмо",
    publishYear: "2019",
  },
  {
    authors: [
      {
        firstName: "Эрих Мария",
        lastName: "Ремарк"
      },
    ],
    title: "Черный обелиск. Ночь в Лиссабоне",
    ISBN: "9785170311644",
    translator: "В. Станевич, Ю. Плашевский",
    publisher: "АСТ",
    publishYear: "2009",
  },
  {
    authors: [
      {
        firstName: "Стивен",
        lastName: "Кинг"
      },
    ],
    title: "Парень из Колорадо",
    ISBN: "9785170951697",
    translator: "В. Вебер",
    publisher: "АСТ",
    publishYear: "2016",
  },
  {
    authors: [
      {
        firstName: "Чак",
        lastName: "Паланик"
      },
    ],
    title: "Рэнт: Биография Бастера Кейси",
    ISBN: "9785170464920",
    translator: "Е. Мартинкевич",
    publisher: "АСТ",
    publishYear: "2007",
  },
  {
    authors: [
      {
        firstName: "Григорий",
        lastName: "Остер"
      },
    ],
    title: "Сказка с подробностями",
    ISBN: "9785389011052",
    translator: "",
    publisher: "Азбука",
    publishYear: "2012",
  },
  {
    authors: [
      {
        firstName: "Richard",
        lastName: "Strauss"
      },
    ],
    title: "Salome",
    ISBN: "",
    translator: "",
    publisher: "",
    publishYear: "",
  },
  {
    authors: [
      {
        firstName: "Инна Александровна",
        lastName: "Зотова"
      },
    ],
    title: "Покупателю о фотокинотоварах",
    ISBN: "",
    translator: "",
    publisher: "Экономика",
    publishYear: "1987",
  },
  {
    authors: [
      {
        firstName: "Терри",
        lastName: "Пратчетт"
      },
    ],
    title: "Шмяк!",
    ISBN: "9785699685851",
    translator: "В. С. Сергеева",
    publisher: "Эксмо",
    publishYear: "2013",
  },
  {
    authors: [
      {
        firstName: "Терри",
        lastName: "Пратчетт"
      },
    ],
    title: "Посох и шляпа",
    ISBN: "9785699166107",
    translator: "И. Кравцова",
    publisher: "Эксмо",
    publishYear: "2014",
  },
  {
    authors: [
      {
        firstName: "Терри",
        lastName: "Пратчетт"
      },
    ],
    title: "Незримые академики",
    ISBN: "9785699699841",
    translator: "В. С. Сергеева",
    publisher: "Эксмо",
    publishYear: "2014",
  },
  {
    authors: [
      {
        firstName: "Габриэль Гарсиа",
        lastName: "Маркес"
      },
    ],
    title: "Сто лет одиночества",
    ISBN: "9785271346873",
    translator: "М. И. Былинкина",
    publisher: "Астрель",
    publishYear: "2013",
  },
  {
    authors: [
      {
        firstName: "Генри",
        lastName: "Марш"
      },
    ],
    title: "Не навреди. Истории о жизни, смерти, нейрохирургии",
    ISBN: "9785699830206",
    translator: "Иван Чорный",
    publisher: "Эксмо",
    publishYear: "2019",
  },
  {
    authors: [
      {
        firstName: "Адам",
        lastName: "Кей"
      },
    ],
    title: "Будет больно. История врача, ушедшего из профессии на пике карьеры",
    ISBN: "9785040915750",
    translator: "Иван Чорный",
    publisher: "Эксмо",
    publishYear: "2019",
  },
  {
    authors: [
      {
        firstName: "Ричард",
        lastName: "Шеперд"
      },
    ],
    title: "Неестественные причины. Записки судмедэксперта: громкие убийства, ужасающие теракты и запутанные дела",
    ISBN: "9785040991624",
    translator: "Иван Чорный",
    publisher: "Эксмо",
    publishYear: "2019",
  },
  {
    authors: [
      {
        firstName: "Генри",
        lastName: "Марш"
      },
    ],
    title: "Призвание. О выборе, долге и нейрохирургии",
    ISBN: "9785699957347",
    translator: "Иван Чорный",
    publisher: "Э",
    publishYear: "2017",
  },
  {
    authors: [
      {
        firstName: "Пол",
        lastName: "Каланити"
      },
    ],
    title: "Когда дыхание растворяется в воздухе. Иногда судьбе все равно, что ты врач",
    ISBN: "9785699902064",
    translator: "К. В. Банников",
    publisher: "Эксмо",
    publishYear: "2019",
  },
  {
    authors: [
      {
        firstName: "Франц",
        lastName: "Кафка"
      },
    ],
    title: "Лабиринт",
    ISBN: "9785389023819",
    translator: "Юрий Архипов",
    publisher: "Азбука",
    publishYear: "2012",
  },
  {
    authors: [
      {
        firstName: "",
        lastName: ""
      },
    ],
    title: "Махабхарата, или Сказание о великой битве потомков Бхараты",
    ISBN: "9785389045538",
    translator: "М. Пчелицев",
    publisher: "Азбука",
    publishYear: "2012",
  },
  {
    authors: [
      {
        firstName: "",
        lastName: "Вольтер"
      },
    ],
    title: "Философские повести",
    ISBN: "9785389031234",
    translator: "Н. Дмитриев, Ф. Сологуб, Г. Блок",
    publisher: "Азбука",
    publishYear: "2012",
  },
  {
    authors: [
      {
        firstName: "Франц",
        lastName: "Кафка"
      },
    ],
    title: "Как строилась Китайская стена",
    ISBN: "9785389018853",
    translator: "Вера Станевич, Елена Маркович",
    publisher: "Азбука",
    publishYear: "2011",
  },
  {
    authors: [
      {
        firstName: "Миямото",
        lastName: "Мусаси"
      },
    ],
    title: "Искусство самурая. Книга Пяти колец. Трактаты",
    ISBN: "9785389030916",
    translator: "с японского А. Фесюн, с английского А. Никитин",
    publisher: "Азбука",
    publishYear: "2012",
  },
  {
    authors: [
      {
        firstName: "Шарль",
        lastName: "Бодлер"
      },
    ],
    title: "Цветы зла. Стихотворения",
    ISBN: "978538960562",
    translator: "Эллис",
    publisher: "Азбука",
    publishYear: "2013",
  },
  {
    authors: [
      {
        firstName: "Огюст",
        lastName: "Роден"
      },
    ],
    title: "Беседы об искусстве",
    ISBN: "9785389041967",
    translator: "Л. Ефимов, Г. Соловьева",
    publisher: "Азбука",
    publishYear: "2012",
  },
  {
    authors: [
      {
        firstName: "Жан-Жак",
        lastName: "Руссо"
      },
    ],
    title: "Исповедь",
    ISBN: "9785389027206",
    translator: "Н. Бердяев, О. Вайнер",
    publisher: "Азбука",
    publishYear: "2012",
  },
  {
    authors: [
      {
        firstName: "",
        lastName: "Конфуций"
      },
    ],
    title: "Суждения и беседы",
    ISBN: "9785389014619",
    translator: "П. С. Попов",
    publisher: "Азбука",
    publishYear: "2014",
  },
  {
    authors: [
      {
        firstName: "Борис",
        lastName: "Пастернак"
      },
    ],
    title: "Доктор Живаго",
    ISBN: "9785389017245",
    translator: "",
    publisher: "Азбука",
    publishYear: "2013",
  },
  {
    authors: [
      {
        firstName: "Эдмон",
        lastName: "Ростан"
      },
    ],
    title: "Сирано де Бержерак. Героическая комедия в пяти действиях в стихах",
    ISBN: "5352002136",
    translator: "Елена Баевская",
    publisher: "Азбука",
    publishYear: "2003",
  },
  {
    authors: [
      {
        firstName: "Бенедикт",
        lastName: "Спиноза"
      },
    ],
    title: "Этика",
    ISBN: "9785389033825",
    translator: "Я. М. Боровский, Н. А. Иванцов",
    publisher: "Азбука",
    publishYear: "2013",
  },
  {
    authors: [
      {
        firstName: "Борис",
        lastName: "Виан"
      },
    ],
    title: "Пена дней",
    ISBN: "9785389047754",
    translator: "Лилиана Лунгина",
    publisher: "Азбука",
    publishYear: "2013",
  },
  {
    authors: [
      {
        firstName: "Эрнст Теодор Амадей",
        lastName: "Гофман"
      },
    ],
    title: "Житейские воззрения кота Мурра",
    ISBN: "9785389059047",
    translator: "А. Големба",
    publisher: "Азбука",
    publishYear: "2013",
  },
  {
    authors: [
      {
        firstName: "Михаил Афанасьевич",
        lastName: "Булгаков"
      },
    ],
    title: "Собачье сердце",
    ISBN: "9785998505850",
    translator: "",
    publisher: "Азбука",
    publishYear: "2010",
  },
  {
    authors: [
      {
        firstName: "Джейн",
        lastName: "Остин"
      },
    ],
    title: "Эмма",
    ISBN: "9785389019614",
    translator: "Мария Кан",
    publisher: "Азбука",
    publishYear: "2019",
  },
  {
    authors: [
      {
        firstName: "Виктор",
        lastName: "Гюго"
      },
    ],
    title: "Отверженные",
    ISBN: "9785389049710",
    translator: "",
    publisher: "Азбука",
    publishYear: "2013",
  },
  {
    authors: [
      {
        firstName: "Чезаре",
        lastName: "Ломброзо"
      },
    ],
    title: "Гениальность и помешательство",
    ISBN: "9785389101388",
    translator: "К. Тетюшинова",
    publisher: "Азбука",
    publishYear: "2015",
  },
  {
    authors: [
      {
        firstName: "Жан де",
        lastName: "Лафонтен"
      },
    ],
    title: "Басни",
    ISBN: "9785389109315",
    translator: "Владимир Васильев, Майя Квятковская",
    publisher: "Азбука",
    publishYear: "2019",
  },
  {
    authors: [
      {
        firstName: "Владимир Владимирович",
        lastName: "Набоков"
      },
    ],
    title: "Отчаяние",
    ISBN: "9785389056701",
    translator: "",
    publisher: "Азбука",
    publishYear: "2013",
  },
  {
    authors: [
      {
        firstName: "Салман",
        lastName: "Рушди"
      },
    ],
    title: "Ярость",
    ISBN: "9785367024029",
    translator: "А. В. Челнокова",
    publisher: "Лениздат",
    publishYear: "2013",
  },
  {
    authors: [
      {
        firstName: "Владимир",
        lastName: "Маяковский"
      },
    ],
    title: "Во весь голос. Стихотворения. Поэмы",
    ISBN: "9785445303701",
    translator: "",
    publisher: "Лениздат",
    publishYear: "2014",
  },
  {
    authors: [
      {
        firstName: "Ихара",
        lastName: "Сайкаку"
      },
    ],
    title: "Пять женщин, предавшихся любви. История любовных похождений одинокой женщины. Новеллы",
    ISBN: "9785905799778",
    translator: "В. Н. Марков, Е. М. Пинус",
    publisher: "Лениздат",
    publishYear: "2012",
  },
  {
    authors: [
      {
        firstName: "Александр Сергеевич",
        lastName: "Грибоедов"
      },
    ],
    title: "Горе от ума",
    ISBN: "9785445300205",
    translator: "",
    publisher: "Лениздат",
    publishYear: "2012",
  },
  {
    authors: [
      {
        firstName: "Нил",
        lastName: "Гейман"
      },
    ],
    title: "Все новые сказки. Сборник",
    ISBN: "9785171051525",
    translator: "С. Силакова, М. Тогобецкая, Е. Мартинкевич, М. Глезерова, Н. Казакова, Н. Конча, М. Мелниченкова, А. Осокин",
    publisher: "АСТ",
    publishYear: "2017",
  },
  {
    authors: [
      {
        firstName: "Пелам Гренвилл",
        lastName: "Вудхаус"
      },
    ],
    title: "Дживс, вы - гений!",
    ISBN: "9785170888252",
    translator: "Ю. Жукова",
    publisher: "АСТ",
    publishYear: "2015",
  },
  {
    authors: [
      {
        firstName: "Пелам Гренвилл",
        lastName: "Вудхаус"
      },
    ],
    title: "Этот неподражаемый Дживс!",
    ISBN: "9785170947126",
    translator: "А. Н. Балясников",
    publisher: "АСТ",
    publishYear: "2016",
  },
  {
    authors: [
      {
        firstName: "Сомерсет",
        lastName: "Моэм"
      },
    ],
    title: "Театр",
    ISBN: "9785170814282",
    translator: "Г. Островская",
    publisher: "АСТ",
    publishYear: "2014",
  },
  {
    authors: [
      {
        firstName: "Артур",
        lastName: "Хейли"
      },
    ],
    title: "Аэропорт",
    ISBN: "9785170861446",
    translator: "Т. Кудрявцева, Т. Озерская",
    publisher: "АСТ",
    publishYear: "2019",
  },
  {
    authors: [
      {
        firstName: "",
        lastName: "Петроний"
      },
    ],
    title: "Сатирикон",
    ISBN: "9785389061736",
    translator: "Б. Ярхо",
    publisher: "Азбука",
    publishYear: "2013",
  },
  {
    authors: [
      {
        firstName: "Артур",
        lastName: "Шопенгауэр"
      },
    ],
    title: "Метафизика половой любви",
    ISBN: "9785389019454",
    translator: "Ю. И. Айхенвальда",
    publisher: "Азбука",
    publishYear: "2013",
  },
  {
    authors: [
      {
        firstName: "Оскар",
        lastName: "Уайльд"
      },
    ],
    title: "Портрет Дориана Грея",
    ISBN: "9785389012158",
    translator: "М. Абкина",
    publisher: "Азбука",
    publishYear: "2014",
  },
  {
    authors: [
      {
        firstName: "Жан Поль",
        lastName: "Сартр"
      },
    ],
    title: "Тошнота",
    ISBN: "9785170623143",
    translator: "Ю. Я. Яхнина",
    publisher: "АСТ",
    publishYear: "2013",
  },
  {
    authors: [
      {
        firstName: "Эрнест",
        lastName: "Хемингуэй"
      },
    ],
    title: "Фиеста",
    ISBN: "9785170673643",
    translator: "В. Топер",
    publisher: "АСТ",
    publishYear: "2010",
  },
  {
    authors: [
      {
        firstName: "Джордж",
        lastName: "Оруэлл"
      },
    ],
    title: "1984. Скотный двор",
    ISBN: "9785170647286",
    translator: "В. Голышев, Л. Беспалова",
    publisher: "АСТ",
    publishYear: "2012",
  },
  {
    authors: [
      {
        firstName: "Джеймс",
        lastName: "Джойс"
      },
    ],
    title: "Портрет художника в юности",
    ISBN: "9785170634767",
    translator: "М. П. Богословская-Боброва",
    publisher: "АСТ",
    publishYear: "2010",
  },
  {
    authors: [
      {
        firstName: "Терри",
        lastName: "Пратчетт"
      },
    ],
    title: "Кот без прикрас",
    ISBN: "9785699569380",
    translator: "Н. Аллунан",
    publisher: "Эксмо",
    publishYear: "2014",
  },
  {
    authors: [
      {
        firstName: "Чарльз",
        lastName: "Буковски"
      },
    ],
    title: "Записки старого козла",
    ISBN: "9785699628698",
    translator: "Юрий Медведько",
    publisher: "Эксмо",
    publishYear: "2014",
  },
  {
    authors: [
      {
        firstName: "Эрнст Теодор Амадей",
        lastName: "Гофман"
      },
    ],
    title: "Золотой горшок. Крошка Цахес, по прозванию Цинноберг",
    ISBN: "9785905799501",
    translator: "А. А. Морозов, В. С. Соловьев",
    publisher: "Лениздат",
    publishYear: "2014",
  },
  {
    authors: [
      {
        firstName: "Дафна",
        lastName: "Дюморье"
      },
    ],
    title: "Синие линзы. Рассказы",
    ISBN: "9785367024661",
    translator: "А. А. Ставиская, Н. Н. Тихонов, Г. А. Островская",
    publisher: "Лениздат",
    publishYear: "2013",
  },
  {
    authors: [
      {
        firstName: "Дорис",
        lastName: "Лессинг"
      },
    ],
    title: "Кошки",
    ISBN: "9785367024746",
    translator: "Е. В. Топчий",
    publisher: "Лениздат",
    publishYear: "2013",
  },
  {
    authors: [
      {
        firstName: "",
        lastName: "Стендаль"
      },
    ],
    title: "Красное и черное",
    ISBN: "9785445300274",
    translator: "А. Н. Чеботаревская",
    publisher: "Лениздат",
    publishYear: "2013",
  },
  {
    authors: [
      {
        firstName: "Кобо",
        lastName: "Абэ"
      },
    ],
    title: "Соженная карта",
    ISBN: "9785367024005",
    translator: "В. С. Гривнин",
    publisher: "Лениздат",
    publishYear: "2013",
  },
  {
    authors: [
      {
        firstName: "Игорь Михайлович",
        lastName: "Плаксин"
      },
    ],
    title: "Ехал на ярмарку ухарь-купец",
    ISBN: "9785989170371",
    translator: "",
    publisher: "Курск. Издательский дом ВИП",
    publishYear: "2021",
  },
  {
    authors: [
      {
        firstName: "",
        lastName: "Тэффи"
      },
    ],
    title: "Юмористические рассказы",
    ISBN: "9785960304917",
    translator: "",
    publisher: "СЗКЭО",
    publishYear: "2019",
  },
  {
    authors: [
      {
        firstName: "Вернер",
        lastName: "Линдеманн"
      },
    ],
    title: "Майк Олдфрид в кресле-качалке. Записки отца",
    ISBN: "9785041097349",
    translator: "О. Нацаренус",
    publisher: "Эксмо",
    publishYear: "2020",
  },
  {
    authors: [
      {
        firstName: "Тиль",
        lastName: "Линдеманн"
      },
    ],
    title: "В тихой ночи. Лирика",
    ISBN: "9785699919161",
    translator: "Н. В. Мордвичева, В. В. Камедин",
    publisher: "Э",
    publishYear: "2017",
  },
  {
    authors: [
      {
        firstName: "Роальд",
        lastName: "Даль"
      },
    ],
    title: "Дорога в рай. Полное собрание рассказов",
    ISBN: "9785389123816",
    translator: "Игорь Богданов, Михаил Пчелинцев",
    publisher: "Иностранка",
    publishYear: "2017",
  },
  {
    authors: [
      {
        firstName: "",
        lastName: ""
      },
    ],
    title: "Chanel. Catwalk",
    ISBN: "9780500023440",
    translator: "",
    publisher: "Thames & Hudson",
    publishYear: "2021",
  },
  {
    authors: [
      {
        firstName: "Edmund",
        lastName: "Goldzamt"
      },
    ],
    title: "William Morris und die sozialen Ursprunge der modernen Architektur",
    ISBN: "",
    translator: "",
    publisher: "VEB Verlag der Kunst",
    publishYear: "1976",
  },
  {
    authors: [
      {
        firstName: "Алан",
        lastName: "Мур"
      },
    ],
    title: "Иерусалим",
    ISBN: "9785171023744",
    translator: "Сергей Карпов",
    publisher: "АСТ",
    publishYear: "2021",
  },
  {
    authors: [
      {
        firstName: "Бернар",
        lastName: "Вербер"
      },
    ],
    title: "Танатонавты",
    ISBN: "9785041160715",
    translator: "Игорь Судакевич",
    publisher: "Эксмо",
    publishYear: "2021",
  },
  {
    authors: [
      {
        firstName: "Гордон",
        lastName: "Рамзи"
      },
    ],
    title: "Культ домашней еды: Завтраки, обеды, ужины",
    ISBN: "9785389087637",
    translator: "Е. Костина",
    publisher: "Колибри",
    publishYear: "2019",
  },
  {
    authors: [
      {
        firstName: "Эдвин",
        lastName: "Лутц"
      },
    ],
    title: "Начни рисовать. Пошаговые техники для тех, кто хочет стать художником за 5 минут",
    ISBN: "9785001004929",
    translator: "Е. Петрова",
    publisher: "Манн, Иванов, Фербер",
    publishYear: "2017",
  },
  {
    authors: [
      {
        firstName: "",
        lastName: ""
      },
    ],
    title: "",
    ISBN: "",
    translator: "",
    publisher: "",
    publishYear: "",
  },
  {
    authors: [
      {
        firstName: "Джон Р.Р.",
        lastName: "Толкин"
      },
    ],
    title: "Возвращение короля",
    ISBN: "9785170818051",
    translator: "Н. Григорьева, В. Грушецкий",
    publisher: "АСТ",
    publishYear: "2014",
  },
  {
    authors: [
      {
        firstName: "Фёдор Петрович",
        lastName: "Коровкин"
      },
    ],
    title: "История древнего мира. Учебник для 5 класса средней школы",
    ISBN: "509000353X",
    translator: "",
    publisher: "Просвещение",
    publishYear: "1988",
  },
  {
    authors: [
      {
        firstName: "Alexander",
        lastName: "Pushkin"
      },
    ],
    title: "Märchen",
    ISBN: "9785966302337",
    translator: "",
    publisher: "Яркий город",
    publishYear: "2016",
  },
  {
    authors: [
      {
        firstName: "Жюль",
        lastName: "Верн"
      },
    ],
    title: "Таинственный остров",
    ISBN: "",
    translator: "Н. Немчинова, А. Худадова",
    publisher: "Детская литература",
    publishYear: "1984",
  },
  {
    authors: [
      {
        firstName: "Ховард Филлипс",
        lastName: "Лавкрафт"
      },
    ],
    title: "Некрономикон",
    ISBN: "9785946980807",
    translator: "Н. Бавина",
    publisher: "Энигма",
    publishYear: "2016",
  },
  {
    authors: [
      {
        firstName: "Говард Филлипс",
        lastName: "Лавкрафт"
      },
    ],
    title: "Хребты безумия",
    ISBN: "9785389067783",
    translator: "О. Алякринской, И. Богданов, Л. Брилова",
    publisher: "Иностранка",
    publishYear: "2016",
  },
  {
    authors: [
      {
        firstName: "Говард Филлипс",
        lastName: "Лавкрафт"
      },
    ],
    title: "Зов Ктулху",
    ISBN: "9785389066076",
    translator: "С. Антонов, И. Богданов, В. Дорогокупль и др.",
    publisher: "Иностранка",
    publishYear: "2016",
  },
  {
    authors: [
      {
        firstName: "Борис",
        lastName: "Акунин"
      },
    ],
    title: "Азиатская европеизация. История Российского государства. Царь Петр Алексеевич",
    ISBN: "9785170825721",
    translator: "",
    publisher: "АСТ",
    publishYear: "2019",
  },
  {
    authors: [
      {
        firstName: "Джеймс",
        lastName: "Глик"
      },
    ],
    title: "Путешестви во времени. История",
    ISBN: "9785001009030",
    translator: "Наталья Лисовая",
    publisher: "Манн, Иванов и Фербер",
    publishYear: "2018",
  },
  {
    authors: [
      {
        firstName: "Клайв",
        lastName: "Льюис"
      },
    ],
    title: "Хроники Нарнии: Последняя битва. Три повести: Покоритель зари, или Плавание на край света. Серебряное кресло. Последняя битва",
    ISBN: "9785699599622",
    translator: "Т. Шапошникова, Е. Доброхотова-Майкова",
    publisher: "Эксмо",
    publishYear: "2013",
  },
  {
    authors: [
      {
        firstName: "Клайв",
        lastName: "Льюис"
      },
    ],
    title: "Хроники Нарнии: начало истории. Четыре повести: Племянник Чародея. Лев, колдунья и платяной шкаф. Конь и его мальчик. Принц Каспиан",
    ISBN: "9785699627967",
    translator: "Г. Островская, Н. Трауберг, Е. Доброхотова-Майкова",
    publisher: "Эксмо",
    publishYear: "2013",
  },
  {
    authors: [
      {
        firstName: "Леонид Алексеевич",
        lastName: "Филатов"
      },
    ],
    title: "Про Федота-стрельца, удалого молодца. Пьесы, рассказы, стихи",
    ISBN: "9785170563432",
    translator: "",
    publisher: "АСТ",
    publishYear: "2009",
  },
  {
    authors: [
      {
        firstName: "Дин",
        lastName: "Кунц"
      },
    ],
    title: "Шорохи",
    ISBN: "5655008742",
    translator: "",
    publisher: "МП \"ТИМП\"",
    publishYear: "1993",
  },
  {
    authors: [
      {
        firstName: "Дэниел",
        lastName: "Киз"
      },
    ],
    title: "Цветы для Элджернона",
    ISBN: "9785699349739",
    translator: "Сергей Шаров",
    publisher: "Эксмо",
    publishYear: "2012",
  },
  {
    authors: [
      {
        firstName: "Джонотан Сафран",
        lastName: "Фоер"
      },
    ],
    title: "Жутко громко и запредельно близко",
    ISBN: "9785699691098",
    translator: "В. Арканов",
    publisher: "Эксмо",
    publishYear: "2015",
  },
  {
    authors: [
      {
        firstName: "Клайв",
        lastName: "Льюис"
      },
    ],
    title: "Лев, колдунья и платяной шкаф",
    ISBN: "",
    translator: "Г. Островская",
    publisher: "Детская литература",
    publishYear: "1978",
  },
  {
    authors: [
      {
        firstName: "Айзек",
        lastName: "Азимов"
      },
    ],
    title: "Краткая история биологии. От алхимии до генетики",
    ISBN: "9785227086464",
    translator: "Л. А. Игоревский",
    publisher: "Центрполиграф",
    publishYear: "2018",
  },
  {
    authors: [
      {
        firstName: "Джеймс",
        lastName: "Уотсон"
      },
    ],
    title: "Двойная спираль. Открытие структуры ДНК",
    ISBN: "9785171149031",
    translator: "О. Перфильев",
    publisher: "АСТ",
    publishYear: "2019",
  },
  {
    authors: [
      {
        firstName: "Алан",
        lastName: "Тьюринг"
      },
    ],
    title: "Вычислительные машины и разум",
    ISBN: "9785171059705",
    translator: "К. Королев",
    publisher: "АСТ",
    publishYear: "2021",
  },
  {
    authors: [
      {
        firstName: "Фрэнсис Скотт",
        lastName: "Фицджеральд"
      },
    ],
    title: "Последний Магнат. Рассказы",
    ISBN: "9785389090422",
    translator: "И. Архангельская, С. Белокриницкая, И. Бернштейн, М. Загота, Татьяна Иванова, А. Кистяковский, М. Кореневая, Т. Луковникова, М. Муравьев, Т. Озерская, О. Сорока, В. Харитонов, В. Хинкис",
    publisher: "Азбука",
    publishYear: "2015",
  },
  {
    authors: [
      {
        firstName: "Фрэнсис Скотт",
        lastName: "Фицджеральд"
      },
    ],
    title: "Великий Гэтсби",
    ISBN: "9785389047280",
    translator: "М. Лорие, Е. Калашникова",
    publisher: "Азбука",
    publishYear: "2013",
  },
  {
    authors: [
      {
        firstName: "Данте",
        lastName: "Алигьери"
      },
    ],
    title: "Божественная комедия",
    ISBN: "9785389058675",
    translator: "Ольга Чюмина",
    publisher: "Азбука",
    publishYear: "2013",
  },
  {
    authors: [
      {
        firstName: "Дэниел",
        lastName: "Дефо"
      },
    ],
    title: "Робинзон Крузо",
    ISBN: "9785389068872",
    translator: "М. Шишмарева",
    publisher: "Азбука",
    publishYear: "2014",
  },
  {
    authors: [
      {
        firstName: "Владимир Владимирович",
        lastName: "Набоков"
      },
    ],
    title: "Защита Лужина",
    ISBN: "9785389075566",
    translator: "",
    publisher: "Азбука",
    publishYear: "2014",
  },
  {
    authors: [
      {
        firstName: "Владимир Владимирович",
        lastName: "Набоков"
      },
    ],
    title: "Камера обскура",
    ISBN: "9785389079854",
    translator: "",
    publisher: "Азбука",
    publishYear: "2014",
  },
  {
    authors: [
      {
        firstName: "Иван Сергеевич",
        lastName: "Тургенев"
      },
    ],
    title: "Отцы и дети",
    ISBN: "9785389049963",
    translator: "",
    publisher: "Азбука",
    publishYear: "2013",
  },
  {
    authors: [
      {
        firstName: "Федор Михайлович",
        lastName: "Достоевский"
      },
    ],
    title: "Записки из мертвого дома",
    ISBN: "9785389068889",
    translator: "",
    publisher: "Азбука",
    publishYear: "2014",
  },
  {
    authors: [
      {
        firstName: "Марк",
        lastName: "Твен"
      },
    ],
    title: "Приключения Тома Сойера и Гекльберри Финна",
    ISBN: "9785389049208",
    translator: "Н. Дарузес",
    publisher: "Азбука",
    publishYear: "2013",
  },
  {
    authors: [
      {
        firstName: "Михаил Юрьевич",
        lastName: "Лермонтов"
      },
    ],
    title: "Герой нашего времени",
    ISBN: "9785389049048",
    translator: "",
    publisher: "Азбука",
    publishYear: "2013",
  },
  {
    authors: [
      {
        firstName: "Даниил Иванович",
        lastName: "Хармс"
      },
    ],
    title: "Случаи и вещи. Сборник",
    ISBN: "9785389052864",
    translator: "",
    publisher: "Азбука",
    publishYear: "2013",
  },
  {
    authors: [
      {
        firstName: "Лев Николаевич",
        lastName: "Толстой"
      },
    ],
    title: "Война и мир. Том 1-2",
    ISBN: "9785389071254",
    translator: "",
    publisher: "Азбука",
    publishYear: "2014",
  },
  {
    authors: [
      {
        firstName: "Лев Николаевич",
        lastName: "Толстой"
      },
    ],
    title: "Война и мир. Том 3-4",
    ISBN: "9785389071261",
    translator: "",
    publisher: "Азбука",
    publishYear: "2014",
  },
  {
    authors: [
      {
        firstName: "Александр Сергеевич",
        lastName: "Грибоедов"
      },
    ],
    title: "Сочинения",
    ISBN: "5280000604",
    translator: "",
    publisher: "Художественная литература",
    publishYear: "1988",
  },
  {
    authors: [
      {
        firstName: "Олдос",
        lastName: "Хаксли"
      },
    ],
    title: "О дивный мир",
    ISBN: "9785170628230",
    translator: "О. Сорока",
    publisher: "АСТ",
    publishYear: "2014",
  },
  {
    authors: [
      {
        firstName: "Эдгар Алан",
        lastName: "По"
      },
    ],
    title: "Падение дома Ашеров",
    ISBN: "9785389047808",
    translator: "З. Александрова, К. Бальмонт, М. Беккер и др.",
    publisher: "Азбука",
    publishYear: "2012",
  },
  {
    authors: [
      {
        firstName: "Гомер",
        lastName: ""
      },
    ],
    title: "Одиссея",
    ISBN: "9785389057319",
    translator: "В. Жуковский",
    publisher: "Азбука",
    publishYear: "2013",
  },
];

export default booksStorage;