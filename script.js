'use strict';

const title = 'Name Project';
const screens = 'Простые, Сложные, Интерактивные';
const screenPrice = 777;
const rollback = 15;
const fullPrice = 55999;
const adaptive = false;

console.log(typeof (title));
console.log(typeof (fullPrice));
console.log(typeof (adaptive));
console.log(screens.length);
console.log('Стоимость верстки экранов ' + screenPrice + ' рублей');
console.log('Стоимость разработки сайта ' + fullPrice + ' рублей');
console.log(screens.toLowerCase().split(", "));
console.log('Процент отката посреднику за работу ' + (fullPrice * (rollback / 100)).toFixed(2));
