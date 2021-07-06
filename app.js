// ------------------------------------------------
//                    1. ФУНКЦИИ
// ------------------------------------------------

// Function Declaration 
// Обращаться к ней можно когда угодно (даже до ее создания)
// function greet(nameV) {
//     console.log('Привет - ', nameV)
// }

// Function Expression (создать ф-ию и сложить в переменные)
// Нельзя к такой образаться ДО, но есть преимущества с синтаксисом
// const greet2 = function greet2(nameV) {
//     console.log('Привет 2 - ', nameV)
//}
// greet('Лена')
// greet2('Лена')

// console.log(typeof greet) //function выдаст, хотя нет такого типа данных
// console.dir(greet)

// ------------------------------------------------
//                2. Анонимные функции
// ------------------------------------------------
// Будет выводить все числа (+1), пока не остановим
// let counter = 0 
// setInterval(function() {
//     console.log(++counter)
// }, 1000) // количество милисекунд, через которое вызывается функция

// Как остановить его
// let counter = 0 
// const interval = setInterval(function() { // Есть еще setTimeout, он задаёт интервал
//     if (counter === 5) {
//        clearInterval(interval) // clearTimeout
//     } else {
//        console.log(++counter)
//     } 
// }, 1000) // количество милисекунд, через которое вызывается функция

// ------------------------------------------------
//                3. Стрелочные функции
// ------------------------------------------------
// function greet(nameV) {
//     console.log('Привет - ', nameV)
// }
// Переписываем в виде стрелочных функций
// const arrow = (nameV) => {
//     console.log('Привет - ', nameV)
// }
// То же самое сокращаем (можно, так как ф-ия состоит из одной строчки)
// const arrow2 = nameV => console.log('Привет - ', nameV)

// arrow2('Vladilen')

//Функция, возводящая в квадрат постоянно (return убирается)

// const pow2 = num => num **2

// console.log(pow2(5)) // 25

// если ф-я от одного параметра, () можно не писать


function getFactorial(val){
    let accumulator = 1
    for (let i = 1; i < val; i++) {

    }
    return accumulator
}
console.log(getFactorial(5))






