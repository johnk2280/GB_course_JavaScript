/**
 * 2.Продолжить работу с интернет-магазином:
 * 2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
 * 2.2. Реализуйте такие объекты.
 * 2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.
 */

// const basket = [
//     ['apple', 17.5, 5],
//     ['potato', 3.05, 7],
//     ['cucumber', 5.75, 2.5]
// ];

const customerBasket = [
    {
        'product': 'apple',
        'price': 17.5,
        'quantity': 5
    },
    {
        'product': 'potato',
        'price': 3.05,
        'quantity': 7
    },
    {
        'product': 'cucumber',
        'price': 5.75,
        'quantity': 5
    }
]


const basket = {
    basket: null,
    basketAmount: null,

    init(customerBasket) {
        this.basket = customerBasket
    },

    totalBasketPrice() {
        for (let i = 0; i < this.basket.length; i++) {
            this.basketAmount += (this.basket[i].price * this.basket[i].quantity)
        }
        return +this.basketAmount.toFixed(2)
    }
}

basket.init(customerBasket);
console.log(basket.totalBasketPrice());

