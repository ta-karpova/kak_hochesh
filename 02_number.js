// --------------------------------------------------
// 1. Number
// --------------------------------------------------
// const num = 42 // integer
// const float = 42.42 // float
// const pow = 10e3 // степень
// console.log('MAX_SAFE_INTEGER ', Number.MAX_SAFE_INTEGER)
// console.log('Math.pow 53', Math.pow(2, 53) - 1)
// console.log('MIN_SAFE_INTEGER ', Number.MIN_SAFE_INTEGER)
// console.log('MAX_VALUE ', Number.MAX_VALUE)
// console.log('MIN_VALUE ', Number.MIN_VALUE)
//                          бесконечность
// console.log('POSITIVE_INFINITY ', Number.POSITIVE_INFINITY)
// console.log('NEGATIVE_INFINITY ', Number.NEGATIVE_INFINITY)
// console.log('2 / 0 ', 2 / 0)

// console.log(Number.NaN) //Not A Number
// console.log(typeof NaN)

// const weird = 2 / undefined
// console.log(isNaN(weird))

// console.log(Number.isNaN(42)) //адекватно ли 42
// console.log(Number.isFinite(Infinity)) //конечна ли бесконечность
// console.log(Number.isFinite(42))

// const stringInt = '42'
// const stringFloat = '42.42'
// console.log(stringInt + 2) // получится 422, поэтому -> 1, 2 или 3 варианты
// console.log(Number.parseInt(stringInt) + 2) //parsing integer
// console.log(Number(stringInt) + 2)
// console.log(+stringInt+2)

// console.log(parseInt(stringFloat)+2) //выведет 44, так как parseInt не работает с десятичными частями, складывает целые 
//                   поэтому parseFloat
// console.log(parseFloat(stringFloat)+2)

// console.log(Number.parseFloat(stringFloat) + 2) 
// console.log(Number(stringFloat) + 2)
// console.log(+stringFloat+2)

// console.log(0.2 + 0.4) // хотелось 0.6, а результат 0.6000000000000001
// console.log((2 / 5)+(1 / 5)) // то же самое
// console.log((0.4 + 0.2).toFixed(4)) // toFixed - отсекает (!не округляет!) знаки после ,
// console.log(+(0.4 + 0.2).toFixed(1))
// console.log(parseFloat((0.4 + 0.2).toFixed(1)))

// --------------------------------------------------
// 2. BigInt - новый тип данных для чисел, больших чем MAX_SAFE_INTEGER (оперирует только с целыми)
// --------------------------------------------------
// console.log(typeof 9007199254740991999999999999) // выводит number
// console.log(typeof 9007199254740991999999999999n) // выводит bigint

// console.log(9007199254740991999999999999n-90071992547409919999999999n)
// console.log(-9007199254740991999999999999n-90071992547409919999999999n)
// console.log(9007199254740991999999999999n-90071992547409919999999999n)

// console.log(10n-4) // error BigInt работает только с BigInt
//                преобразовать BigInt в Int
// console.log(parseInt(10n) - 4)
//              преобразовать Int в BigInt  
// console.log(10n - BigInt(4))
// console.log(5n / 2n) // получится 2n вместо 2.5n, ибо BigInt отсекает дроби

// --------------------------------------------------
// 3. Math - взаимодействие с математическими операциями
// --------------------------------------------------

// console.log(Math.E) // e
// console.log(Math.PI) // pi

// console.log(Math.sqrt(25)) // квадратный корень
// console.log(Math.pow(5, 3)) // степень

// console.log(Math.abs(-2325)) // модуль
// console.log(Math.max(42, 12, 434, 25)) // максимум
// console.log(Math.min(42, 12, 434, 25)) // минимум
// console.log(Math.floor(4.9)) // 4 - возвращает меньшее целое соседнее число 
// console.log(Math.ceil(4.1)) // 5 - возвращает большее целое соседнее число 
// console.log(Math.round(4.4)) // округляет по правилам
// console.log(Math.trunc(4.9)) // возвращает целую часть числа (дробь просто удаляет)
// console.log(Math.sin(4.9)) // и прочая тригонометрия
// console.log(Math.random()) // рандом (почему-то от 0 до 1)

// --------------------------------------------------
// 4. Example
// --------------------------------------------------

//     вывести случайное число в заданном диапазоне и округлить куда-нибудь
function getRandomBetween(min, max){
//    return Math.random()*(max - min) + min
    return Math.floor(Math.random()*(max - min + 1) + min) // из-за floor теряется 1 значение, поэтому +1
}
console.log(getRandomBetween(10, 42))



