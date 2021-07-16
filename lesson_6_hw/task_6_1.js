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
            'quantity': 3
        }
    ],
    catalogContainer: null,

    init(basket) {
        this.basket = basket;

        this.catalogContainer = document.getElementById('catalog');
        this.catalogContainer.innerHTML = '<h2 class="div_title">Catalog</h2>';

        for (let i = 0; i < this.products.length; i++) {
            const productRow = this.renderRow(this.products[i], i);
            const buyButton = this.renderBuyButton(i);
            buyButton.addEventListener('click', this.purchaseEventHandler.bind(this));
            productRow.appendChild(buyButton);
            this.catalogContainer.appendChild(productRow);
        }
        const totalQuantityOfGoodsRow = this.totalQuantityOfGoodsRow();
        this.catalogContainer.appendChild(totalQuantityOfGoodsRow);
    },

    renderRow(product, index) {
        const div = document.createElement('div');
        div.className = 'catalog_product_row';
        div.id = index;
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

    renderBuyButton(id) {
        const button = document.createElement('button');
        button.className = 'buy_button';
        button.id = `${id}`
        button.innerHTML = 'Купить';
        button.style.marginLeft = `20px`;
        return button
    },

    getTotalQuantityOfGoods() {
        return this.products.length
    },

    reduceTheNumberOfProducts(index) {
        this.products[index].quantity -= 1;
    },

    updateRow(parent, productId) {
        const productRow = this.renderRow(this.products[+productId], +productId);
        const buyButton = this.renderBuyButton(+productId);
        buyButton.addEventListener('click', this.purchaseEventHandler.bind(this));
        productRow.appendChild(buyButton);
        parent.parentElement.replaceChild(productRow, parent);
    },

    addProductToBasket(product) {
        for (let i = 0; i < this.basket.products.length; i++) {
            if (product.title === this.basket.products[i].title) {
                this.basket.products[i].quantity += 1;
                return
            }
        }

        product = {...product};
        product.quantity = 1;
        this.basket.products.push(product);
    },

    purchaseEventHandler(eventObj) {
        const eventElement = eventObj.target;
        if (this.products[eventElement.id].quantity > 0) {
            this.reduceTheNumberOfProducts(eventElement.id);
            this.updateRow(eventElement.parentElement, eventElement.id);
            this.addProductToBasket(this.products[eventElement.id]);
            this.basket.init();
        }
    },
};


const basket = {
    products: [],
    basketAmount: null,
    basketContainer: null,


    init() {
        this.basketContainer = document.getElementById('basket');
        this.basketContainer.innerHTML = '<h2 class="div_title">Basket</h2>';

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
                        Полная стоимость товара: ${(product.price * product.quantity).toFixed(2)}`;
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

        div.style.marginTop = '20px';
        return div
    },

    totalBasketPrice() {
        this.basketAmount = 0;
        for (let i = 0; i < this.products.length; i++) {
            this.basketAmount += (this.products[i].price * this.products[i].quantity)
        }
        return +this.basketAmount.toFixed(2)
    },

};

catalog.init(basket)
basket.init()
