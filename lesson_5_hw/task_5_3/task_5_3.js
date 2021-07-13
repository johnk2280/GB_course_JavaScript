'use strict'

/**
 * 3*. Сделать так, чтобы товары в каталоге выводились при помощи JS:
 * 3.1. Создать массив товаров (сущность Product);
 * 3.2. При загрузке страницы на базе данного массива генерировать вывод из него.
 * HTML-код должен содержать только div id=”catalog” без вложенного кода. Весь вид каталога генерируется JS.
 * @type {{totalQuantityOfGoodsRow(): HTMLDivElement, init(): void, renderRow(*): HTMLDivElement, catalogContainer: null, getTotalQuantityOfGoods(): number, addProductToBasket(*): string, products: [{quantity: number, price: number, title: string}, {quantity: number, price: number, title: string}, {quantity: number, price: number, title: string}], renderBuyButton(): HTMLButtonElement}}
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


    init() {
        this.catalogContainer = document.getElementById('catalog');
        this.catalogContainer.innerHTML = '<h2 class="div_title">Catalog</h2>';

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
                        Количество: ${product.quantity}`;
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
    },

};


catalog.init()