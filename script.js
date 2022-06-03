'use strict';

let title;
let screens;
let screenPrice;
const rollback = 15;
let adaptive;
let fullPrice;
let service1;
let service2;
let servicePercentPrice;

const isNumber = function (num) {
  num = isNullTrim(num);
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const isNullTrim = function (arg) {
  if (arg !== null) {
    return arg.trim();
  } else {
    return arg;
  }
};

const asking = function () {
  do {
    title = prompt('Как называется ваш проект?');
    title = isNullTrim(title);
  } while (title === "" || title === null);

  do {
    screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
    screens = isNullTrim(screens);
  } while (screens === "" || screens === null);

  do {
    screenPrice = prompt('Сколько будет стоить данная работа?', '12000');
  } while (!isNumber(screenPrice));

  screenPrice = +screenPrice;
  adaptive = confirm('Нужен ли адаптив на сайте?');
};

const getAllServicePrices = function () {
  let sum = 0;
  let servicePrice = 0;
  for (let i = 1; i <= 2; i++) {
    if (i === 1) {
      do {
        service1 = prompt('Какой дополнительный тип услуги нужен?');
        service1 = isNullTrim(service1);
      } while (service1 === "" || service1 === null);
    } else if (i === 2) {
      do {
        service2 = prompt('Какой дополнительный тип услуги нужен?');
        service2 = isNullTrim(service2);
      } while (service2 === "" || service2 === null);
    }
    do {
      servicePrice = prompt('Сколько это будет стоить?', (i * 1000));
    } while (!isNumber(servicePrice));
    sum += +servicePrice;
  }
  return sum;
};

function getFullPrice(someScreenPrice, allServPrice) {
  return someScreenPrice + allServPrice;
}

function getTitle(correctTitle) {
  return correctTitle[0].toUpperCase() + correctTitle.toLowerCase().slice(1);
}

function getServicePercentPrices(someFullPrice, someRollBack) {
  return "Стоимость за вычетом процента отката посреднику: " + Math.ceil(someFullPrice - (someFullPrice * (someRollBack / 100)).toFixed(2));
}
function showTypeOf(param) {
  return param + " " + typeof param;
}
function getRollbackMessage(price) {
  if (price > 30000) {
    return 'Даем скидку в 10%';
  } else if (price > 15000 && price <= 30000) {
    return 'Даем скидку в 5%';
  } else if (price >= 0 && price <= 15000) {
    return 'Скидка не предусмотрена';
  } else if (price < 0) {
    return 'Что то пошло не так';
  }
}

asking();
title = getTitle(title);
fullPrice = getFullPrice(screenPrice, getAllServicePrices());
servicePercentPrice = getServicePercentPrices(fullPrice, rollback);

console.log(showTypeOf(title));
console.log(showTypeOf(fullPrice));
console.log(showTypeOf(adaptive));
console.log(screens);
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);