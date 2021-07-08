'use strict'

/**
 * 1. Доработать модуль корзины.
 * a. Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы;
 * b. Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида.
 */

const catalog = {
    catalogProducts: [
        {
            'title': 'apple',
            'price': 17.5,
            'quantity': 51
        },
        {
            'title': 'potato',
            'price': 3.05,
            'quantity': 17
        },
        {
            'title': 'cucumber',
            'price': 5.75,
            'quantity': 25
        }
    ],
    catalogContainer: null,


    init() {
        this.catalogContainer = document.getElementById('catalog');
        this.catalogContainer.innerHTML = '<h2 class="div_title">Catalog</h2>';

        for (let i = 0; i < this.catalogProducts.length; i++) {
            const productRow = this.renderRow(this.catalogProducts[i]);
            const buyButton = this.renderBuyButton(i);
            buyButton.addEventListener('click', this.addProductToBasket);
            productRow.appendChild(buyButton);
            this.catalogContainer.appendChild(productRow);
        }
        const totalQuantityOfGoodsRow = this.totalQuantityOfGoodsRow();
        this.catalogContainer.appendChild(totalQuantityOfGoodsRow);
    },

    renderRow(product) {
        const div = document.createElement('div');
        div.className = 'catalog_product_row';
        div.innerHTML = `Наименование: ${product.title}; 
                        Стоимость за ед.: ${product.price}; 
                        Количество: ${product.quantity};
                        Полная стоимость товара: ${(product.price * product.quantity).toFixed(2)}`;
        return div
    },

    totalQuantityOfGoodsRow() {
        const div = document.createElement('div');
        div.className = 'catalog_total_quantity_of_goods';
        if (this.catalogProducts.length !== 0) {
            div.innerHTML = `Товаров в каталоге: ${this.getTotalQuantityOfGoods()}`;
        } else {
            div.innerHTML = 'В каталоге нет товаров';
        }

        div.style.marginTop = '20px';
        return div
    },

    renderBuyButton(id) {
        const button = document.createElement('button');
        button.className = 'buy_button';
        button.id = `${id}`
        button.innerHTML = 'Купить';
        button.style.marginLeft = `20px`;
        return button
    },

    getTotalQuantityOfGoods() {
        return this.catalogProducts.length
    },

    addProductToBasket(eventObj) {
        const idEventElement = eventObj.target.id;
        catalog.catalogProducts[idEventElement].quantity -= 1;
        console.log(catalog.catalogProducts)
        // return eventElement.parentElement.innerText
    },
};


const basket = {
    catalogProducts: [],
    basketAmount: null,
    basketContainer: null,


    init() {
        this.basketContainer = document.getElementById('basket');
        this.basketContainer.innerHTML = '<h2 class="div_title">Basket</h2>';

        for (let i = 0; i < this.catalogProducts.length; i++) {
            const productRow = this.renderRow(this.catalogProducts[i]);
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
        if (this.catalogProducts.length !== 0) {
            div.innerHTML = `В корзине товаров: ${this.catalogProducts.length}, на сумму: ${this.totalBasketPrice()}`;
        } else {
            div.innerHTML = 'Корзина пуста';
        }
        return div
    },

    totalBasketPrice() {
        for (let i = 0; i < this.catalogProducts.length; i++) {
            this.basketAmount += (this.catalogProducts[i].price * this.catalogProducts[i].quantity)
        }
        return +this.basketAmount.toFixed(2)
    },

};

catalog.init()
basket.init()
