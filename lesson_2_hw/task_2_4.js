/**
 * 4. Присвоить переменной а значение в промежутке [0..15].
 * С помощью оператора switch организовать вывод чисел от a до 15.
 */

function getRandomNumber() {
    return Math.floor(Math.random() * 16)
}

/**
 * Без switch/case.
 * @param a
 * @param arr
 */
function getSequence(a, arr) {
    console.log(arr.slice(a))
}

/**
 * С использованием switch/case.
 * @param a
 * @returns {*}
 */
function getSequence2(a) {
    switch (a) {
        case 0: console.log(a)
        case 1: console.log(a++)
        case 2: console.log(a++)
        case 3: console.log(a++)
        case 4: console.log(a++)
        case 5: console.log(a++)
        case 6: console.log(a++)
        case 7: console.log(a++)
        case 8: console.log(a++)
        case 9: console.log(a++)
        case 10: console.log(a++)
        case 11: console.log(a++)
        case 12: console.log(a++)
        case 13: console.log(a++)
        case 14: console.log(a++)
        case 15: console.log(a++)
    }
}

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let a;
a = getRandomNumber();
console.log(`Случайное число: ${a}`);
getSequence(a, arr);
getSequence2(a);