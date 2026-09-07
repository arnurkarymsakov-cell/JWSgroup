document.addEventListener("DOMContentLoaded", () => {

/* =========================
MOBILE MENU
========================= */

const menuButton = document.getElementById("menuButton");
const mainNav = document.getElementById("mainNav");

if (menuButton && mainNav) {
menuButton.addEventListener("click", () => {
mainNav.classList.toggle("open");
});

```
mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
  });
});
```

}

/* =========================
TRANSLATIONS
========================= */

const translations = {

```
ru: {
  navServices: "Услуги",
  navProcess: "Как это работает",
  navCalculator: "Калькулятор",
  navAbout: "О компании",
  navContact: "Контакты",

  leaveRequest: "Оставить заявку",
  calculate: "Рассчитать стоимость",

  heroTitle: "Таможенное оформление и хранение груза — без лишних задержек",
  heroText: "Помогаем импортёрам пройти таможенное оформление, принять груз на СВХ и организовать выпуск без лишней бюрократии.",

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
  servicesTitle: "Полное сопровождение импортного груза",
  servicesText: "От подготовки документов до выпуска груза и его выдачи получателю.",

  service1Title: "Таможенное декларирование",
  service1Text: "Подготовка документов, подача декларации, расчёт таможенных платежей и взаимодействие с таможенными органами.",

  service2Title: "Хранение на СВХ",
  service2Text: "Приём, размещение и выдача груза на складе временного хранения в период таможенного оформления.",

  service3Title: "Брокерское сопровождение",
  service3Text: "Сопровождаем поставку от подачи документов до выпуска груза, включая коммуникацию с таможней.",

  service4Title: "Код ТН ВЭД",
  service4Text: "Помогаем определить код товара и ориентировочные ставки таможенной пошлины и НДС.",

  processTag: "ПРОЦЕСС",
  processTitle: "От заявки до выпуска груза",
  processText: "Четыре последовательных этапа работы с поставкой.",

  step1Title: "Заявка",
  step1Text: "Получаем информацию о грузе и необходимые документы.",

  step2Title: "Приём на СВХ",
  step2Text: "Принимаем груз на склад и фиксируем его основные параметры.",

  step3Title: "Декларирование",
  step3Text: "Готовим декларацию и сопровождаем процедуру оформления.",

  step4Title: "Выпуск",
  step4Text: "После выпуска организуем выдачу груза получателю.",

  calculatorTag: "КАЛЬКУЛЯТОР",
  calculatorTitle: "Предварительный расчёт",
  calculatorText: "Рассчитайте ориентировочную сумму таможенных платежей, хранения и брокерских услуг.",

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

  calculatorNote: "Расчёт является ориентировочным. Фактические ставки зависят от кода ТН ВЭД, условий поставки и действующего законодательства.",

  aboutTag: "О КОМПАНИИ",
  aboutTitle: "JWS Group",
  aboutText: "Сопровождаем импортные поставки в Казахстан: таможенное оформление, хранение на СВХ и брокерское сопровождение.",
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
  contactText: "Расскажите о грузе — мы свяжемся с вами и уточним детали оформления.",

  phone: "Телефон",
  warehouse: "Адрес СВХ",
  workingHours: "Режим работы",
  name: "Имя",
  phoneEmail: "Телефон или email",
  cargoDescription: "Информация о грузе",

  cargoPlaceholder: "Вес, объём, страна отправления, вид товара",

  send: "Отправить заявку",

  formNote: "После подключения Formspree заявки будут поступать на вашу почту.",

  footerText: "Таможенное оформление · СВХ · Брокерское сопровождение"
},


kz: {
  navServices: "Қызметтер",
  navProcess: "Қалай жұмыс істейді",
  navCalculator: "Калькулятор",
  navAbout: "Компания туралы",
  navContact: "Байланыс",

  leaveRequest: "Өтінім қалдыру",
  calculate: "Құнын есептеу",

  heroTitle: "Кедендік рәсімдеу және жүкті сақтау — артық кідіріссіз",
  heroText: "Импорттаушыларға кедендік рәсімдеуден өтуге, жүкті уақытша сақтау қоймасына орналастыруға және шығаруды ұйымдастыруға көмектесеміз.",

  stat1: "Кедендік рәсімдеу",
  stat2: "Уақытша сақтау қоймасы",
  stat3: "Кеден брокерінің сүйемелдеуі",

  cargo: "ЖҮК",
  onWay: "ЖОЛДА",
  china: "Қытай",
  border: "Шекара",
  weight: "Салмақ",
  status: "Мәртебе",
  inTransit: "Жолда",
  days: "күн",

  servicesTag: "ҚЫЗМЕТТЕР",
  servicesTitle: "Импорттық жүкті толық сүйемелдеу",
  servicesText: "Құжаттарды дайындаудан жүкті шығаруға және алушыға беруге дейін.",

  service1Title: "Кедендік декларациялау",
  service1Text: "Құжаттарды дайындау, декларацияны тапсыру, кедендік төлемдерді есептеу және кеден органдарымен жұмыс.",

  service2Title: "Уақытша сақтау қоймасында сақтау",
  service2Text: "Кедендік рәсімдеу кезеңінде жүкті қабылдау, орналастыру және беру.",

  service3Title: "Брокерлік сүйемелдеу",
  service3Text: "Құжаттарды тапсырудан бастап жүк шығарылғанға дейін жеткізуді сүйемелдейміз.",

  service4Title: "СЭҚ ТН коды",
  service4Text: "Тауардың кодын және кедендік баж бен ҚҚС мөлшерлемелерін анықтауға көмектесеміз.",

  processTag: "ПРОЦЕСС",
  processTitle: "Өтінімнен жүкті шығаруға дейін",
  processText: "Жеткізумен жұмыс істеудің төрт негізгі кезеңі.",

  step1Title: "Өтінім",
  step1Text: "Жүк туралы ақпарат пен қажетті құжаттарды аламыз.",

  step2Title: "Уақытша сақтау қоймасына қабылдау",
  step2Text: "Жүкті қоймаға қабылдап, негізгі параметрлерін тіркейміз.",

  step3Title: "Декларациялау",
  step3Text: "Декларацияны дайындап, кедендік рәсімдеу процесін сүйемелдейміз.",

  step4Title: "Шығару",
  step4Text: "Кеденнен шығарылғаннан кейін жүкті алушыға беруді ұйымдастырамыз.",

  calculatorTag: "КАЛЬКУЛЯТОР",
  calculatorTitle: "Алдын ала есептеу",
  calculatorText: "Кедендік төлемдердің, сақтау құнының және брокерлік қызметтердің шамамен құнын есептеңіз.",

  product: "Тауар",
  productCost: "Тауар құны",
  currency: "Валюта",
  exchangeRate: "Теңгеге бағам",
  dutyRate: "Баж, %",
  vatRate: "ҚҚС, %",

  storage: "Уақытша сақтау қоймасы",
  weightKg: "Салмақ, кг",
  volumeM3: "Көлем, м³",
  byWeight: "Салмақ бойынша",
  byVolume: "Көлем бойынша",
  storageRate: "Сақтау мөлшерлемесі",
  storageDays: "Сақтау күндері",

  broker: "Брокерлік қызметтер",
  fixedAmount: "Тұрақты сома",
  percentage: "Пайыз",
  brokerAmount: "Брокер қызметінің сомасы",

  calculation: "ЕСЕП",
  customsValue: "Кедендік құн",
  duty: "Кедендік баж",
  vat: "ҚҚС",
  storageCost: "Қоймада сақтау",
  brokerCost: "Брокерлік қызмет",
  total: "БАРЛЫҒЫ",

  calculatorNote: "Есеп алдын ала болып табылады. Нақты мөлшерлемелер СЭҚ ТН кодына, жеткізу шарттарына және қолданыстағы заңнамаға байланысты.",

  aboutTag: "КОМПАНИЯ ТУРАЛЫ",
  aboutTitle: "JWS Group",
  aboutText: "Қазақстанға импорттық жеткізілімдерді сүйемелдейміз: кедендік рәсімдеу, уақытша сақтау және брокерлік қызмет.",
  contactUs: "Бізбен байланысу",

  about1: "Құжаттар",
  about1Text: "Жүкті рәсімдеуге қажетті құжаттарды дайындау.",
  about2: "Уақытша сақтау",
  about2Text: "Жүкті шығарылғанға дейін қабылдау және сақтау.",
  about3: "Кеден",
  about3Text: "Декларациялау рәсімін сүйемелдеу.",
  about4: "Беру",
  about4Text: "Рәсімдеу аяқталғаннан кейін жүкті алушыға беру.",

  contactTag: "БАЙЛАНЫС",
  contactTitle: "Өтінім қалдырыңыз",
  contactText: "Жүк туралы ақпарат беріңіз — біз сізбен байланысып, рәсімдеу мәліметтерін нақтылаймыз.",

  phone: "Телефон",
  warehouse: "Уақытша сақтау қоймасының мекенжайы",
  workingHours: "Жұмыс уақыты",
  name: "Аты-жөні",
  phoneEmail: "Телефон немесе email",
  cargoDescription: "Жүк туралы ақпарат",

  cargoPlaceholder: "Салмағы, көлемі, жөнелту елі, тауар түрі",

  send: "Өтінім жіберу",

  formNote: "Formspree қосылғаннан кейін өтінімдер электрондық поштаңызға түседі.",

  footerText: "Кедендік рәсімдеу · Уақытша сақтау · Брокерлік сүйемелдеу"
},


en: {
  navServices: "Services",
  navProcess: "How it works",
  navCalculator: "Calculator",
  navAbout: "About",
  navContact: "Contacts",

  leaveRequest: "Request a quote",
  calculate: "Calculate cost",

  heroTitle: "Customs clearance and cargo storage — without unnecessary delays",
  heroText: "We help importers complete customs clearance, receive cargo at a temporary storage warehouse and organize release without unnecessary bureaucracy.",

  stat1: "Customs clearance",
  stat2: "Temporary storage",
  stat3: "Customs brokerage",

  cargo: "CARGO",
  onWay: "IN TRANSIT",
  china: "China",
  border: "Border",
  weight: "Weight",
  status: "Status",
  inTransit: "In transit",
  days: "days",

  servicesTag: "SERVICES",
  servicesTitle: "Full support for imported cargo",
  servicesText: "From document preparation to cargo release and delivery to the recipient.",

  service1Title: "Customs declaration",
  service1Text: "Document preparation, declaration filing, customs payment calculation and communication with customs authorities.",

  service2Title: "Temporary storage",
  service2Text: "Cargo receiving, storage and release during the customs clearance process.",

  service3Title: "Customs brokerage",
  service3Text: "We support the shipment from document filing to cargo release, including communication with customs.",

  service4Title: "HS / TN VED code",
  service4Text: "We help determine the correct product code and indicative customs duty and VAT rates.",

  processTag: "PROCESS",
  processTitle: "From request to cargo release",
  processText: "Four clear stages for handling your shipment.",

  step1Title: "Request",
  step1Text: "We receive cargo information and the required documents.",

  step2Title: "Warehouse",
  step2Text: "Cargo is received and its main parameters are recorded.",

  step3Title: "Declaration",
  step3Text: "We prepare the declaration and support the customs clearance process.",

  step4Title: "Release",
  step4Text: "After customs release, we organize cargo pickup or delivery.",

  calculatorTag: "CALCULATOR",
  calculatorTitle: "Preliminary estimate",
  calculatorText: "Estimate customs payments, storage costs and brokerage services.",

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

  broker: "Brokerage services",
  fixedAmount: "Fixed amount",
  percentage: "Percentage",
  brokerAmount: "Broker service amount",

  calculation: "CALCULATION",
  customsValue: "Customs value",
  duty: "Customs duty",
  vat: "VAT",
  storageCost: "Storage",
  brokerCost: "Brokerage",
  total: "TOTAL",

  calculatorNote: "This is an indicative calculation. Actual rates depend on the HS/TN VED code, delivery terms and applicable legislation.",

  aboutTag: "ABOUT",
  aboutTitle: "JWS Group",
  aboutText: "We support import shipments to Kazakhstan: customs clearance, temporary storage and customs brokerage.",
  contactUs: "Contact us",

  about1: "Documents",
  about1Text: "Preparation of documents required for cargo clearance.",
  about2: "Storage",
  about2Text: "Cargo receiving and storage until release.",
  about3: "Customs",
  about3Text: "Support throughout the customs declaration process.",
  about4: "Release",
  about4Text: "Cargo release after customs clearance.",

  contactTag: "CONTACTS",
  contactTitle: "Send a request",
  contactText: "Tell us about your cargo — we will contact you and clarify the clearance details.",

  phone: "Phone",
  warehouse: "Warehouse address",
  workingHours: "Working hours",
  name: "Name",
  phoneEmail: "Phone or email",
  cargoDescription: "Cargo information",

  cargoPlaceholder: "Weight, volume, country of origin, type of goods",

  send: "Send request",

  formNote: "After connecting Formspree, requests will be delivered to your email.",

  footerText: "Customs clearance · Temporary storage · Customs brokerage"
}
```

};

/* =========================
LANGUAGE
========================= */

let currentLanguage = localStorage.getItem("jws-language") || "ru";

function setLanguage(language) {

```
if (!translations[language]) {
  language = "ru";
}

currentLanguage = language;

document.documentElement.lang =
  language === "kz" ? "kk" : language;

document.querySelectorAll("[data-i18n]").forEach(element => {

  const key = element.dataset.i18n;

  if (translations[language][key]) {
    element.textContent = translations[language][key];
  }

});


document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {

  const key = element.dataset.i18nPlaceholder;

  if (translations[language][key]) {
    element.placeholder = translations[language][key];
  }

});


document.querySelectorAll(".lang-btn").forEach(button => {
  button.classList.toggle(
    "active",
    button.dataset.lang === language
  );
});


if (document.getElementById("brokerLabel")) {
  document.getElementById("brokerLabel").textContent =
    language === "ru"
      ? "Сумма услуг брокера"
      : language === "kz"
        ? "Брокер қызметінің сомасы"
        : "Broker service amount";
}

localStorage.setItem("jws-language", language);

updatePageTitle(language);
```

}

function updatePageTitle(language) {

```
const titles = {
  ru: "JWS Group — таможенное оформление и СВХ",
  kz: "JWS Group — кедендік рәсімдеу және уақытша сақтау",
  en: "JWS Group — customs clearance and temporary storage"
};

document.title = titles[language];
```

}

document.querySelectorAll(".lang-btn").forEach(button => {

```
button.addEventListener("click", () => {
  setLanguage(button.dataset.lang);
});
```

});

/* =========================
CALCULATOR
========================= */

const get = id => document.getElementById(id);

const valueInput = get("value");
const currencyInput = get("currency");
const rateInput = get("rate");

const dutyInput = get("duty");
const vatInput = get("vat");

const weightInput = get("weight");
const volumeInput = get("volume");

const storageRateInput = get("storageRate");
const daysInput = get("days");

const brokerValueInput = get("brokerValue");

const outValue = get("outValue");
const outDuty = get("outDuty");
const outVat = get("outVat");
const outStorage = get("outStorage");
const outBroker = get("outBroker");
const outTotal = get("outTotal");

let brokerMode = "fixed";

function number(input) {

```
const value = parseFloat(input.value);

return Number.isFinite(value) ? value : 0;
```

}

function money(value) {

```
return Math.round(value).toLocaleString(
  currentLanguage === "en" ? "en-US" : "ru-RU"
) + " ₸";
```

}

function calculate() {

```
const currency = currencyInput.value;

const rate =
  currency === "KZT"
    ? 1
    : number(rateInput);

const customsValue =
  number(valueInput) * rate;

const duty =
  customsValue *
  (number(dutyInput) / 100);

const vat =
  (customsValue + duty) *
  (number(vatInput) / 100);

const basis =
  document.querySelector(
    'input[name="basis"]:checked'
  )?.value || "weight";

const quantity =
  basis === "weight"
    ? number(weightInput)
    : number(volumeInput);

const storage =
  number(storageRateInput) *
  quantity *
  number(daysInput);

const brokerRaw =
  number(brokerValueInput);

const broker =
  brokerMode === "fixed"
    ? brokerRaw
    : customsValue * (brokerRaw / 100);

const total =
  customsValue +
  duty +
  vat +
  storage +
  broker;


outValue.textContent = money(customsValue);
outDuty.textContent = money(duty);
outVat.textContent = money(vat);
outStorage.textContent = money(storage);
outBroker.textContent = money(broker);
outTotal.textContent = money(total);
```

}

document.querySelectorAll(
"#calculator input, #calculator select"
).forEach(input => {

```
input.addEventListener("input", calculate);
input.addEventListener("change", calculate);
```

});

document.querySelectorAll(".broker-btn").forEach(button => {

```
button.addEventListener("click", () => {

  document.querySelectorAll(".broker-btn")
    .forEach(btn => btn.classList.remove("active"));

  button.classList.add("active");

  brokerMode = button.dataset.mode;

  brokerValueInput.step =
    brokerMode === "fixed"
      ? "1"
      : "0.1";

  const label =
    document.getElementById("brokerLabel");

  if (brokerMode === "percent") {

    if (currentLanguage === "ru") {
      label.textContent = "Процент услуг брокера";
    }

    if (currentLanguage === "kz") {
      label.textContent = "Брокер қызметінің пайызы";
    }

    if (currentLanguage === "en") {
      label.textContent = "Broker service percentage";
    }

  } else {

    if (currentLanguage === "ru") {
      label.textContent = "Сумма услуг брокера";
    }

    if (currentLanguage === "kz") {
      label.textContent = "Брокер қызметінің сомасы";
    }

    if (currentLanguage === "en") {
      label.textContent = "Broker service amount";
    }

  }

  calculate();

});
```

});

/* =========================
CONTACT FORM
========================= */

const contactForm =
document.getElementById("contactForm");

const formStatus =
document.getElementById("formStatus");

const submitButton =
document.getElementById("submitButton");

if (contactForm) {

```
contactForm.addEventListener("submit", async event => {

  event.preventDefault();

  submitButton.disabled = true;

  const sendingText = {
    ru: "Отправляем заявку…",
    kz: "Өтінім жіберілуде…",
    en: "Sending request…"
  };

  formStatus.textContent =
    sendingText[currentLanguage];


  try {

    const response = await fetch(
      contactForm.action,
      {
        method: "POST",
        body: new FormData(contactForm),
        headers: {
          "Accept": "application/json"
        }
      }
    );


    if (response.ok) {

      const successText = {
        ru: "Заявка отправлена. Мы свяжемся с вами в ближайшее время.",
        kz: "Өтінім жіберілді. Жақын арада сізбен байланысамыз.",
        en: "Request sent. We will contact you shortly."
      };

      formStatus.textContent =
        successText[currentLanguage];

      contactForm.reset();

    } else {

      const errorText = {
        ru: "Не удалось отправить заявку. Проверьте ID Formspree.",
        kz: "Өтінімді жіберу мүмкін болмады. Formspree ID нөмірін тексеріңіз.",
        en: "The request could not be sent. Check your Formspree ID."
      };

      formStatus.textContent =
        errorText[currentLanguage];

    }

  } catch (error) {

    const networkText = {
      ru: "Ошибка соединения. Проверьте интернет и попробуйте ещё раз.",
      kz: "Қосылу қатесі. Интернетті тексеріп, қайта көріңіз.",
      en: "Connection error. Check your internet connection and try again."
    };

    formStatus.textContent =
      networkText[currentLanguage];

  } finally {

    submitButton.disabled = false;

  }

});
```

}

/* =========================
YEAR
========================= */

const year = document.getElementById("year");

if (year) {
year.textContent = new Date().getFullYear();
}

/* =========================
START
========================= */

setLanguage(currentLanguage);

calculate();

});
