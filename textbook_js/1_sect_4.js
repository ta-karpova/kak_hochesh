// Часть 1. Раздел 4.

// =====================================
// 4.1 Объекты
// =====================================
// let user = {     // объект
//     name: "John",  // под ключом "name" хранится значение "John"
//     age: 30        // под ключом "age" хранится значение 30
//   };
// получаем свойства объекта:
// alert( user.name ); // John
// alert( user.age ); // 30

// -------------------------------------
// const user = {
//     name: "John"
//   };
  
//   user.name = "Pete"; // (consy защищает от изменения переменную user, а не ее содержимое, т.е. user=...)
  
//   alert(user.name); // Pete
// -------------------------------------
 
// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
// Задача 1
// let user = {
//     name : 'John'
//     surname : 'Smith'
// }
// user.name = 'Pete'
// delete user.name
// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
// Задача 4 - суммирование элементов класса
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   };
 
//   let sum = 0;
//   for (let key in salaries) {
//       sum += salaries[key];
//   }
//   alert(sum); // 390
// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
// Задача 5
// функция должна умножать на 2, если число
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };

// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] == 'number') {
//          obj[key] *= 2;
//         }
//     }
// }

// multiplyNumeric(menu);

// после вызова функции
// menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
//   };
// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

// =====================================
// Методы объекта, "this"
// =====================================

// Значение this – это объект «перед точкой», который использовался для вызова метода.
// let user = {
//     name: "Джон",
//     age: 30,
  
//     sayHi() {
//       // this - это "текущий объект"
//       alert(this.name);
//     }
  
//   };
  
//   user.sayHi(); // Джон

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
// Задача 4. Калькулятор.
// let calculator = {
//     sum() {
//         return this.a + this.b;
//       },
    
//       mul() {
//         return this.a * this.b;
//       },
    
//       read() {
//         this.a = +prompt('a?', 0);
//         this.b = +prompt('b?', 0);
//       }
//   };
  
//   calculator.read();
//   alert( calculator.sum() );
//   alert( calculator.mul() );

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
// Задача 5

// let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//       return this;
//     },
//     down() {
//       this.step--;
//       return this;
//     },
//     showStep: function() { // показывает текущую ступеньку
//       alert( this.step );
//       return this;
//     }
//   };
// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

// =====================================
// Конструкторы, создание объектов через "new"
// =====================================

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
// Задача

// function Calculator() {

//     this.read = function() {
//       this.a = +prompt('a?', 0);
//       this.b = +prompt('b?', 0);
//     };
  
//     this.sum = function() {
//       return this.a + this.b;
//     };
  
//     this.mul = function() {
//       return this.a * this.b;
//     };
//   }
  
//   let calculator = new Calculator();
//   calculator.read();
  
//   alert( "Sum=" + calculator.sum() );
//   alert( "Mul=" + calculator.mul() );

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

// function Accumulator(startingValue) { //Начальное значение устанавливается в аргументе конструктора startingValue.
//     this.value = startingValue; // объект хранит текущее значение в свойствеvalue 
  
//     this.read = function() { //Метод read() использует prompt для получения числа и прибавляет его к свойству value.
//       this.value += +prompt('Сколько нужно добавить?', 0);
//     };
  
//   }
  
//   let accumulator = new Accumulator(1);
//   accumulator.read();
//   accumulator.read();
//   alert(accumulator.value);





