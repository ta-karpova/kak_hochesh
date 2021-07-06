// ------------------------------------------------
//        СТРОКИ
// ------------------------------------------------

// const nameV = 'Владилен'
// const age = 26

// function getAge() {
//     return age
// }
//             Не очень хороший подход 
// const output = 'Привет, меня зовут ' + nameV + ' и мой возраст ' + age +' лет.'

// const output = `Привет, меня зовут ${nameV} и мой возраст ${getAge()} лет.`
//                 Можно и вот так:
// const output = `Привет, меня зовут ${nameV} и мой возраст ${age < 20 ? 'A' : 'B'} лет.`
// console.log(output)

// const output = `
//     <div> This is div </div>
//     <p> this is p </p>

// `
// console.log(output)

// const nameV = 'Владилен'

// console.log(nameV.length) // длина строки 
// console.log(nameV.toUpperCase()) // все символы к верхнему регистру
// console.log(nameV.toLowerCase()) // все символы к нижнему регистру
// console.log(nameV.charAt(2)) // возвращает символ на этой позиции - нумерация с 0 (если слишком большой, то пустая строка)
// console.log(nameV.indexOf('л')) // проверяет наличие подстроки в строке - возвращает номер индекса, с которого начинается эта подстрока в троке (-1 если нет, если таких мест несколько, то первую встречную)
// console.log(nameV.startsWith('влад')) // false с чего строчка стартует
// console.log(nameV.startsWith('Влад')) // true
// // Можно сначала к нижнему, а потом проверить
// console.log(nameV.toLocaleLowerCase().startsWith('влад'))
// console.log(nameV.endsWith('ен'))
// console.log(nameV.repeat(3)) // склеит и выдаст строку

// const string = '         password            ' // пробелы сохраняются
// console.log(string.trim()) // уберет пробелы
// console.log(string.trimLeft()) // уберет пробелы слева
// console.log(string.trimRight()) // уберет пробелы справа

// -------------------------------------------------
// function logPerson(s, nameV, age) {
//     console.log(s, nameV, age)
//     return `${s[0]}${nameV}${s[1]}${age}${s[2]}`
// }
// const personName = 'Владилен'
// const personAge = 26

// const output = logPerson`Имя: ${personName}, Возраст: ${personAge}!!!`

// console.log(output)
// -------------------------------------------------


function logPerson(s, nameV, age) {
    if (age < 0) {
        age = 'Ещё не родился'
    }
    return `${s[0]}${nameV}${s[1]}${age}${s[2]}`
}
const personName = 'Владилен'
const personName2 = 'Елена'
const personAge = 26
const personAge2 = -26

const output = logPerson`Имя: ${personName}, Возраст: ${personAge}!!!`
const output2 = logPerson`Имя: ${personName2}, Возраст: ${personAge2}!!!`

console.log(output)
console.log(output2)




