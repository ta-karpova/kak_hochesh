// Часть 1. Раздел 9. Классы
// =====================================
// Класс: базовый синтаксис
// =====================================

// Базовый синтаксис
// class MyClass {
//     prop = value; // свойство
//     constructor(...) { // конструктор
//       // ...
//     }
//     method(...) {} // метод
//     get something(...) {} // геттер
//     set something(...) {} // сеттер
//     [Symbol.iterator]() {} // метод с вычисляемым именем (здесь - символом)
//     // ...
//   }
// --------------------------------------

// Class Expression
// "Named Class Expression"
// (в спецификации нет такого термина, но происходящее похоже на Named Function Expression)
// let User = class MyClass {
//   sayHi() {
//     alert(MyClass); // имя MyClass видно только внутри класса
//   }
// };

// new User().sayHi(); // работает, выводит определение MyClass

// alert(MyClass); // ошибка, имя MyClass не видно за пределами класса
// --------------------------------------

//   class Clock {
//       constructor({ template }) {
//           this.template = template
//       }
    
//     let timer;
  
//     function render() {
//       let date = new Date();
  
//       let hours = date.getHours();
//       if (hours < 10) hours = '0' + hours;
  
//       let mins = date.getMinutes();
//       if (mins < 10) mins = '0' + mins;
  
//       let secs = date.getSeconds();
//       if (secs < 10) secs = '0' + secs;
  
//       let output = template
//         .replace('h', hours)
//         .replace('m', mins)
//         .replace('s', secs);
  
//       console.log(output);
//     }
  
//     this.stop = function() {
//       clearInterval(timer);
//     };
  
//     this.start = function() {
//       render();
//       timer = setInterval(render, 1000);
//     };
  
//   }
// ------------------------------------------------------ 
  // let clock = new Clock({template: 'h:m:s'});
  // clock.start();



// =====================================
// Наследование классов
// =====================================

// Если метод не найден в Rabbit.prototype, JavaScript берёт его из Animal.prototype.

// --------------------------------------------
// Переопределение методов

// Если мы определим свой метод stop в классе Rabbit, то он будет использоваться взамен родительского
// Чаще хочется просто дополнить родительский, а не отменить

// class Animal {

//   constructor(name) {
//     this.speed = 0;
//     this.name = name;
//   }

//   run(speed) {
//     this.speed = speed;
//     alert(`${this.name} бежит со скоростью ${this.speed}.`);
//   }

//   stop() {
//     this.speed = 0;
//     alert(`${this.name} стоит.`);
//   }

// }

// class Rabbit extends Animal {
//   hide() {
//     alert(`${this.name} прячется!`);
//   }

//   stop() {
//     super.stop(); // вызываем родительский метод stop
//     this.hide(); // и затем hide
//   }
// }

// let rabbit = new Rabbit("Белый кролик");

// rabbit.run(5); // Белый кролик бежит со скоростью 5.
// rabbit.stop(); // Белый кролик стоит. Белый кролик прячется!
// Теперь у класса Rabbit есть метод stop, который вызывает родительский super.stop() в процессе выполнения.

// ---------------------------------------------------------------
// Переопределение конструктора

// Согласно спецификации, если класс расширяет другой класс и не имеет конструктора, то автоматически создаётся такой «пустой» конструктор
// class Rabbit extends Animal {
//   // генерируется для классов-потомков, у которых нет своего конструктора
//   constructor(...args) {
//     super(...args);
//   }
// }

// class Animal {

//   constructor(name) {
//     this.speed = 0;
//     this.name = name;
//   }

//   // ...
// }

// class Rabbit extends Animal {

//   constructor(name, earLength) {
//     super(name);
//     this.earLength = earLength;
//   }

//   // ...
// }

// // теперь работает
// let rabbit = new Rabbit("Белый кролик", 10);
// alert(rabbit.name); // Белый кролик
// alert(rabbit.earLength); // 10

// ------------------------------
// Дата выпуска и имя автора
// -----------------------------------

// class Article {
//   authorName = 'Имя';
//   releaseDate = '00.00.0000';
//   textArticle = '';

//   takeAuthorName () {
//     return this.authorName;
//   }
//   setAuthorName(authorName) {
//     this.authorName = authorName
//   }

//   takeReleaseDate () {
//     return this.releaseDate;
//   }
//   setAuthorName(releaseDate) {
//     this.releaseDate = releaseDate
//   }
// }

