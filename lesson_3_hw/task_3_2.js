/**
 * 2. С этого урока начинаем работать с функционалом интернет-магазина.
 * Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от
 * находящихся в ней товаров. Товары в корзине хранятся в массиве.
 * Задачи:
 * a) Организовать такой массив для хранения товаров в корзине;
 * b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
 */

const basket = [
    ['apple', 17.5, 5],
    ['potato', 3.05, 7],
    ['cucumber', 5.75, 2.5]
]

function countBasketPrice(arr) {
    let basketAmount = 0
    for (let i = 0; i < arr.length; i++) {
        basketAmount += (arr[i][1] * arr[i][2])
    } return +basketAmount.toFixed(2)
}

console.log(countBasketPrice(basket))
