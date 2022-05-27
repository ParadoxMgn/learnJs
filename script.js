let title;
let screens;
let screenPrice;
let rollback;
let fullPrice;
let adaptive;

alert('Hello world!');
console.log('My first git project!');

title = 'Name Project';
screens = 'Простые, Сложные, Интерактивные';
screenPrice = 777;
rollback = 15;
fullPrice = 55999;
adaptive = false;

console.log(typeof (title));
console.log(typeof (fullPrice));
console.log(typeof (adaptive));
console.log(screens.length);
console.log('Стоимость верстки экранов ' + screenPrice + ' рублей/долларов/гривен/юани');
console.log('Стоимость разработки сайта ' + fullPrice + ' рублей/долларов/гривен/юани');
console.log(screens.toLowerCase().split(", "));
console.log('Процент отката посреднику за работу ' + (fullPrice * (rollback / 100)).toFixed(2));
