```javascript
(function () {
  "use strict";

  /* =========================
     MOBILE MENU
  ========================= */

  const header = document.getElementById("siteHeader");
  const navToggle = document.getElementById("navToggle");

  if (header && navToggle) {
    navToggle.addEventListener("click", function () {
      const isOpen = header.classList.toggle("open");

      navToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );
    });

    document.querySelectorAll(".nav-links a").forEach(function (link) {
      link.addEventListener("click", function () {
        header.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }


  /* =========================
     LANGUAGE SWITCHER
  ========================= */

  const translations = {

    ru: {
      navServices: "Услуги",
      navProcess: "Как это работает",
      navCalculator: "Калькулятор",
      navAbout: "О компании",
      navContact: "Контакты",

      request: "Оставить заявку",
      calculate: "Рассчитать стоимость",

      heroTitle:
        "Растаможка и хранение груза — без задержек на границе",

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
      brokerPercent: "Процент услуг брокера",

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
      send: "Отправить заявку",

      cargoPlaceholder:
        "Вес, объём, страна отправления, вид товара",

      contactNote:
        "Контактные данные можно заменить на реальные данные вашей компании.",

      formNote:
        "После подключения Formspree заявки будут поступать на вашу почту.",

      footerText:
        "Таможенное оформление · СВХ · Брокерское сопровождение"
    },


    kz: {
      navServices: "Қызметтер",
      navProcess: "Қалай жұмыс істейді",
      navCalculator: "Калькулятор",
      navAbout: "Компания туралы",
      navContact: "Байланыстар",

      request: "Өтінім қалдыру",
      calculate: "Құнын есептеу",

      heroTitle:
        "Жүкті кедендік рәсімдеу және сақтау — шекарада кідіріссіз",

      heroText:
        "JWS Group кедендік декларациялауды жүргізеді, жүктерді уақытша сақтау қоймасына (СВХ) қабылдайды және жеткізуді шекарадан алушыға дейін сүйемелдейді.",

      onWay: "ЖОЛДА",
      china: "Қытай",
      border: "Шекара",
      weight: "Салмақ",
      status: "Мәртебе",
      inTransit: "Жолда",
      days: "күн",

      servicesTag: "Қызметтер",
      servicesTitle: "Біз жүкпен не істейміз",
      servicesText:
        "Қызметтерді жеке немесе шекарадан алушыға дейін толық цикл ретінде тапсырыс беруге болады.",

      service1Title: "Кедендік декларациялау",
      service1Text:
        "Декларацияны дайындау және беру, баждар мен ҚҚС есептеу, кеден бекетімен жұмыс.",

      service2Title: "Уақытша сақтау қоймасы",
      service2Text:
        "Рәсімдеу кезеңінде жүкті СВХ-ға қабылдау, орналастыру және беру.",

      service3Title: "Кеден брокерінің сүйемелдеуі",
      service3Text:
        "Құжаттарды беруден жүкті шығаруға дейін мәмілені толық сүйемелдеу.",

      service4Title: "ТН ВЭД кодын және мөлшерлемелерді анықтау",
      service4Text:
        "Декларацияны бермес бұрын тауардың дұрыс кодын және қолданыстағы баждар мен ҚҚС мөлшерлемелерін анықтау.",

      processTag: "Процесс",
      processTitle: "Өтінімнен жүкті беруге дейін",
      processText:
        "Жүкті рәсімдеудің төрт негізгі кезеңі.",

      step1: "Өтінім",
      step1Text:
        "Жүк құжаттарын жібересіз, біз ТН ВЭД кодын және алдын ала құнын анықтаймыз.",

      step2: "СВХ-ға қабылдау",
      step2Text:
        "Жүк уақытша сақтау қоймасына түседі, салмағы мен көлемі тіркеледі.",

      step3: "Декларациялау",
      step3Text:
        "Декларация береміз, кедендік баждар мен ҚҚС есептеледі.",

      step4: "Жүкті шығару",
      step4Text:
        "Кеден шығарғаннан кейін жүкті береміз немесе алушыға жеткізуді ұйымдастырамыз.",

      calculatorTag: "Калькулятор",
      calculatorTitle: "Құнын алдын ала есептеңіз",
      calculatorText:
        "Кедендік баж, ҚҚС, СВХ сақтау және брокер қызметтері бір есепте.",

      product: "ТАУАР",
      productCost: "Тауар құны",
      currency: "Валюта",
      exchangeRate: "Теңгеге айырбастау бағамы",
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
      brokerPercent: "Брокер қызметінің пайызы",

      calculation: "ЕСЕП",
      customsValue: "Кедендік құны",
      duty: "Баж",
      vat: "ҚҚС",
      storageCost: "СВХ-да сақтау",
      brokerCost: "Брокер қызметтері",
      total: "Төлеуге барлығы",

      calculatorNote:
        "Есеп алдын ала жасалған. Нақты мөлшерлемелер ТН ВЭД кодына, жеткізу шарттарына және қолданыстағы заңнамаға байланысты.",

      aboutTag: "Компания туралы",
      aboutTitle: "JWS Group",
      aboutText:
        "Қазақстанға импорттық жеткізілімдерді сүйемелдейміз: кедендік рәсімдеу, СВХ-да сақтау және брокерлік сүйемелдеу.",
      contactUs: "Бізбен байланысу",

      about1: "Құжаттар",
      about2: "СВХ",
      about3: "Кеден",
      about4: "Жүкті беру",

      contactTag: "Байланыстар",
      contactTitle: "Өтінім қалдыру",
      contactText:
        "Жүк туралы ақпарат беріңіз — біз сізбен байланысып, рәсімдеу мәліметтерін нақтылаймыз.",

      phone: "Телефон",
      warehouse: "СВХ мекенжайы",
      workingHours: "Жұмыс уақыты",

      name: "Аты-жөні",
      contact: "Телефон немесе email",
      message: "Не рәсімдеу қажет",
      send: "Өтінім жіберу",

      cargoPlaceholder:
        "Салмақ, көлемі, жөнелту елі, тауар түрі",

      contactNote:
        "Байланыс деректерін компанияңыздың нақты деректерімен ауыстыруға болады.",

      formNote:
        "Formspree қосылғаннан кейін өтінімдер электрондық поштаңызға келеді.",

      footerText:
        "Кедендік рәсімдеу · СВХ · Брокерлік сүйемелдеу"
    },


    en: {
      navServices: "Services",
      navProcess: "How it works",
      navCalculator: "Calculator",
      navAbout: "About us",
      navContact: "Contacts",

      request: "Request a quote",
      calculate: "Calculate cost",

      heroTitle:
        "Customs clearance and cargo storage — without border delays",

      heroText:
        "JWS Group handles customs declarations, receives cargo at a temporary storage warehouse and supports shipments from the border to the final recipient.",

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
        "Order individual services or use our complete customs and storage support.",

      service1Title: "Customs declaration",
      service1Text:
        "Preparation and submission of declarations, calculation of duties and VAT, and communication with customs.",

      service2Title: "Temporary storage warehouse",
      service2Text:
        "Cargo reception, storage and release during the customs clearance process.",

      service3Title: "Customs broker support",
      service3Text:
        "Full transaction support from document submission to cargo release.",

      service4Title: "HS / TN VED code classification",
      service4Text:
        "Selection of the correct product code and applicable duty and VAT rates.",

      processTag: "Process",
      processTitle: "From request to cargo release",
      processText:
        "Four key stages of customs clearance.",

      step1: "Request",
      step1Text:
        "Send us the cargo documents and we determine the TN VED code and preliminary cost.",

      step2: "Warehouse reception",
      step2Text:
        "Cargo arrives at the temporary storage warehouse and its weight and volume are recorded.",

      step3: "Customs declaration",
      step3Text:
        "We submit the declaration and calculate customs duties and VAT.",

      step4: "Cargo release",
      step4Text:
        "After customs release, we hand over the cargo or arrange delivery.",

      calculatorTag: "Calculator",
      calculatorTitle: "Calculate the cost in advance",
      calculatorText:
        "Customs duty, VAT, warehouse storage and broker services in one calculation.",

      product: "PRODUCT",
      productCost: "Product value",
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
      brokerPercent: "Broker service percentage",

      calculation: "CALCULATION",
      customsValue: "Customs value",
      duty: "Duty",
      vat: "VAT",
      storageCost: "Temporary storage",
      brokerCost: "Broker services",
      total: "Total",

      calculatorNote:
        "This calculation is indicative. Actual rates depend on the HS / TN VED code, delivery terms and applicable legislation.",

      aboutTag: "About",
      aboutTitle: "JWS Group",
      aboutText:
        "We support import shipments to Kazakhstan: customs clearance, temporary storage and customs broker services.",
      contactUs: "Contact us",

      about1: "Documents",
      about2: "Warehouse",
      about3: "Customs",
      about4: "Cargo release",

      contactTag: "Contacts",
      contactTitle: "Submit a request",
      contactText:
        "Tell us about your cargo — we will contact you and clarify the customs clearance details.",

      phone: "Phone",
      warehouse: "Warehouse address",
      workingHours: "Working hours",

      name: "Name",
      contact: "Phone or email",
      message: "What do you need?",
      send: "Send request",

      cargoPlaceholder:
        "Weight, volume, country of origin, type of goods",

      contactNote:
        "Replace the contact details with your company's actual information.",

      formNote:
        "After connecting Formspree, requests will be sent to your email.",

      footerText:
        "Customs clearance · Temporary storage · Broker support"
    }

  };


  /* =========================
     LANGUAGE FUNCTION
  ========================= */

  function setLanguage(lang) {

    if (!translations[lang]) {
      lang = "ru";
    }

    const dictionary = translations[lang];

    document.documentElement.lang = lang;

    /* Обычный текст */

    document.querySelectorAll("[data-i18n]").forEach(function (element) {

      const key = element.getAttribute("data-i18n");

      if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
        element.textContent = dictionary[key];
      }

    });


    /* Placeholder */

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (element) {

      const key = element.getAttribute("data-i18n-placeholder");

      if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
        element.placeholder = dictionary[key];
      }

    });


    /* Активная кнопка языка */

    document.querySelectorAll(".lang-btn").forEach(function (button) {

      button.classList.toggle(
        "active",
        button.dataset.lang === lang
      );

    });


    /* Сохраняем язык */

    localStorage.setItem("jws-language", lang);


    /* Обновляем подпись брокера */

    updateBrokerLabel();
  }


  /* =========================
     LANGUAGE BUTTONS
  ========================= */

  document.querySelectorAll(".lang-btn").forEach(function (button) {

    button.addEventListener("click", function () {

      setLanguage(button.dataset.lang);

    });

  });


  const savedLanguage =
    localStorage.getItem("jws-language") || "ru";

  setLanguage(savedLanguage);


  /* =========================
     CALCULATOR
  ========================= */

  const $ = function (id) {
    return document.getElementById(id);
  };


  const inputs = {
    value: $("value"),
    currency: $("currency"),
    rate: $("rate"),
    duty: $("duty"),
    vat: $("vat"),
    weight: $("weight"),
    volume: $("volume"),
    storageRate: $("storageRate"),
    days: $("days"),
    brokerValue: $("brokerValue")
  };


  let brokerMode = "fixed";


  const brokerToggle = $("brokerToggle");


  function number(element) {

    if (!element) {
      return 0;
    }

    const value = parseFloat(element.value);

    return Number.isFinite(value)
      ? value
      : 0;
  }


  function formatKZT(value) {

    return Math.round(value)
      .toLocaleString("ru-RU") + " ₸";

  }


  /* =========================
     BROKER LABEL
  ========================= */

  function updateBrokerLabel() {

    const label = $("brokerValueLabel");

    if (!label) {
      return;
    }

    const lang =
      document.documentElement.lang || "ru";

    const dictionary =
      translations[lang] || translations.ru;

    label.textContent =
      brokerMode === "fixed"
        ? dictionary.brokerAmount
        : dictionary.brokerPercent;
  }


  /* =========================
     BROKER TOGGLE
  ========================= */

  if (brokerToggle) {

    brokerToggle.addEventListener("click", function (event) {

      const button =
        event.target.closest("button[data-mode]");

      if (!button) {
        return;
      }

      brokerMode = button.dataset.mode;


      brokerToggle
        .querySelectorAll("button[data-mode]")
        .forEach(function (btn) {

          btn.setAttribute(
            "aria-pressed",
            String(btn === button)
          );

          btn.classList.toggle(
            "active",
            btn === button
          );

        });


      updateBrokerLabel();

      calculate();

    });

  }


  /* =========================
     CALCULATE
  ========================= */

  function calculate() {

    if (!inputs.value) {
      return;
    }


    const currency =
      inputs.currency
        ? inputs.currency.value
        : "KZT";


    const rate =
      currency === "KZT"
        ? 1
        : number(inputs.rate);


    const customsValue =
      number(inputs.value) * rate;


    const duty =
      customsValue *
      (number(inputs.duty) / 100);


    const vat =
      (customsValue + duty) *
      (number(inputs.vat) / 100);


    const basisElement =
      document.querySelector(
        'input[name="basis"]:checked'
      );


    const basis =
      basisElement
        ? basisElement.value
        : "weight";


    const quantity =
      basis === "weight"
        ? number(inputs.weight)
        : number(inputs.volume);


    const storage =
      number(inputs.storageRate) *
      quantity *
      number(inputs.days);


    const brokerRaw =
      number(inputs.brokerValue);


    const broker =
      brokerMode === "fixed"
        ? brokerRaw
        : customsValue *
          (brokerRaw / 100);


    const total =
      customsValue +
      duty +
      vat +
      storage +
      broker;


    if ($("outValue")) {
      $("outValue").textContent =
        formatKZT(customsValue);
    }


    if ($("outDuty")) {
      $("outDuty").textContent =
        formatKZT(duty);
    }


    if ($("outVat")) {
      $("outVat").textContent =
        formatKZT(vat);
    }


    if ($("outStorage")) {
      $("outStorage").textContent =
        formatKZT(storage);
    }


    if ($("outBroker")) {
      $("outBroker").textContent =
        formatKZT(broker);
    }


    if ($("outTotal")) {
      $("outTotal").textContent =
        formatKZT(total);
    }

  }


  /* =========================
     CALCULATOR EVENTS
  ========================= */

  const calcForm =
    $("calcForm");


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


  /* =========================
     CONTACT FORM
  ========================= */

  const contactForm =
    $("contactForm");


  const formStatus =
    $("formStatus");


  if (contactForm) {

    contactForm.addEventListener(
      "submit",
      async function (event) {

        event.preventDefault();


        const submitButton =
          contactForm.querySelector(
            'button[type="submit"]'
          );


        if (submitButton) {
          submitButton.disabled = true;
        }


        if (formStatus) {

          const lang =
            document.documentElement.lang || "ru";

          const sendingText = {
            ru: "Отправляем заявку…",
            kz: "Өтінім жіберілуде…",
            en: "Sending request…"
          };

          formStatus.textContent =
            sendingText[lang] || sendingText.ru;
        }


        try {

          const response =
            await fetch(
              contactForm.action,
              {
                method: "POST",
                body: new FormData(contactForm),
                headers: {
                  Accept: "application/json"
                }
              }
            );


          if (response.ok) {

            if (formStatus) {

              const lang =
                document.documentElement.lang || "ru";

              const successText = {
                ru: "Заявка отправлена. Мы свяжемся с вами в ближайшее время.",
                kz: "Өтінім жіберілді. Жақын арада сізбен байланысамыз.",
                en: "Request sent. We will contact you shortly."
              };

              formStatus.textContent =
                successText[lang] || successText.ru;
            }


            contactForm.reset();

          } else {

            if (formStatus) {

              const lang =
                document.documentElement.lang || "ru";

              const errorText = {
                ru: "Не удалось отправить заявку. Проверьте настройки Formspree.",
                kz: "Өтінімді жіберу мүмкін болмады. Formspree баптауларын тексеріңіз.",
                en: "The request could not be sent. Check your Formspree settings."
              };

              formStatus.textContent =
                errorText[lang] || errorText.ru;
            }

          }

        } catch (error) {

          if (formStatus) {

            const lang =
              document.documentElement.lang || "ru";

            const connectionText = {
              ru: "Ошибка подключения. Проверьте интернет и попробуйте ещё раз.",
              kz: "Қосылым қатесі. Интернетті тексеріп, қайта көріңіз.",
              en: "Connection error. Check your internet connection and try again."
            };

            formStatus.textContent =
              connectionText[lang] || connectionText.ru;
          }

        } finally {

          if (submitButton) {
            submitButton.disabled = false;
          }

        }

      }
    );

  }


  /* =========================
     YEAR
  ========================= */

  const year =
    $("year");

  if (year) {
    year.textContent =
      new Date().getFullYear();
  }

})();
```
