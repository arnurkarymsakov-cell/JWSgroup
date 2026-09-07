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

      aboutTag: "О компании",
      aboutTitle: "JWS Group",

      contactTag: "Контакты",
      contactTitle: "Оставить заявку",

      name: "Имя",
      contact: "Телефон или email",
      message: "Что нужно оформить",
      send: "Отправить заявку",

      weight: "Вес",
      volume: "Объём",
      days: "Дней хранения",
      duty: "Ставка пошлины",
      vat: "Ставка НДС",
      broker: "Услуги брокера",

      total: "Итого к оплате"
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

      service4Title: "ТН ВЭД кодын анықтау",
      service4Text:
        "Декларацияны бермес бұрын тауардың дұрыс кодын және қолданыстағы мөлшерлемелерді анықтау.",

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

      aboutTag: "Компания туралы",
      aboutTitle: "JWS Group",

      contactTag: "Байланыстар",
      contactTitle: "Өтінім қалдыру",

      name: "Аты-жөні",
      contact: "Телефон немесе email",
      message: "Не рәсімдеу қажет",
      send: "Өтінім жіберу",

      weight: "Салмақ",
      volume: "Көлем",
      days: "Сақтау күндері",
      duty: "Баж мөлшерлемесі",
      vat: "ҚҚС мөлшерлемесі",
      broker: "Брокер қызметтері",

      total: "Төлеуге барлығы"
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

      aboutTag: "About",
      aboutTitle: "JWS Group",

      contactTag: "Contacts",
      contactTitle: "Submit a request",

      name: "Name",
      contact: "Phone or email",
      message: "What do you need?",
      send: "Send request",

      weight: "Weight",
      volume: "Volume",
      days: "Storage days",
      duty: "Duty rate",
      vat: "VAT rate",
      broker: "Broker services",

      total: "Total"
    }

  };


  function setLanguage(lang) {

    if (!translations[lang]) {
      lang = "ru";
    }

    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (element) {

      const key = element.getAttribute("data-i18n");

      if (translations[lang][key]) {
        element.textContent = translations[lang][key];
      }

    });

    document.querySelectorAll(".lang-btn").forEach(function (button) {
      button.classList.toggle(
        "active",
        button.dataset.lang === lang
      );
    });

    localStorage.setItem("jws-language", lang);
  }


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
  const brokerValueLabel = $("brokerValueLabel");

  if (brokerToggle) {

    brokerToggle.addEventListener("click", function (event) {

      const button =
        event.target.closest("button[data-mode]");

      if (!button) return;

      brokerMode = button.dataset.mode;

      brokerToggle
        .querySelectorAll("button")
        .forEach(function (btn) {

          btn.setAttribute(
            "aria-pressed",
            String(btn === button)
          );

        });

      if (brokerValueLabel) {

        brokerValueLabel.textContent =
          brokerMode === "fixed"
            ? "Сумма услуг брокера"
            : "Процент услуг брокера";

      }

      calculate();

    });

  }


  function number(element) {

    if (!element) return 0;

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


  function calculate() {

    if (!inputs.value) return;

    const currency =
      inputs.currency.value;

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


    if ($("outValue"))
      $("outValue").textContent =
        formatKZT(customsValue);

    if ($("outDuty"))
      $("outDuty").textContent =
        formatKZT(duty);

    if ($("outVat"))
      $("outVat").textContent =
        formatKZT(vat);

    if ($("outStorage"))
      $("outStorage").textContent =
        formatKZT(storage);

    if ($("outBroker"))
      $("outBroker").textContent =
        formatKZT(broker);

    if ($("outTotal"))
      $("outTotal").textContent =
        formatKZT(total);

  }


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
          formStatus.textContent =
            "Отправляем заявку…";
        }

        try {

          const response =
            await fetch(
              contactForm.action,
              {
                method: "POST",
                body: new FormData(contactForm),
                headers: {
                  Accept:
                    "application/json"
                }
              }
            );

          if (response.ok) {

            if (formStatus) {
              formStatus.textContent =
                "Заявка отправлена. Мы свяжемся с вами в ближайшее время.";
            }

            contactForm.reset();

          } else {

            if (formStatus) {
              formStatus.textContent =
                "Не удалось отправить заявку. Проверьте настройки Formspree.";
            }

          }

        } catch (error) {

          if (formStatus) {
            formStatus.textContent =
              "Ошибка подключения. Проверьте интернет и попробуйте ещё раз.";
          }

        } finally {

          if (submitButton) {
            submitButton.disabled = false;
          }

        }

      }
    );

  }

})();
