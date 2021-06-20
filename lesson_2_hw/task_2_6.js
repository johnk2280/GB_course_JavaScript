/**
 * 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
 * где arg1, arg2 – значения аргументов, operation – строка с названием операции.
 * В зависимости от переданного значения операции выполнить одну из арифметических операций
 * (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).
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

function mathOperations(a, b, sign) {
    switch (sign) {
        case '+': return getSum(a, b)
        case '-': return  getDifference(a, b)
        case '*': return getMulti(a, b)
        case '/': return getDivision(a, b)
        default: return 'Undefined symbol'
    }
}

let a, b;
a = getRandomNumber()
b = getRandomNumber()

console.log(
    mathOperations(a, b, '+'),
    mathOperations(a, b, '-'),
    mathOperations(a, b, '/'),
    mathOperations(a, b, '0'),
    mathOperations(a, b, '*')
)