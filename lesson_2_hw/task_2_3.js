/**
 * 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения.
 * Затем написать скрипт, который работает по следующему принципу:
 * если a и b положительные, вывести их разность;
 * если а и b отрицательные, вывести их произведение;
 * если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.
 */


function getRandomNumber() {
    return Math.floor((Math.random() - 0.5) * 100)
}

function compareNumbers(a, b) {
    if (a > 0 && b > 0) {
        console.log(`Разность "a" и "b": ${a - b}`)
    } else if (a < 0 && b < 0) {
        console.log(`Произведение "a" и "b": ${a * b}`)
    } else {
        console.log(`Сумма "a" и "b": ${a + b}`)
    }
}

let a, b;
a = getRandomNumber()
b = getRandomNumber()

console.log(`Число 'a': ${a}\nЧисло 'b': ${b}`)
console.log("Результат работы функции: ")
compareNumbers(a, b)
