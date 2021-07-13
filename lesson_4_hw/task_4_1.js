/**
 * 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999,
 * мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни.
 * Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
 * Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
 */

function getNumberRanks(num) {
    const numberRanks = [
        'units',
        'dozens',
        'hundreds'
    ]
    const result = {};
    const numLength = num.toString().length

    if (numLength > 3) {
        console.log('Разрядность числа больше 3-х')
    } else {
        for (let i = 0; i < numLength; i++) {
            result[numberRanks[i]] = num % 10
            num = Math.trunc(num / 10)
        }
    }
    return result
}

console.log(getNumberRanks(249))
