(function () {

"use strict";

/* =========================
MOBILE MENU
========================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

```
menuToggle.addEventListener("click", function () {
  navMenu.classList.toggle("open");
});

navMenu.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navMenu.classList.remove("open");
  });
});
```

}

/* =========================
CALCULATOR
========================= */

const productValue = document.getElementById("productValue");
const currency = document.getElementById("currency");
const exchangeRate = document.getElementById("exchangeRate");

const dutyInput = document.getElementById("duty");
const vatInput = document.getElementById("vat");

const weight = document.getElementById("weight");
const storageDays = document.getElementById("storageDays");
const storageRate = document.getElementById("storageRate");

const broker = document.getElementById("broker");

const resultValue = document.getElementById("resultValue");
const resultDuty = document.getElementById("resultDuty");
const resultVat = document.getElementById("resultVat");
const resultStorage = document.getElementById("resultStorage");
const resultBroker = document.getElementById("resultBroker");
const resultTotal = document.getElementById("resultTotal");

function numberValue(element) {

```
if (!element) {
  return 0;
}

const value = parseFloat(element.value);

return Number.isFinite(value) ? Math.max(value, 0) : 0;
```

}

function formatMoney(value) {

```
return Math.round(value).toLocaleString("ru-RU") + " ₸";
```

}

function calculate() {

```
if (!productValue) {
  return;
}

const product = numberValue(productValue);

const rate =
  currency && currency.value === "KZT"
    ? 1
    : numberValue(exchangeRate);


const customsValue = product * rate;


const duty =
  customsValue *
  (numberValue(dutyInput) / 100);


const vat =
  (customsValue + duty) *
  (numberValue(vatInput) / 100);


const storage =
  numberValue(weight) *
  numberValue(storageDays) *
  numberValue(storageRate);


const brokerValue =
  numberValue(broker);


const total =
  customsValue +
  duty +
  vat +
  storage +
  brokerValue;


resultValue.textContent = formatMoney(customsValue);
resultDuty.textContent = formatMoney(duty);
resultVat.textContent = formatMoney(vat);
resultStorage.textContent = formatMoney(storage);
resultBroker.textContent = formatMoney(brokerValue);
resultTotal.textContent = formatMoney(total);
```

}

const calculatorInputs = [
productValue,
currency,
exchangeRate,
dutyInput,
vatInput,
weight,
storageDays,
storageRate,
broker
];

calculatorInputs.forEach(function (input) {

```
if (!input) {
  return;
}

input.addEventListener("input", calculate);
input.addEventListener("change", calculate);
```

});

calculate();

/* =========================
LANGUAGE SWITCHER
========================= */

const translations = {

```
ru: {

  navServices: "Услуги",
  navProcess: "Как работаем",
  navCalculator: "Калькулятор",
  navAbout: "О компании",
  navContact: "Контакты",

  request: "Оставить заявку",
  calculate: "Рассчитать стоимость",

  heroEyebrow: "ТАМОЖЕННОЕ СОПРОВОЖДЕНИЕ · КАЗАХСТАН",

  heroTitle: "Таможенное оформление без лишних задержек.",

  heroText:
    "JWS Group сопровождает импортные поставки из Китая в Казахстан: декларирование, СВХ, брокерское сопровождение и расчёт таможенных платежей.",

  statSupport: "сопровождение",
  statRoute: "международные поставки",
  statSteps: "этапа оформления",

  shipment: "ОТСЛЕЖИВАНИЕ ГРУЗА",
  inTransit: "В ПУТИ",
  weight: "Вес",
  status: "Статус",
  customsWay: "В пути",

  servicesEyebrow: "НАШИ УСЛУГИ",
  servicesTitle: "Один партнёр для всей таможенной процедуры.",
  servicesText:
    "Берём на себя ключевые этапы оформления груза — от подготовки документов до выпуска и выдачи.",

  service1Title: "Таможенное декларирование",
  service1Text:
    "Подготовка и подача декларации, расчёт платежей и взаимодействие с таможенными органами.",

  service2Title: "Склад временного хранения",
  service2Text:
    "Приём, размещение, хранение и выдача груза на период таможенного оформления.",

  service3Title: "Брокерское сопровождение",
  service3Text:
    "Полное сопровождение поставки брокером до момента выпуска груза.",

  service4Title: "Код ТН ВЭД",
  service4Text:
    "Определение кода товара и предварительная оценка применимых ставок.",

  processEyebrow: "ПРОЦЕСС",
  processTitle: "От заявки до выдачи груза.",

  step1Title: "Заявка",
  step1Text: "Получаем документы и информацию о грузе.",

  step2Title: "Приём на СВХ",
  step2Text: "Принимаем груз и фиксируем основные параметры.",

  step3Title: "Декларирование",
  step3Text: "Готовим и подаём таможенную декларацию.",

  step4Title: "Выпуск",
  step4Text: "После выпуска организуем выдачу или дальнейшую доставку.",

  calculatorEyebrow: "КАЛЬКУЛЯТОР",
  calculatorTitle: "Предварительный расчёт расходов.",
  calculatorText:
    "Измените параметры поставки — результат пересчитывается автоматически.",

  productCost: "Стоимость товара",
  exchangeRate: "Курс к тенге",
  duty: "Пошлина %",
  vat: "НДС %",
  storageDays: "Дней хранения",
  storageRate: "Хранение ₸ / кг / день",
  broker: "Услуги брокера, ₸",

  result: "РАСЧЁТ ПОСТАВКИ",
  customsValue: "Таможенная стоимость",
  resultDuty: "Пошлина",
  resultVat: "НДС",
  resultStorage: "СВХ",
  resultBroker: "Брокер",
  total: "Итого",

  calculatorNote:
    "Расчёт является предварительным. Фактические ставки зависят от кода ТН ВЭД и параметров конкретного груза.",

  aboutEyebrow: "О КОМПАНИИ",
  aboutTitle:
    "JWS Group — таможенный партнёр для международных поставок.",

  aboutText:
    "Мы сопровождаем импортные поставки на территории Республики Казахстан, помогая бизнесу проходить таможенные процедуры организованно и прозрачно.",

  advantage1: "Таможенное оформление",
  advantage2: "СВХ и хранение",
  advantage3: "Брокерское сопровождение",
  advantage4: "Расчёт таможенных платежей",

  contactEyebrow: "КОНТАКТЫ",
  contactTitle: "Обсудим вашу поставку.",

  contactText:
    "Оставьте контакты и краткую информацию о грузе. Мы свяжемся с вами для уточнения деталей.",

  phone: "Телефон",
  address: "Адрес СВХ",
  addressPlaceholder: "Укажите адрес склада",

  name: "Ваше имя",
  contactField: "Телефон или email",
  message: "Информация о грузе",
  messagePlaceholder:
    "Вес, объём, страна отправления, описание товара",

  send: "Отправить заявку",

  footerText: "Таможенное декларирование и СВХ."

},


en: {

  navServices: "Services",
  navProcess: "How it works",
  navCalculator: "Calculator",
  navAbout: "About",
  navContact: "Contacts",

  request: "Request a quote",
  calculate: "Calculate cost",

  heroEyebrow: "CUSTOMS SUPPORT · KAZAKHSTAN",

  heroTitle: "Customs clearance without unnecessary delays.",

  heroText:
    "JWS Group supports imports from China to Kazakhstan: customs declaration, temporary storage, brokerage and customs payment calculation.",

  statSupport: "support",
  statRoute: "international shipments",
  statSteps: "clearance stages",

  shipment: "SHIPMENT TRACKING",
  inTransit: "IN TRANSIT",
  weight: "Weight",
  status: "Status",
  customsWay: "In transit",

  servicesEyebrow: "OUR SERVICES",
  servicesTitle: "One partner for the entire customs process.",
  servicesText:
    "We handle the key stages of cargo clearance — from document preparation to release and delivery.",

  service1Title: "Customs declaration",
  service1Text:
    "Preparation and submission of declarations, payment calculation and communication with customs authorities.",

  service2Title: "Temporary storage warehouse",
  service2Text:
    "Cargo receiving, storage and release during the customs clearance process.",

  service3Title: "Customs brokerage",
  service3Text:
    "Full broker support from document submission to cargo release.",

  service4Title: "HS / TN VED code",
  service4Text:
    "Determination of the appropriate product code and preliminary duty rate assessment.",

  processEyebrow: "PROCESS",
  processTitle: "From request to cargo release.",

  step1Title: "Request",
  step1Text: "We receive documents and cargo information.",

  step2Title: "Warehouse",
  step2Text: "We receive the cargo and record its main parameters.",

  step3Title: "Declaration",
  step3Text: "We prepare and submit the customs declaration.",

  step4Title: "Release",
  step4Text: "After customs release, we arrange cargo collection or delivery.",

  calculatorEyebrow: "CALCULATOR",
  calculatorTitle: "Estimate your import costs.",
  calculatorText:
    "Change the shipment parameters — the result updates automatically.",

  productCost: "Product value",
  exchangeRate: "Exchange rate to KZT",
  duty: "Duty %",
  vat: "VAT %",
  storageDays: "Storage days",
  storageRate: "Storage ₸ / kg / day",
  broker: "Broker service, ₸",

  result: "SHIPMENT CALCULATION",
  customsValue: "Customs value",
  resultDuty: "Duty",
  resultVat: "VAT",
  resultStorage: "Warehouse",
  resultBroker: "Broker",
  total: "Total",

  calculatorNote:
    "This calculation is preliminary. Actual rates depend on the HS/TN VED code and shipment details.",

  aboutEyebrow: "ABOUT US",
  aboutTitle:
    "JWS Group — a customs partner for international shipments.",

  aboutText:
    "We support import shipments in Kazakhstan and help businesses handle customs procedures in an organized and transparent way.",

  advantage1: "Customs clearance",
  advantage2: "Temporary storage",
  advantage3: "Brokerage support",
  advantage4: "Customs payment calculation",

  contactEyebrow: "CONTACTS",
  contactTitle: "Let's discuss your shipment.",

  contactText:
    "Leave your contact details and basic cargo information. We will contact you to clarify the details.",

  phone: "Phone",
  address: "Warehouse address",
  addressPlaceholder: "Enter warehouse address",

  name: "Your name",
  contactField: "Phone or email",
  message: "Cargo information",
  messagePlaceholder:
    "Weight, volume, origin country, product description",

  send: "Send request",

  footerText: "Customs declaration and temporary storage."

},


zh: {

  navServices: "服务",
  navProcess: "工作流程",
  navCalculator: "计算器",
  navAbout: "关于我们",
  navContact: "联系方式",

  request: "提交申请",
  calculate: "计算费用",

  heroEyebrow: "海关服务 · 哈萨克斯坦",

  heroTitle: "高效完成清关，减少不必要的延误。",

  heroText:
    "JWS Group 为从中国进口至哈萨克斯坦的货物提供报关、临时仓储、报关代理及关税计算服务。",

  statSupport: "全程支持",
  statRoute: "国际货运",
  statSteps: "清关阶段",

  shipment: "货物追踪",
  inTransit: "运输中",
  weight: "重量",
  status: "状态",
  customsWay: "运输中",

  servicesEyebrow: "我们的服务",
  servicesTitle: "一个合作伙伴，覆盖整个清关流程。",
  servicesText:
    "从文件准备到货物放行，我们负责清关流程中的关键环节。",

  service1Title: "海关申报",
  service1Text:
    "准备并提交申报文件，计算相关费用并与海关部门沟通。",

  service2Title: "临时仓储",
  service2Text:
    "在清关期间提供货物接收、存储及放行服务。",

  service3Title: "报关代理",
  service3Text:
    "从提交文件到货物放行，全程提供报关代理服务。",

  service4Title: "商品编码",
  service4Text:
    "确定商品 TN VED / HS 编码并预估适用税率。",

  processEyebrow: "流程",
  processTitle: "从申请到货物放行。",

  step1Title: "申请",
  step1Text: "接收货物文件及相关信息。",

  step2Title: "仓储",
  step2Text: "接收货物并记录主要参数。",

  step3Title: "申报",
  step3Text: "准备并提交海关申报。",

  step4Title: "放行",
  step4Text: "海关放行后安排提货或后续运输。",

  calculatorEyebrow: "计算器",
  calculatorTitle: "提前估算进口费用。",
  calculatorText:
    "修改货物参数，系统将自动重新计算。",

  productCost: "商品价值",
  exchangeRate: "兑坚戈汇率",
  duty: "关税 %",
  vat: "增值税 %",
  storageDays: "仓储天数",
  storageRate: "仓储费 ₸ / 公斤 / 天",
  broker: "报关代理费 ₸",

  result: "货物费用计算",
  customsValue: "海关价值",
  resultDuty: "关税",
  resultVat: "增值税",
  resultStorage: "仓储",
  resultBroker: "代理服务",
  total: "总计",

  calculatorNote:
    "此计算结果仅供参考。实际税率取决于商品 TN VED / HS 编码及具体货物参数。",

  aboutEyebrow: "关于我们",
  aboutTitle:
    "JWS Group — 国际货运的专业海关合作伙伴。",

  aboutText:
    "我们为在哈萨克斯坦境内进行进口业务的企业提供海关服务，帮助客户更加透明、高效地完成清关流程。",

  advantage1: "海关清关",
  advantage2: "临时仓储",
  advantage3: "报关代理",
  advantage4: "关税计算",

  contactEyebrow: "联系方式",
  contactTitle: "让我们了解您的货物。",

  contactText:
    "留下您的联系方式和货物基本信息，我们将与您联系并进一步确认具体需求。",

  phone: "电话",
  address: "仓库地址",
  addressPlaceholder: "请输入仓库地址",

  name: "您的姓名",
  contactField: "电话或邮箱",
  message: "货物信息",
  messagePlaceholder:
    "重量、体积、发货国家、商品描述",

  send: "提交申请",

  footerText: "海关申报及临时仓储服务。"

}
```

};

function setLanguage(lang) {

```
const dictionary = translations[lang];

if (!dictionary) {
  return;
}


document.documentElement.lang = lang === "zh"
  ? "zh"
  : lang;


document.querySelectorAll("[data-i18n]").forEach(function (element) {

  const key = element.dataset.i18n;

  if (dictionary[key]) {
    element.textContent = dictionary[key];
  }

});


document.querySelectorAll("[data-i18n-placeholder]").forEach(function (element) {

  const key = element.dataset.i18nPlaceholder;

  if (dictionary[key]) {
    element.placeholder = dictionary[key];
  }

});


document.querySelectorAll(".lang-btn").forEach(function (button) {

  button.classList.toggle(
    "active",
    button.dataset.lang === lang
  );

});


localStorage.setItem("jws-language", lang);
```

}

document.querySelectorAll(".lang-btn").forEach(function (button) {

```
button.addEventListener("click", function () {

  setLanguage(button.dataset.lang);

});
```

});

const savedLanguage =
localStorage.getItem("jws-language") || "ru";

setLanguage(savedLanguage);

/* =========================
CONTACT FORM
========================= */

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm) {

```
contactForm.addEventListener("submit", async function (event) {

  event.preventDefault();

  const button = contactForm.querySelector("button[type='submit']");

  if (button) {
    button.disabled = true;
  }

  if (formStatus) {
    formStatus.textContent = "Отправка...";
  }


  try {

    const response = await fetch(
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
        formStatus.textContent =
          "Заявка отправлена. Мы свяжемся с вами.";
      }

      contactForm.reset();

    } else {

      if (formStatus) {
        formStatus.textContent =
          "Не удалось отправить заявку. Проверьте Formspree ID.";
      }

    }

  } catch (error) {

    if (formStatus) {
      formStatus.textContent =
        "Ошибка соединения. Попробуйте ещё раз.";
    }

  } finally {

    if (button) {
      button.disabled = false;
    }

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

})();
