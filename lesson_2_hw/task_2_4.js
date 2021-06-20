/**
 * 4. Присвоить переменной а значение в промежутке [0..15].
 * С помощью оператора switch организовать вывод чисел от a до 15.
 */

function getRandomNumber() {
    return Math.floor(Math.random() * 16)
}

let a;
a = getRandomNumber()
console.log(a)