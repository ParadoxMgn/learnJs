'use strict';

const title = prompt('Как называется ваш проект?');
const screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
const screenPrice = +prompt('Сколько будет стоить данная работа?', '12000');
const rollback = 15;
const adaptive = confirm('Нужен ли адаптив на сайте?');
const service1 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice1 = +prompt('Сколько это будет стоить?');
const service2 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice2 = +prompt('Сколько это будет стоить?');
const fullPrice = screenPrice + servicePrice1 + servicePrice2;
const servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback / 100)).toFixed(2));

console.log(typeof (title));
console.log(typeof (fullPrice));
console.log(typeof (adaptive));
console.log(screens.length);
console.log('Стоимость верстки экранов ' + screenPrice + ' рублей');
console.log('Стоимость разработки сайта ' + fullPrice + ' рублей');
console.log(screens.toLowerCase().split(", "));
console.log('Процент отката посреднику за работу ' + (fullPrice * (rollback / 100)).toFixed(2));

console.log('Итоговая стоимость ' + servicePercentPrice);

if (fullPrice > 30000) {
  console.log('Даем скидку в 10%');
} else if (fullPrice > 15000 && fullPrice <= 30000) {
  console.log('Даем скидку в 5%');
} else if (fullPrice >= 0 && fullPrice <= 15000) {
  console.log('Скидка не предусмотрена');
} else if (fullPrice < 0) {
  console.log('Что то пошло не так');
}