/**
 * 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
 */

function getArray(num) {
    const arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(i)
    }
    return arr
}

function sieve(num) {
    const arr = getArray(num);
    let i = 3;
    while (i <= num) {
        if (arr[i] !== 0 && arr[i] % 2 === 0) {
            arr[i] = 0
        } else {
            for (let j = i + 1; j < num; j++) {
                if (arr[j] !== 0 && arr[j] % arr[i] === 0) {
                    arr[j] = 0
                }
            }
        } i++
    } return arr
}

const arraySize = 100
console.log(sieve(arraySize).slice(2,));