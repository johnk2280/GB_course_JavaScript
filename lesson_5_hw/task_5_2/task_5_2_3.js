'use strict'


/**
 * 2. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре.
 * Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
 * 2.1. Пустая корзина должна выводить строку «Корзина пуста»;
 * 2.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
 *
 * 3*. Сделать так, чтобы товары в каталоге выводились при помощи JS:
 * 3.1. Создать массив товаров (сущность Product);
 * 3.2. При загрузке страницы на базе данного массива генерировать вывод из него.
 * HTML-код должен содержать только div id=”catalog” без вложенного кода. Весь вид каталога генерируется JS.
 * @type {{basketContainer: null, renderRow(*): HTMLDivElement, totalBasketPrice(): *, basketAmount: null, renderBasket(): void, renderTotalPriceRow(): HTMLDivElement, products: [{quantity: number, price: number, title: string}, {quantity: number, price: number, title: string}, {quantity: number, price: number, title: string}]}}
 */

const basket = {
    products: [
        {
            'title': 'apple',
            'price': 17.5,
            'quantity': 5
        },
        {
            'title': 'potato',
            'price': 3.05,
            'quantity': 7
        },
        {
            'title': 'cucumber',
            'price': 5.75,
            'quantity': 5
        }
    ],

    // products: [],

    basketAmount: null,
    basketContainer: null,

    totalBasketPrice() {
        for (let i = 0; i < this.products.length; i++) {
            this.basketAmount += (this.products[i].price * this.products[i].quantity)
        }
        return +this.basketAmount.toFixed(2)
    },

    renderBasket() {
        this.basketContainer = document.getElementById('basket');

        for (let i = 0; i < this.products.length; i++) {
            const productRow = this.renderRow(this.products[i]);
            this.basketContainer.appendChild(productRow)
        }

        const totalPriceRow = this.renderTotalPriceRow()
        this.basketContainer.appendChild(totalPriceRow)

    },

    renderRow(product) {
        const div = document.createElement('div');
        div.className = 'product_row'
        div.innerHTML = `Наименование: ${product.title}; 
                        Стоимость за ед.: ${product.price}; 
                        Количество: ${product.quantity};
                        Полная стоимость товара: ${product.price * product.quantity}`;
        return div
    },

    renderTotalPriceRow() {
        const div = document.createElement('div');
        div.className = 'total_row'
        if (this.products.length !== 0) {
            div.innerHTML = `В корзине товаров: ${this.products.length}, на сумму: ${this.totalBasketPrice()}`;
        } else {
            div.innerHTML = 'Корзина пуста';
        }
        return div
    },

};

basket.renderBasket()
