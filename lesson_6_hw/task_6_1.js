'use strict'

/**
 * 1. Доработать модуль корзины.
 * a. Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы;
 * b. Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида.
 */

const catalog = {
    products: [
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


    renderCatalog() {
        this.catalogContainer = document.getElementById('catalog');

        for (let i = 0; i < this.products.length; i++) {
            const productRow = this.renderRow(this.products[i]);
            const buyButton = this.renderBuyButton();
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
        if (this.products.length !== 0) {
            div.innerHTML = `Товаров в каталоге: ${this.getTotalQuantityOfGoods()}`;
        } else {
            div.innerHTML = 'В каталоге нет товаров';
        }

        div.style.marginTop = '20px';
        return div
    },

    renderBuyButton() {
        const button = document.createElement('button');
        button.className = 'buy_button';
        button.innerHTML = 'Купить';
        button.style.marginLeft = `20px`;
        return button
    },

    getTotalQuantityOfGoods() {
        return this.products.length
    }
};

catalog.renderCatalog()