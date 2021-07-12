/**
 * 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
 * Обязательно использовать оператор return.
 */

function getRandomNumber() {
    return Math.floor((Math.random() - 0.5) * 100)
}

function getSum(a, b) {
    return a + b
}

function getDifference(a, b) {
    return a - b
}

function getMulti(a, b) {
    return a * b
}

function getDivision(a, b) {
    return a / b
}

let a, b;
a = getRandomNumber()
b = getRandomNumber()

console.log(
    getSum(a, b),
    getDifference(a, b),
    getMulti(a, b),
    getDivision(a, b),
)