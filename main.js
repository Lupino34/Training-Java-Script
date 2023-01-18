/* • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
• • • • • JavaScript необходимые основы для начинающих • • • • •
• • • • • • • • • • • • практический курс • • • • • • • • • • •
• • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
• • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • */
// ================== 0. Настройка окружения ===============
/*
- Установка редактора
- Установка плагина liveServer
- Моя тема Ayu
- Создание проекта
*/

// =================== 1. Подключение ===================
/*
- index.html
- файл main.js
- тег <script src></script>
- Запуск в liveServer
- команда console.log для вывода информации в консоль браузера
- комментарии
*/
// Найти среднее арифметическое среди всех элементов массива [2, 5, 13, 7, 6, 4] с помощью блок-схемы
// const array [2, 5, 13, 7, 6, 4]
// size = 6
// sum = 0
// avg = 0
// if (index < size) {
//     sum = numbers[index]
//     index += 1
// }
// avg = sum / size
// console.log('avg', avg)


// const time = 10;

// if (time < 12) {
//     console.log('Доброе утро');
// }
// else if (time >= 12 && time < 18) {
//     console.log('Добрый день');
// }
// else {console.log('Добрый вечер');
// // }
//                     ТЕРНАРНЫЙ ОПЕРАТОР
// 20 < 30 ? console.log('условие верно') : console.log('условие НЕверно');
                        // Примеры

// let greeting;
// let time = 10;

// if (time < 12){
//     greeting = 'Доброе утро'
// }
// else {
//     greeting = 'Добрый день'
// }
//  console.log(greeting)  - пример условия If
                            // ТЕРНАРНЫЙ ОПЕРАТОР таже задача
// let time = 14;
// let greeting = time < 12 ? console.log ('Доброе утро') : console.log('Добрый день') ;       

                            // Параметры и аргументы для функции
// const userName = 'Vlad';
// console.log(`Привет, ${userName}! Как твои дела?`)

// function sayHi(name) {
//     console.log(`Привет, ${name}! Как твои дела?`)

// }
// sayHi('Vlados')

                            // Result
// function summ(a, b) {
//     const result = a + b;
//     return result;
// //     console.log(result);
// // } 
// }

// let res = summ(12, 18) 
// console.log(res)       

                                // Функция как аргумент
// function summ(a, b) {
//     return a + b;
// }

// const result = summ(summ(228, 100), summ(338, 200));
// console.log(result)
                                // Самовызывающая функция IIFE
// (function sayHi(){
//     console.log('Привет дорогой пользователь')
// })()
                             
// (function summ(a, b){
//     console.log(a)
//     console.log(b)
//     console.log(a + b)
// })
// (29, 55);

//                                 // 2 ЗД
// let res = (function (a, b){
//     return a + b;

// })(32, 16);
// console.log(res)
                                    // СТРЕЛОЧННЫЕ ФУНКЦИИ