// class ArticleSport extends Article {
//   state = {
//     city: '', 
//     sport: ''
//   }
//   constructor(city, sport) {
//     super()
//     this.state = {
//       city,
//       sport
//     }
//   }
//   getCity() {
//     return this.state.city
//   }
//   getSport() {
//     return this.state.sport
//   }
//   setCity(city) {
//     this.state.city = city
//   }
//   setSport(sport) {
//     this.state.sport = sport
//   }
// }

// // class ArticlePolitics extends Article {

// // }

// // class ArticleAnimals extends Article {

// // }

// let articleSport = new ArticleSport('Москва', 'Футбол');
// console.log(articleSport.takeAuthorName('Ольга'))
// articleSport.setAuthorName('Михаил')
// //console.log(articleSport.takeAuthorName())
// console.log(articleSport.getCity())
// console.log(articleSport.getSport())
// articleSport.setCity('Саратов')
// console.log(articleSport.getCity())

// let articlePolitics = new ArticlePolitics()
// console.log(articlePolitics.takeAuthorName())
// articlePolitics.setAuthorName('Олег')

// // let articlePolitics = new ArticlePolitics;
// // let articleAnimals = new ArticleAnimals;


class Article {
  authorName = 'Альберт';
  releaseDate = '00.00.0000';
  textArticle = 'Текст статьи';

  takeAuthorName () {
    return this.authorName;
  }
  setAuthorName(authorName) {
    this.authorName = authorName
  }

  takeReleaseDate () {
    return this.releaseDate;
  }
  setReleaseDate(releaseDate) {
    this.releaseDate = releaseDate
  }

  takeTextArticle () {
    return this.textArticle;
  }
  setTextArticle(textArticle) {
    this.textArticle = textArticle
  }
}

class ArticleSport extends Article {
  state = {
    city: '', 
    sport: ''
  }
  constructor(city, sport) {
    super()
    this.state = {
      city,
      sport
    }
  }
  getCity() {
    return this.state.city
  }
  getSport() {
    return this.state.sport
  }
  setCity(city) {
    this.state.city = city
  }
  setSport(sport) {
    this.state.sport = sport
  }
}

class ArticlePolitics extends Article {
  state = {
    country: '' 
  }
  constructor(country) {
    super()
    this.state = {
      country
    }
  }
  getCountry() {
    return this.state.country
  }
  setCountry(country) {
    this.state.country = country
  }
}

 class ArticleAnimals extends Article {
  state = {
    animal: '' 
  }
  constructor(animal) {
    super()
    this.state = {
      animal
    }
  }
  getAnimal() {
    return this.state.animal
  }
  setAnimal(animal) {
    this.state.animal = animal
  }
 }

// Статья про спорт 
let articleSport = new ArticleSport('Москва', 'Футбол');
//console.log(articleSport.takeAuthorName())

articleSport.setAuthorName('Михаил')
console.log(articleSport.takeAuthorName())
console.log(articleSport.getCity())
console.log(articleSport.getSport())
//articleSport.setCity('Саратов')
//console.log(articleSport.getCity())
articleSport.setReleaseDate('01.12.2019')
console.log(articleSport.takeReleaseDate())
// let articlePolitics = new ArticlePolitics;
// let articleAnimals = new ArticleAnimals;
articleSport.setTextArticle('Текст статьи про спорт')
console.log(articleSport.takeTextArticle())
console.log('-----')

// Статья про политику
let articlePolitics = new ArticlePolitics('США')

articlePolitics.setAuthorName('Ольга')
console.log(articlePolitics.takeAuthorName())

console.log(articlePolitics.getCountry())

articlePolitics.setReleaseDate('13.02.2021')
console.log(articlePolitics.takeReleaseDate())

articlePolitics.setTextArticle('Текст статьи про политику')
console.log(articlePolitics.takeTextArticle())
console.log('-----')

// Статья про животных
let articleAnimals = new ArticleAnimals('Тигр')

articleAnimals.setAuthorName('Светлана')
console.log(articleAnimals.takeAuthorName())

console.log(articleAnimals.getAnimal())

articleAnimals.setReleaseDate('26.07.2020')
console.log(articleAnimals.takeReleaseDate())

articleAnimals.setTextArticle('Текст статьи про животных')
console.log(articleAnimals.takeTextArticle())













