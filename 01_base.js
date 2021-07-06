// ----------------УРОК 3------------------
// 1. Переменные
// ----------------------------------------
// var name = 'Vladilen' // лучше не задавать через var
// const firstName = 'Vladilen' // нельзя менять значения переменных
// const lastname = 'Minin' // string
// let age = 26 // number // можно менять значения переменных
// const age = 26 // number
// const isProgrammer = true  // boolean
// const _ = 'private'
// const $ = 'some value'
// const if = 'vvv" //err
// const withNum5 = '5'
// const 5withNum = '5' //err

// name = 'Vlad'
// console.log(lastname)

// -----------------------------------------
// 2. Мутирование
// -----------------------------------------
// console.log ('Имя человека: ' + firstName + ', а возраст человека: '+ age)
// console.log (age.toString())
// alert ('Имя человека: ' + firstName + ', а возраст человека: '+ age)

// const lastName=prompt('Введите фамилию')
// alert (firstName + ' '+ lastName)

// -----------------------------------------
// 3. Операторы
// -----------------------------------------
// let currentYear = 2020
// const birthYear = 1993

// const age = currentYear-birthYear
// console.log(age)

// const a = 10
// const b = 5
// let c = 32
// c = c+a ->
// c += a
// c*= a

// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(currentYear++)
// console.log(currentYear)
// console.log(c)

// -----------------------------------------
// 4. Типы данных
// -----------------------------------------
// const isProgrammer = true
// const nameV = 'Vladilen'
// const age = 26
// let x
// console.log(typeof isProgrammer)
// console.log(typeof nameV)
// console.log(typeof age)
// console.log(typeof x)

// -----------------------------------------
// 5. Приоритет оператора
// -----------------------------------------
// const fullAge = 26
// const currentYear = 2020
// const birthYear = 1993

// > < >= <=
// const isFullAge = currentYear - birthYear >= fullAge //26 >= 27
// console.log(isFullAge)

// -----------------------------------------
// 6. Условные операторы 
// -----------------------------------------
// const courseStatus = 'fall' // ready, fall, pending

// if (courseStatus === 'ready') {
//    console.log ('Курс готов и его можно проходить')
// } else if (courseStatus === 'pending') {
//    console.log ('Курс пока находится в процессе разработки')
// } else {
//    console.log ('Курс не получился')
// }

// const isReady = false

// if (isReady) {
//     console.log('Всё готово')
// } else {
//     console.log('Всё не готово')
// } Сократить запись -> Тернарное выражение
// isReady ? console.log('Всё готово'):console.log('Всё не готово')

// const num1 = 42 // number
// const num2 = '42' //string
// console.log(num1 === num2)

// -----------------------------------------
// 7. Булева логика
// -----------------------------------------
// ||(или) &&(и) !(не) !!(двойное отрицание)

// -----------------------------------------
// 8. Функции
// -----------------------------------------
// function calculateAge(year) {
//     return 2020 - year
// }

// const myAge = calculateAge(1993)
// console.log (myAge)
// console.log (calculateAge(2019))
// console.log (calculateAge(1999))

// function logInfoAbout (nameV, year) {
//     const age = calculateAge(year)

//     if (age > 0) {
//     console.log('Человек по имени ' + nameV + ' сейчас имеет возраст ' + age)
//     } else {
//     console.log ('Это будущее!')
//     }
// }

// logInfoAbout('Владилен', 1993)
// logInfoAbout('Елена', 1995)
// logInfoAbout('Ольга', 2024)

// -----------------------------------------
// 9. Массивы (однотипные данные)
// -----------------------------------------
// const cars = ['Мазда', 'Мерседес', 'Форд'] // способ 1
// console.log(cars) Можно создавать массивы и способом 2, но лучше 1 ->
// const cars = new Array('Мазда', 'Мерседес', 'Форд') // способ 2
// console.log(cars)
// console.log(cars[1]) // обращение по индексу 
// console.log(cars.length) // длина массива

// cars[0] ='Порш' // можно заменить элемент
// cars[3] = 'Мазда' // можно добавить элемент
// cars[cars.length] = 'Лада' // добавить в конец
// console.log(cars)

// -----------------------------------------
// 10. Циклы
// -----------------------------------------
// const cars = ['Мазда', 'Мерседес', 'Форд', 'Лада']

// Цикл итерирования массивов
// for (let i = 0; i < cars.length; i++) {  // let *с какого момента* ; *до какого* ; *что делать после завершения итерации*
//     const car = cars[i] 
//     console.log(car)
// }    

// То же самое другим способом
// for (let car of cars) { // создаем переменую, которая уже является элементом массива
//     console.log (car)
// }

// -----------------------------------------
// 11. Объекты (создаются разные структуры и группируются)
// Обращение к ним гибкое
// -----------------------------------------
// const person = {
//     firstName: 'Vladilen', // перечисляем ключ и значение
//     lastName: 'Minin',
//     year: 1993, 
//     languages: ['Ru', 'En', 'De'],
//     hasWife: false,
//     greet: function() { // функция определена в контексте объекта, поэтому метод
//         console.log('greet from person')
//     }
// }

// console.log(person.firstName)
// console.log(person['lastName'])
// const key = 'year'
// console.log(person[key])
// Любые ключи в объекте можно изменять/добавлять (зацени, теперь там новый ключ)
// person.hasWife = true
// person.isProgrammer = true
// console.log(person)
// person.greet()
