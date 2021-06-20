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

/**
 * Классическое ветвление.
 * @param a
 * @param b
 */
function compareNumbers(a, b) {
    if (a >= 0 && b >= 0) {
        console.log(`Разность "a" и "b": ${a - b}`)
    } else if (a < 0 && b < 0) {
        console.log(`Произведение "a" и "b": ${a * b}`)
    } else {
        console.log(`Сумма "a" и "b": ${a + b}`)
    }
}

/**
 * С применением тернарных операторов.
 * @param a
 * @param b
 */
function compareNumbers2(a, b) {
    let result;
    result = a >= 0 && b >= 0
        ? `Разность "a" и "b": ${a - b}`
        : a < 0 && b < 0
            ? `Произведение "a" и "b": ${a * b}`
            : `Сумма "a" и "b": ${a + b}`
    console.log(result)
}

let a, b;
a = getRandomNumber()
b = getRandomNumber()

console.log(`Число 'a': ${a}\nЧисло 'b': ${b}\n`)
console.log("Результат работы функции: ")
compareNumbers(a, b)
compareNumbers2(a, b)
