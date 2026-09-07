```javascript
/* =========================================================
   JWS GROUP — SCRIPT
   Языки: RU / KZ / EN
   Калькулятор
   Мобильное меню
   Форма
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     LANGUAGE
  ======================================================= */

  const translations = {

    ru: {
      navServices: "Услуги",
      navProcess: "Как это работает",
      navCalculator: "Калькулятор",
      navAbout: "О компании",
      navContact: "Контакты",

      request: "Оставить заявку",
      calculate: "Рассчитать стоимость",

      heroTitle: "Растаможка и хранение груза — без задержек на границе",
      heroText:
        "JWS Group ведёт таможенное декларирование, принимает грузы на собственный склад временного хранения (СВХ) и сопровождает поставку от границы до получателя.",

      onWay: "В ПУТИ",
      china: "Китай",
      border: "Граница",
      weight: "Вес",
      status: "Статус",
      inTransit: "В пути",
      days: "дня",

      servicesTag: "Услуги",
      servicesTitle: "Что мы делаем с грузом",
      servicesText:
        "Можно заказать любую услугу отдельно или полным циклом — от границы до выдачи получателю.",

      service1Title: "Таможенное декларирование",
      service1Text:
        "Подготовка и подача декларации, расчёт пошлины и НДС, взаимодействие с таможенным постом.",

      service2Title: "Хранение на складе временного хранения",
      service2Text:
        "Приём, размещение и выдача груза на СВХ на весь период оформления — по весу или по объёму.",

      service3Title: "Брокерское сопровождение",
      service3Text:
        "Ведение сделки от подачи документов до выпуска груза, включая переписку с таможней.",

      service4Title: "Определение кода ТН ВЭД и ставок",
      service4Text:
        "Подбор верного кода товара и действующих ставок пошлины и НДС до подачи декларации.",

      processTag: "Процесс",
      processTitle: "Путь груза от заявки до выдачи",
      processText:
        "Четыре этапа оформления груза — от первого обращения до получения товара.",

      step1: "Заявка",
      step1Text:
        "Присылаете документы на груз, мы уточняем код ТН ВЭД и предварительную стоимость.",

      step2: "Приём на СВХ",
      step2Text:
        "Груз поступает на склад временного хранения, фиксируем вес и объём.",

      step3: "Декларирование",
      step3Text:
        "Подаём декларацию, рассчитываем и оплачиваем пошлину и НДС.",

      step4: "Выпуск груза",
      step4Text:
        "После выпуска таможней выдаём груз или организуем доставку получателю.",

      calculatorTag: "Калькулятор",
      calculatorTitle: "Рассчитайте стоимость заранее",
      calculatorText:
        "Пошлина, НДС, хранение на СВХ и услуги брокера — один расчёт по одной поставке.",

      product: "ТОВАР",
      productCost: "Стоимость товара",
      currency: "Валюта",
      exchangeRate: "Курс к тенге",
      dutyRate: "Пошлина, %",
      vatRate: "НДС, %",

      storage: "ХРАНЕНИЕ НА СВХ",
      weightKg: "Вес, кг",
      volumeM3: "Объём, м³",
      byWeight: "По весу",
      byVolume: "По объёму",
      storageRate: "Ставка хранения",
      storageDays: "Дней хранения",

      broker: "БРОКЕРСКИЕ УСЛУГИ",
      brokerMode: "Режим расчёта",
      fixedAmount: "Фиксированная сумма",
      percentage: "Процент",
      brokerAmount: "Сумма услуг брокера",

      calculation: "РАСЧЁТ",
      customsValue: "Таможенная стоимость",
      duty: "Пошлина",
      vat: "НДС",
      storageCost: "Хранение на СВХ",
      brokerCost: "Брокерские услуги",
      total: "Итого к оплате",

      calculatorNote:
        "Расчёт является ориентировочным. Фактические ставки зависят от кода ТН ВЭД, условий поставки и действующего законодательства.",

      aboutTag: "О компании",
      aboutTitle: "JWS Group",
      aboutText:
        "Сопровождаем импортные поставки в Казахстан: таможенное оформление, хранение на СВХ и брокерское сопровождение.",
      contactUs: "Связаться с нами",

      about1: "Документы",
      about2: "СВХ",
      about3: "Таможня",
      about4: "Выдача груза",

      contactTag: "Контакты",
      contactTitle: "Оставить заявку",
      contactText:
        "Расскажите о грузе — мы свяжемся с вами и уточним детали оформления.",

      phone: "Телефон",
      warehouse: "Адрес СВХ",
      workingHours: "Режим работы",
      name: "Имя",
      contact: "Телефон или email",
      message: "Что нужно оформить",

      cargoPlaceholder:
        "Вес, объём, страна отправления, вид товара",

      send: "Отправить заявку",

      formNote:
        "После подключения Formspree заявки будут поступать на вашу почту.",

      contactNote:
        "Контактные данные можно заменить на реальные данные вашей компании.",

      footerText:
        "Таможенное оформление · СВХ · Брокерское сопровождение"
    },


    kz: {
      navServices: "Қызметтер",
      navProcess: "Қалай жұмыс істейді",
      navCalculator: "Калькулятор",
      navAbout: "Компания туралы",
      navContact: "Байланыс",

      request: "Өтінім қалдыру",
      calculate: "Құнын есептеу",

      heroTitle:
        "Жүкті кедендік рәсімдеу және сақтау — шекарада кідіріссіз",

      heroText:
        "JWS Group кедендік декларациялауды жүргізеді, жүктерді уақытша сақтау қоймасына (СВХ) қабылдайды және жүкті шекарадан алушыға дейін сүйемелдейді.",

      onWay: "ЖОЛДА",
      china: "Қытай",
      border: "Шекара",
      weight: "Салмақ",
      status: "Мәртебе",
      inTransit: "Жолда",
      days: "күн",

      servicesTag: "Қызметтер",
      servicesTitle: "Жүкпен не істейміз",
      servicesText:
        "Кез келген қызметке жеке тапсырыс беруге немесе шекарадан алушыға дейін толық циклді таңдауға болады.",

      service1Title: "Кедендік декларациялау",
      service1Text:
        "Декларацияны дайындау және тапсыру, баж бен ҚҚС есептеу, кеден бекетімен өзара жұмыс.",

      service2Title: "Уақытша сақтау қоймасында сақтау",
      service2Text:
        "Рәсімдеу кезеңінде жүкті қабылдау, орналастыру және беру — салмағы немесе көлемі бойынша.",

      service3Title: "Брокерлік сүйемелдеу",
      service3Text:
        "Құжаттарды тапсырудан бастап жүк шығарылғанға дейін мәмілені толық сүйемелдеу.",

      service4Title: "ТН ВЭД кодын және мөлшерлемелерді анықтау",
      service4Text:
        "Декларация тапсырылғанға дейін тауардың дұрыс кодын және қолданыстағы баж бен ҚҚС мөлшерлемелерін анықтау.",

      processTag: "Процесс",
      processTitle: "Өтінімнен жүк берілгенге дейін",
      processText:
        "Жүкті рәсімдеудің төрт кезеңі — алғашқы өтінімнен тауарды алуға дейін.",

      step1: "Өтінім",
      step1Text:
        "Жүк құжаттарын жібересіз, біз ТН ВЭД кодын және алдын ала құнын нақтылаймыз.",

      step2: "СВХ-ға қабылдау",
      step2Text:
        "Жүк уақытша сақтау қоймасына түседі, салмағы мен көлемін тіркейміз.",

      step3: "Декларациялау",
      step3Text:
        "Декларацияны тапсырып, баж бен ҚҚС есептейміз және төлейміз.",

      step4: "Жүкті шығару",
      step4Text:
        "Кеден шығарғаннан кейін жүкті береміз немесе алушыға жеткізуді ұйымдастырамыз.",

      calculatorTag: "Калькулятор",
      calculatorTitle: "Құнын алдын ала есептеңіз",
      calculatorText:
        "Баж, ҚҚС, СВХ-да сақтау және брокер қызметі — бір жеткізілім бойынша бір есеп.",

      product: "ТАУАР",
      productCost: "Тауар құны",
      currency: "Валюта",
      exchangeRate: "Теңгеге бағам",
      dutyRate: "Баж, %",
      vatRate: "ҚҚС, %",

      storage: "СВХ-ДА САҚТАУ",
      weightKg: "Салмақ, кг",
      volumeM3: "Көлемі, м³",
      byWeight: "Салмақ бойынша",
      byVolume: "Көлем бойынша",
      storageRate: "Сақтау мөлшерлемесі",
      storageDays: "Сақтау күндері",

      broker: "БРОКЕР ҚЫЗМЕТТЕРІ",
      brokerMode: "Есептеу режимі",
      fixedAmount: "Тұрақты сома",
      percentage: "Пайыз",
      brokerAmount: "Брокер қызметінің сомасы",

      calculation: "ЕСЕП",
      customsValue: "Кедендік құн",
      duty: "Баж",
      vat: "ҚҚС",
      storageCost: "СВХ-да сақтау",
      brokerCost: "Брокер қызметі",
      total: "Төленетін жалпы сома",

      calculatorNote:
        "Есептеу алдын ала болып табылады. Нақты мөлшерлемелер ТН ВЭД кодына, жеткізу шарттарына және қолданыстағы заңнамаға байланысты.",

      aboutTag: "Компания туралы",
      aboutTitle: "JWS Group",
      aboutText:
        "Қазақстанға импорттық жеткізілімдерді сүйемелдейміз: кедендік рәсімдеу, СВХ-да сақтау және брокерлік сүйемелдеу.",

      contactUs: "Бізбен байланысу",

      about1: "Құжаттар",
      about2: "СВХ",
      about3: "Кеден",
      about4: "Жүкті беру",

      contactTag: "Байланыс",
      contactTitle: "Өтінім қалдыру",
      contactText:
        "Жүк туралы айтып беріңіз — біз сізбен байланысып, рәсімдеу мәліметтерін нақтылаймыз.",

      phone: "Телефон",
      warehouse: "СВХ мекенжайы",
      workingHours: "Жұмыс уақыты",
      name: "Аты",
      contact: "Телефон немесе email",
      message: "Нені рәсімдеу қажет",

      cargoPlaceholder:
        "Салмақ, көлем, жөнелту елі, тауар түрі",

      send: "Өтінім жіберу",

      formNote:
        "Formspree қосылғаннан кейін өтінімдер электрондық поштаңызға келеді.",

      contactNote:
        "Байланыс деректерін компанияңыздың нақты деректерімен ауыстыруға болады.",

      footerText:
        "Кедендік рәсімдеу · СВХ · Брокерлік сүйемелдеу"
    },


    en: {
      navServices: "Services",
      navProcess: "How it works",
      navCalculator: "Calculator",
      navAbout: "About",
      navContact: "Contacts",

      request: "Submit a request",
      calculate: "Calculate cost",

      heroTitle:
        "Customs clearance and cargo storage — without border delays",

      heroText:
        "JWS Group handles customs declarations, receives cargo at its temporary storage warehouse and supports shipments from the border to the final recipient.",

      onWay: "IN TRANSIT",
      china: "China",
      border: "Border",
      weight: "Weight",
      status: "Status",
      inTransit: "In transit",
      days: "days",

      servicesTag: "Services",
      servicesTitle: "What we do with your cargo",
      servicesText:
        "You can order any service separately or choose the full cycle — from the border to final delivery.",

      service1Title: "Customs declaration",
      service1Text:
        "Preparation and submission of declarations, calculation of duties and VAT, communication with customs authorities.",

      service2Title: "Temporary storage warehouse",
      service2Text:
        "Cargo reception, storage and release during the customs clearance process — by weight or volume.",

      service3Title: "Customs brokerage",
      service3Text:
        "Full transaction support from document submission to cargo release, including communication with customs.",

      service4Title: "HS code and duty rate determination",
      service4Text:
        "Selection of the correct product code and applicable duty and VAT rates before filing the declaration.",

      processTag: "Process",
      processTitle: "From request to cargo release",
      processText:
        "Four cargo clearance stages — from the first request to receiving the goods.",

      step1: "Request",
      step1Text:
        "Send us the cargo documents and we determine the HS code and preliminary cost.",

      step2: "Warehouse reception",
      step2Text:
        "The cargo arrives at the temporary storage warehouse and we record its weight and volume.",

      step3: "Declaration",
      step3Text:
        "We submit the declaration and calculate and pay duties and VAT.",

      step4: "Cargo release",
      step4Text:
        "After customs release, we hand over the cargo or arrange delivery to the recipient.",

      calculatorTag: "Calculator",
      calculatorTitle: "Estimate the cost in advance",
      calculatorText:
        "Duty, VAT, storage and brokerage services — one calculation for one shipment.",

      product: "GOODS",
      productCost: "Goods value",
      currency: "Currency",
      exchangeRate: "Exchange rate to KZT",
      dutyRate: "Duty, %",
      vatRate: "VAT, %",

      storage: "TEMPORARY STORAGE",
      weightKg: "Weight, kg",
      volumeM3: "Volume, m³",
      byWeight: "By weight",
      byVolume: "By volume",
      storageRate: "Storage rate",
      storageDays: "Storage days",

      broker: "BROKER SERVICES",
      brokerMode: "Calculation mode",
      fixedAmount: "Fixed amount",
      percentage: "Percentage",
      brokerAmount: "Broker service amount",

      calculation: "CALCULATION",
      customsValue: "Customs value",
      duty: "Duty",
      vat: "VAT",
      storageCost: "Storage",
      brokerCost: "Broker services",
      total: "Total payable",

      calculatorNote:
        "This calculation is an estimate. Actual rates depend on the HS code, delivery terms and applicable legislation.",

      aboutTag: "About",
      aboutTitle: "JWS Group",
      aboutText:
        "We support import shipments to Kazakhstan: customs clearance, temporary storage and customs brokerage.",

      contactUs: "Contact us",

      about1: "Documents",
      about2: "Storage",
      about3: "Customs",
      about4: "Cargo release",

      contactTag: "Contacts",
      contactTitle: "Submit a request",
      contactText:
        "Tell us about your cargo — we will contact you and clarify the clearance details.",

      phone: "Phone",
      warehouse: "Warehouse address",
      workingHours: "Working hours",
      name: "Name",
      contact: "Phone or email",
      message: "What needs to be cleared",

      cargoPlaceholder:
        "Weight, volume, country of origin, type of goods",

      send: "Send request",

      formNote:
        "After connecting Formspree, requests will be sent to your email.",

      contactNote:
        "Replace the placeholder contact details with your company's actual information.",

      footerText:
        "Customs clearance · Temporary storage · Brokerage"
    }

  };


  /* =======================================================
     APPLY LANGUAGE
  ======================================================= */

  const langButtons = document.querySelectorAll(".lang-btn");

  function applyLanguage(lang) {

    if (!translations[lang]) {
      lang = "ru";
    }

    const dictionary = translations[lang];

    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((element) => {

      const key = element.dataset.i18n;

      if (dictionary[key] !== undefined) {
        element.textContent = dictionary[key];
      }

    });

    document
      .querySelectorAll("[data-i18n-placeholder]")
      .forEach((element) => {

        const key = element.dataset.i18nPlaceholder;

        if (dictionary[key] !== undefined) {
          element.placeholder = dictionary[key];
        }

      });


    langButtons.forEach((button) => {

      const buttonLang = button.dataset.lang;

      const isActive = buttonLang === lang;

      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));

    });


    /* Меняем подпись брокера в зависимости от режима */
    updateBrokerLabel(lang);

    localStorage.setItem("jws-language", lang);
  }


  langButtons.forEach((button) => {

    button.addEventListener("click", () => {

      const lang = button.dataset.lang;

      applyLanguage(lang);

    });

  });


  const savedLanguage = localStorage.getItem("jws-language");

  applyLanguage(savedLanguage || "ru");


  /* =======================================================
     MOBILE MENU
  ======================================================= */

  const header = document.getElementById("siteHeader");
  const navToggle = document.getElementById("navToggle");

  if (header && navToggle) {

    navToggle.addEventListener("click", () => {

      const isOpen = header.classList.toggle("open");

      navToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

    });


    document.querySelectorAll(".nav-links a").forEach((link) => {

      link.addEventListener("click", () => {

        header.classList.remove("open");

        navToggle.setAttribute(
          "aria-expanded",
          "false"
        );

      });

    });

  }


  /* =======================================================
     CALCULATOR
  ======================================================= */

  const calcForm = document.getElementById("calcForm");

  const valueInput = document.getElementById("value");
  const currencyInput = document.getElementById("currency");
  const rateInput = document.getElementById("rate");

  const dutyInput = document.getElementById("duty");
  const vatInput = document.getElementById("vat");

  const weightInput = document.getElementById("weight");
  const volumeInput = document.getElementById("volume");

  const storageRateInput =
    document.getElementById("storageRate");

  const daysInput =
    document.getElementById("days");

  const brokerValueInput =
    document.getElementById("brokerValue");

  const brokerToggle =
    document.getElementById("brokerToggle");

  const brokerValueLabel =
    document.getElementById("brokerValueLabel");


  let brokerMode = "fixed";


  function numberValue(element) {

    if (!element) {
      return 0;
    }

    const value = parseFloat(element.value);

    return Number.isFinite(value) && value >= 0
      ? value
      : 0;

  }


  function formatMoney(value) {

    return new Intl.NumberFormat("ru-RU", {
      maximumFractionDigits: 0
    }).format(Math.round(value)) + " ₸";

  }


  function calculate() {

    const productValue = numberValue(valueInput);
    const exchangeRate = numberValue(rateInput);

    const dutyRate = numberValue(dutyInput);
    const vatRate = numberValue(vatInput);

    const weight = numberValue(weightInput);
    const volume = numberValue(volumeInput);

    const storageRate =
      numberValue(storageRateInput);

    const storageDays =
      numberValue(daysInput);

    const brokerValue =
      numberValue(brokerValueInput);


    /* Таможенная стоимость в тенге */
    const customsValue =
      productValue * exchangeRate;


    /* Пошлина */
    const duty =
      customsValue * dutyRate / 100;


    /*
      НДС рассчитываем от таможенной стоимости
      + пошлины.
    */
    const vatBase =
      customsValue + duty;

    const vat =
      vatBase * vatRate / 100;


    /* СВХ */
    const selectedBasis =
      document.querySelector(
        'input[name="basis"]:checked'
      );

    const basis =
      selectedBasis
        ? selectedBasis.value
        : "weight";


    const storageQuantity =
      basis === "volume"
        ? volume
        : weight;


    const storage =
      storageQuantity *
      storageRate *
      storageDays;


    /* Брокер */
    let broker = 0;

    if (brokerMode === "percent") {

      broker =
        customsValue *
        brokerValue /
        100;

    } else {

      broker = brokerValue;

    }


    const total =
      customsValue +
      duty +
      vat +
      storage +
      broker;


    setOutput("outValue", customsValue);
    setOutput("outDuty", duty);
    setOutput("outVat", vat);
    setOutput("outStorage", storage);
    setOutput("outBroker", broker);
    setOutput("outTotal", total);

  }


  function setOutput(id, value) {

    const element =
      document.getElementById(id);

    if (element) {
      element.textContent =
        formatMoney(value);
    }

  }


  function updateBrokerLabel(lang) {

    if (!brokerValueLabel) {
      return;
    }

    const dictionary =
      translations[lang] || translations.ru;

    if (brokerMode === "percent") {

      brokerValueLabel.textContent =
        dictionary.percentage + ", %";

    } else {

      brokerValueLabel.textContent =
        dictionary.brokerAmount;

    }

  }


  if (brokerToggle) {

    brokerToggle
      .querySelectorAll("[data-mode]")
      .forEach((button) => {

        button.addEventListener("click", () => {

          brokerMode =
            button.dataset.mode;

          brokerToggle
            .querySelectorAll("[data-mode]")
            .forEach((item) => {

              const active =
                item.dataset.mode === brokerMode;

              item.setAttribute(
                "aria-pressed",
                String(active)
              );

            });


          const currentLang =
            document.documentElement.lang || "ru";

          updateBrokerLabel(currentLang);

          calculate();

        });

      });

  }


  if (calcForm) {

    calcForm.addEventListener(
      "input",
      calculate
    );

    calcForm.addEventListener(
      "change",
      calculate
    );

    calculate();

  }


  /* =======================================================
     CONTACT FORM
  ======================================================= */

  const contactForm =
    document.getElementById("contactForm");

  const formStatus =
    document.getElementById("formStatus");


  if (contactForm) {

    contactForm.addEventListener(
      "submit",
      async (event) => {

        /*
          Если Formspree ещё не подключён,
          не отправляем пустой тестовый URL.
        */

        const action =
          contactForm.getAttribute("action") || "";

        if (
          !action ||
          action.includes("ЗАМЕНИТЕ_НА_СВОЙ_ID")
        ) {

          event.preventDefault();

          const lang =
            document.documentElement.lang || "ru";

          const messages = {

            ru:
              "Сначала подключите Formspree и укажите ID формы.",

            kz:
              "Алдымен Formspree қосып, форма ID енгізіңіз.",

            en:
              "Connect Formspree and enter your form ID first."

          };

          if (formStatus) {
            formStatus.textContent =
              messages[lang];
          }

          return;

        }


        /*
          Для настоящего Formspree оставляем
          стандартную отправку формы.
        */

      }
    );

  }


  /* =======================================================
     YEAR
  ======================================================= */

  const year =
    document.getElementById("year");

  if (year) {
    year.textContent =
      new Date().getFullYear();
  }

});
```
