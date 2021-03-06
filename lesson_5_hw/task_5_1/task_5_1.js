'use strict'

/**
 * 1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию.
 * Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки.
 * Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.
 * @type {{colCount: number, rowCount: number, letters: string}}
 */

const settings = {
    rowCount: 10,
    colCount: 10,
    letters: ' ABCDEFGH ',
};

const chessBoard = {
    containerElement: null,
    cellCollor: false,

    init(settings) {
        this.containerElement = document.getElementById('board');
        this.rowCount = settings.rowCount;
        this.colCount = settings.colCount;
        this.letters = settings.letters;
    },

    render() {
        for (let row = 0; row < this.rowCount; row++) {
            const tr = document.createElement('tr');
            this.containerElement.appendChild(tr);

            for (let col = 0; col < this.colCount; col++) {
                const td = document.createElement('td');
                tr.appendChild(td);

                if (this.cellCollor) {
                    td.style.backgroundColor = `#000`
                }

                if ((row === 0 || row === 9) && (col !== 0 || col !== 9)) {
                    td.style.backgroundColor = `#fff`;
                    td.innerHTML = this.letters[col];
                }

                if ((col === 0 || col === 9) && (row !== 0 && row !== 9)) {
                    td.style.backgroundColor = `#fff`;
                    td.innerHTML = `${9 - row}`;
                }
                this.cellCollor = !this.cellCollor;
            }
            this.cellCollor = !this.cellCollor;
        }
    }
};

chessBoard.init(settings)
chessBoard.render()