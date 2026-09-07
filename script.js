```javascript
(function () {
  "use strict";

  /* =========================
     MOBILE MENU
  ========================= */

  const header = document.getElementById("siteHeader");
  const menuButton = document.getElementById("menuButton");
  const mainNav = document.getElementById("mainNav");

  if (header && menuButton) {
    menuButton.addEventListener("click", function () {
      const isOpen = header.classList.toggle("open");

      menuButton.setAttribute(
        "aria-expanded",
        String(isOpen)
      );
    });

    if (mainNav) {
      mainNav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
          header.classList.remove("open");
          menuButton.setAttribute("aria-expanded", "false");
        });
      });
    }
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

      leaveRequest: "Оставить заявку",
      calculate: "Рассчитать стоимость",

      heroTitle:
        "Таможенное оформление и хранение груза — без лишних задержек",

      heroText:
        "Помогаем импортёрам пройти таможенное оформление, принять груз на СВХ и организовать выпуск без лишней бюрократии.",

      stat1: "Таможенное оформление",
      stat2: "Склад временного хранения",
      stat3: "Брокерское сопровождение",

      cargo: "ГРУЗ",
      onWay: "В ПУТИ",
      china: "Китай",
      border: "Граница",
      weight: "Вес",
      status: "Статус",
      inTransit: "В пути",
      days: "дня",

      servicesTag: "УСЛУГИ",
      servicesTitle:
        "Полное сопровождение импортного груза",

      servicesText:
        "От подготовки документов до выпуска груза и его выдачи получателю.",

      service1Title:
        "Таможенное декларирование",

      service1Text:
        "Подготовка документов, подача декларации, расчёт таможенных платежей и взаимодействие с таможенными органами.",

      service2Title:
        "Хранение на СВХ",

      service2Text:
        "Приём, размещение и выдача груза на складе временного хранения в период таможенного оформления.",

      service3Title:
        "Брокерское сопровождение",

      service3Text:
        "Сопровождаем поставку от подачи документов до выпуска груза, включая коммуникацию с таможней.",

      service4Title:
        "Код ТН ВЭД",

      service4Text:
        "Помогаем определить код товара и ориентировочные ставки таможенной пошлины и НДС.",

      processTag: "ПРОЦЕСС",
      processTitle: "От заявки до выпуска груза",

      processText:
        "Четыре последовательных этапа работы с поставкой.",

      step1Title: "Заявка",
      step1Text:
        "Получаем информацию о грузе и необходимые документы.",

      step2Title: "Приём на СВХ",
      step2Text:
        "Принимаем груз на склад и фиксируем его основные параметры.",

      step3Title: "Декларирование",
      step3Text:
        "Готовим декларацию и сопровождаем процедуру оформления.",

      step4Title: "Выпуск",
      step4Text:
        "После выпуска организуем выдачу груза получателю.",

      calculatorTag: "КАЛЬКУЛЯТОР",
      calculatorTitle: "Предварительный расчёт",

      calculatorText:
        "Рассчитайте ориентировочную сумму таможенных платежей, хранения и брокерских услуг.",

      product: "Товар",
      productCost: "Стоимость товара",
      currency: "Валюта",
      exchangeRate: "Курс к тенге",
      dutyRate: "Пошлина, %",
      vatRate: "НДС, %",

      storage: "Хранение на СВХ",
      weightKg: "Вес, кг",
      volumeM3: "Объём, м³",
      byWeight: "По весу",
      byVolume: "По объёму",
      storageRate: "Ставка хранения",
      storageDays: "Дней хранения",

      broker: "Брокерские услуги",
      fixedAmount: "Фиксированная сумма",
      percentage: "Процент",
      brokerAmount: "Сумма услуг брокера",

      calculation: "РАСЧЁТ",
      customsValue: "Таможенная стоимость",
      duty: "Пошлина",
      vat: "НДС",
      storageCost: "Хранение на СВХ",
      brokerCost: "Брокерские услуги",
      total: "ИТОГО",

      calculatorNote:
        "Расчёт является ориентировочным. Фактические ставки зависят от кода ТН ВЭД, условий поставки и действующего законодательства.",

      aboutTag: "О КОМПАНИИ",
      aboutTitle: "JWS Group",

      aboutText:
        "Сопровождаем импортные поставки в Казахстан: таможенное оформление, хранение на СВХ и брокерское сопровождение.",

      contactUs: "Связаться с нами",

      about1: "Документы",
      about1Text: "Подготовка документов для оформления груза.",

      about2: "СВХ",
      about2Text: "Приём и хранение груза до выпуска.",

      about3: "Таможня",
      about3Text: "Сопровождение процедуры декларирования.",

      about4: "Выдача",
      about4Text: "Выдача груза после завершения оформления.",

      contactTag: "КОНТАКТЫ",
      contactTitle: "Оставьте заявку",

      contactText:
        "Расскажите о грузе — мы свяжемся с вами и уточним детали оформления.",

      phone: "Телефон",
      warehouse: "Адрес СВХ",
      workingHours: "Режим работы",

      name: "Имя",
      phoneEmail: "Телефон или email",
      cargoDescription: "Информация о грузе",

      cargoPlaceholder:
        "Вес, объём, страна отправления, вид товара",

      send: "Отправить заявку",

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

      leaveRequest: "Өтінім қалдыру",
      calculate: "Құнын есептеу",

      heroTitle:
        "Кедендік рәсімдеу және жүкті сақтау — артық кідіріссіз",

      heroText:
        "Импорттаушыларға кедендік рәсімдеуден өтуге, жүкті СВХ-ға орналастыруға және оны артық бюрократиясыз шығаруға көмектесеміз.",

      stat1: "Кедендік рәсімдеу",
      stat2: "Уақытша сақтау қоймасы",
      stat3: "Брокерлік сүйемелдеу",

      cargo: "ЖҮК",
      onWay: "ЖОЛДА",
      china: "Қытай",
      border: "Шекара",
      weight: "Салмақ",
      status: "Мәртебе",
      inTransit: "Жолда",
      days: "күн",

      servicesTag: "ҚЫЗМЕТТЕР",
      servicesTitle:
        "Импорттық жүкті толық сүйемелдеу",

      servicesText:
        "Құжаттарды дайындаудан бастап жүкті шығаруға және алушыға беруге дейін.",

      service1Title:
        "Кедендік декларациялау",

      service1Text:
        "Құжаттарды дайындау, декларация беру, кедендік төлемдерді есептеу және кеден органдарымен жұмыс.",

      service2Title:
        "СВХ-да сақтау",

      service2Text:
        "Кедендік рәсімдеу кезеңінде жүкті уақытша сақтау қоймасына қабылдау, орналастыру және беру.",

      service3Title:
        "Брокерлік сүйемелдеу",

      service3Text:
        "Құжаттарды беруден бастап жүкті шығаруға дейінгі жеткізуді толық сүйемелдеу.",

      service4Title:
        "ТН ВЭД коды",

      service4Text:
        "Тауар кодын және кедендік баж бен ҚҚС мөлшерлемелерін анықтауға көмектесеміз.",

      processTag: "ПРОЦЕСС",
      processTitle:
        "Өтінімнен жүкті шығаруға дейін",

      processText:
        "Жеткізумен жұмыс істеудің төрт негізгі кезеңі.",

      step1Title: "Өтінім",
      step1Text:
        "Жүк туралы ақпарат пен қажетті құжаттарды аламыз.",

      step2Title: "СВХ-ға қабылдау",
      step2Text:
        "Жүкті қоймаға қабылдап, негізгі параметрлерін тіркейміз.",

      step3Title: "Декларациялау",
      step3Text:
        "Декларацияны дайындап, рәсімдеу процесін сүйемелдейміз.",

      step4Title: "Шығару",
      step4Text:
        "Кеден шығарғаннан кейін жүкті алушыға береміз.",

      calculatorTag: "КАЛЬКУЛЯТОР",
      calculatorTitle:
        "Алдын ала есептеу",

      calculatorText:
        "Кедендік төлемдер, сақтау және брокерлік қызметтердің болжамды құнын есептеңіз.",

      product: "Тауар",
      productCost: "Тауар құны",
      currency: "Валюта",
      exchangeRate: "Теңгеге бағам",
      dutyRate: "Баж, %",
      vatRate: "ҚҚС, %",

      storage: "СВХ-да сақтау",
      weightKg: "Салмақ, кг",
      volumeM3: "Көлемі, м³",
      byWeight: "Салмағы бойынша",
      byVolume: "Көлемі бойынша",
      storageRate: "Сақтау мөлшерлемесі",
      storageDays: "Сақтау күндері",

      broker: "Брокерлік қызметтер",
      fixedAmount: "Тұрақты сома",
      percentage: "Пайыз",
      brokerAmount: "Брокер қызметінің сомасы",

      calculation: "ЕСЕП",
      customsValue: "Кедендік құн",
      duty: "Баж",
      vat: "ҚҚС",
      storageCost: "СВХ-да сақтау",
      brokerCost: "Брокерлік қызметтер",
      total: "БАРЛЫҒЫ",

      calculatorNote:
        "Есеп алдын ала болып табылады. Нақты мөлшерлемелер ТН ВЭД кодына, жеткізу шарттарына және қолданыстағы заңнамаға байланысты.",

      aboutTag: "КОМПАНИЯ ТУРАЛЫ",
      aboutTitle: "JWS Group",

      aboutText:
        "Қазақстанға импорттық жеткізілімдерді сүйемелдейміз: кедендік рәсімдеу, СВХ-да сақтау және брокерлік сүйемелдеу.",

      contactUs: "Бізбен байланысу",

      about1: "Құжаттар",
      about1Text: "Жүкті рәсімдеуге қажетті құжаттарды дайындау.",

      about2: "СВХ",
      about2Text: "Жүкті қабылдау және шығарылғанға дейін сақтау.",

      about3: "Кеден",
      about3Text: "Декларациялау процесін сүйемелдеу.",

      about4: "Беру",
      about4Text: "Рәсімдеу аяқталғаннан кейін жүкті беру.",

      contactTag: "БАЙЛАНЫСТАР",
      contactTitle: "Өтінім қалдырыңыз",

      contactText:
        "Жүк туралы ақпарат беріңіз — біз сізбен байланысып, рәсімдеу мәліметтерін нақтылаймыз.",

      phone: "Телефон",
      warehouse: "СВХ мекенжайы",
      workingHours: "Жұмыс уақыты",

      name: "Аты-жөні",
      phoneEmail: "Телефон немесе email",
      cargoDescription: "Жүк туралы ақпарат",

      cargoPlaceholder:
        "Салмақ, көлем, жөнелту елі, тауар түрі",

      send: "Өтінім жіберу",

      formNote:
        "Formspree қосылғаннан кейін өтінімдер электрондық поштаңызға түседі.",

      footerText:
        "Кедендік рәсімдеу · СВХ · Брокерлік сүйемелдеу"
    },


    en: {
      navServices: "Services",
      navProcess: "How it works",
      navCalculator: "Calculator",
      navAbout: "About us",
      navContact: "Contacts",

      leaveRequest: "Request a quote",
      calculate: "Calculate cost",

      heroTitle:
        "Customs clearance and cargo storage — without unnecessary delays",

      heroText:
        "We help importers complete customs clearance, receive cargo at a temporary storage warehouse and arrange release without unnecessary bureaucracy.",

      stat1: "Customs clearance",
      stat2: "Temporary storage warehouse",
      stat3: "Customs broker support",

      cargo: "CARGO",
      onWay: "IN TRANSIT",
      china: "China",
      border: "Border",
      weight: "Weight",
      status: "Status",
      inTransit: "In transit",
      days: "days",

      servicesTag: "SERVICES",
      servicesTitle:
        "Complete support for imported cargo",

      servicesText:
        "From document preparation to cargo release and delivery to the recipient.",

      service1Title:
        "Customs declaration",

      service1Text:
        "Document preparation, declaration submission, customs payment calculation and communication with customs authorities.",

      service2Title:
        "Temporary storage warehouse",

      service2Text:
        "Cargo reception, storage and release during the customs clearance process.",

      service3Title:
        "Customs broker support",

      service3Text:
        "We support the shipment from document submission to cargo release, including communication with customs.",

      service4Title:
        "TN VED / HS code",

      service4Text:
        "We help determine the correct product code and applicable customs duty and VAT rates.",

      processTag: "PROCESS",
      processTitle:
        "From request to cargo release",

      processText:
        "Four consecutive stages of working with your shipment.",

      step1Title: "Request",
      step1Text:
        "We receive information about the cargo and the required documents.",

      step2Title: "Warehouse reception",
      step2Text:
        "We receive the cargo at the warehouse and record its main parameters.",

      step3Title: "Customs declaration",
      step3Text:
        "We prepare the declaration and support the customs clearance procedure.",

      step4Title: "Release",
      step4Text:
        "After customs release, we arrange handover of the cargo to the recipient.",

      calculatorTag: "CALCULATOR",
      calculatorTitle:
        "Preliminary calculation",

      calculatorText:
        "Calculate the estimated cost of customs payments, storage and broker services.",

      product: "Product",
      productCost: "Product value",
      currency: "Currency",
      exchangeRate: "Exchange rate to KZT",
      dutyRate: "Duty, %",
      vatRate: "VAT, %",

      storage: "Temporary storage",
      weightKg: "Weight, kg",
      volumeM3: "Volume, m³",
      byWeight: "By weight",
      byVolume: "By volume",
      storageRate: "Storage rate",
      storageDays: "Storage days",

      broker: "Broker services",
      fixedAmount: "Fixed amount",
      percentage: "Percentage",
      brokerAmount: "Broker service amount",

      calculation: "CALCULATION",
      customsValue: "Customs value",
      duty: "Customs duty",
      vat: "VAT",
      storageCost: "Warehouse storage",
      brokerCost: "Broker services",
      total: "TOTAL",

      calculatorNote:
        "The calculation is preliminary. Actual rates depend on the TN VED code, delivery terms and applicable legislation.",

      aboutTag: "ABOUT",
      aboutTitle: "JWS Group",

      aboutText:
        "We support import shipments to Kazakhstan: customs clearance, temporary storage and customs broker services.",

      contactUs: "Contact us",

      about1: "Documents",
      about1Text: "Preparation of documents required for cargo clearance.",

      about2: "Warehouse",
      about2Text: "Cargo reception and storage until release.",

      about3: "Customs",
      about3Text: "Support throughout the customs declaration process.",

      about4: "Release",
      about4Text: "Cargo handover after customs clearance is completed.",

      contactTag: "CONTACTS",
      contactTitle: "Submit a request",

      contactText:
        "Tell us about your cargo — we will contact you and clarify the clearance details.",

      phone: "Phone",
      warehouse: "Warehouse address",
      workingHours: "Working hours",

      name: "Name",
      phoneEmail: "Phone or email",
      cargoDescription: "Cargo information",

      cargoPlaceholder:
        "Weight, volume, country of origin, type of goods",

      send: "Send request",

      formNote:
        "After Formspree is connected, requests will be delivered to your email.",

      footerText:
        "Customs clearance · Temporary storage · Broker support"
    }

  };


  /* =========================
     LANGUAGE FUNCTIONS
  ========================= */

  let currentLanguage = "ru";

  function setLanguage(lang) {

    if (!translations[lang]) {
      lang = "ru";
    }

    currentLanguage = lang;

    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (element) {

      const key = element.getAttribute("data-i18n");

      if (
        translations[lang][key] !== undefined
      ) {
        element.textContent =
          translations[lang][key];
      }

    });


    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (element) {

      const key =
        element.getAttribute(
          "data-i18n-placeholder"
        );

      if (
        translations[lang][key] !== undefined
      ) {
        element.placeholder =
          translations[lang][key];
      }

    });


    document.querySelectorAll(".lang-btn").forEach(function (button) {

      button.classList.toggle(
        "active",
        button.dataset.lang === lang
      );

    });


    localStorage.setItem(
      "jws-language",
      lang
    );


    updateBrokerLabel();
  }


  document.querySelectorAll(".lang-btn").forEach(function (button) {

    button.addEventListener(
      "click",
      function () {

        setLanguage(
          button.dataset.lang
        );

      }
    );

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

  const brokerButtons =
    document.querySelectorAll(
      ".broker-btn"
    );


  function number(element) {

    if (!element) {
      return 0;
    }

    const value =
      parseFloat(element.value);

    return Number.isFinite(value)
      ? value
      : 0;
  }


  function formatKZT(value) {

    return Math.round(value)
      .toLocaleString("ru-RU") + " ₸";

  }


  function updateBrokerLabel() {

    const label =
      $("brokerLabel");

    if (!label) {
      return;
    }

    const key =
      brokerMode === "fixed"
        ? "brokerAmount"
        : "percentage";

    if (translations[currentLanguage][key]) {

      label.textContent =
        brokerMode === "fixed"
          ? translations[currentLanguage].brokerAmount
          : translations[currentLanguage].percentage;

    }

  }


  brokerButtons.forEach(function (button) {

    button.addEventListener(
      "click",
      function () {

        brokerMode =
          button.dataset.mode || "fixed";


        brokerButtons.forEach(
          function (btn) {

            btn.classList.toggle(
              "active",
              btn === button
            );

          }
        );


        updateBrokerLabel();

        calculate();

      }
    );

  });


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
      (
        number(inputs.duty) / 100
      );


    const vat =
      (
        customsValue + duty
      ) *
      (
        number(inputs.vat) / 100
      );


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


  const calculator =
    document.querySelector(
      ".calculator"
    );


  if (calculator) {

    calculator.addEventListener(
      "input",
      calculate
    );

    calculator.addEventListener(
      "change",
      calculate
    );

  }


  calculate();


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
          $("submitButton");


        if (submitButton) {
          submitButton.disabled = true;
        }


        if (formStatus) {

          formStatus.textContent =
            currentLanguage === "kz"
              ? "Өтінім жіберілуде…"
              : currentLanguage === "en"
                ? "Sending request…"
                : "Отправляем заявку…";

        }


        try {

          const response =
            await fetch(
              contactForm.action,
              {
                method: "POST",

                body:
                  new FormData(
                    contactForm
                  ),

                headers: {
                  Accept:
                    "application/json"
                }
              }
            );


          if (response.ok) {

            if (formStatus) {

              formStatus.textContent =
                currentLanguage === "kz"
                  ? "Өтінім жіберілді. Жақын уақытта сізбен байланысамыз."
                  : currentLanguage === "en"
                    ? "Request sent. We will contact you shortly."
                    : "Заявка отправлена. Мы свяжемся с вами в ближайшее время.";

            }


            contactForm.reset();

            calculate();

          } else {

            if (formStatus) {

              formStatus.textContent =
                currentLanguage === "kz"
                  ? "Өтінімді жіберу мүмкін болмады. Formspree баптауларын тексеріңіз."
                  : currentLanguage === "en"
                    ? "The request could not be sent. Check your Formspree settings."
                    : "Не удалось отправить заявку. Проверьте настройки Formspree.";

            }

          }

        } catch (error) {

          if (formStatus) {

            formStatus.textContent =
              currentLanguage === "kz"
                ? "Қосылу қатесі. Интернетті тексеріп, қайталап көріңіз."
                : currentLanguage === "en"
                  ? "Connection error. Check your internet connection and try again."
                  : "Ошибка подключения. Проверьте интернет и попробуйте ещё раз.";

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
     CURRENT YEAR
  ========================= */

  const year =
    $("year");

  if (year) {
    year.textContent =
      new Date().getFullYear();
  }

})();
```
