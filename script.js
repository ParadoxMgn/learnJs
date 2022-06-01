'use strict';

let title = prompt('Как называется ваш проект?');
const screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
const screenPrice = +prompt('Сколько будет стоить данная работа?', '12000');
const rollback = 15;
const adaptive = confirm('Нужен ли адаптив на сайте?');
const service1 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice1 = +prompt('Сколько это будет стоить?');
const service2 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice2 = +prompt('Сколько это будет стоить?');

const allServicePrices = function (onePrice, twoPrice) {
  return onePrice + twoPrice;
};

function getFullPrice(someScreenPrice, allServPrice) {
  return someScreenPrice + allServPrice;
}

function getTitle(correctTitle) {
  const cutTitle = correctTitle.trim();
  return cutTitle[0].toUpperCase() + cutTitle.toLowerCase().slice(1);
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

title = getTitle(title);
const fullPrice = getFullPrice(screenPrice, allServicePrices(servicePrice1, servicePrice2));
const servicePercentPrice = getServicePercentPrices(fullPrice, rollback);

console.log(showTypeOf(title));
console.log(showTypeOf(fullPrice));
console.log(showTypeOf(adaptive));
console.log(screens);
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);
