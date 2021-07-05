'use strict'
const settings = {
    rowCount: 10,
    colCount: 10,
    letters: ' abcdefgh ',
};

const chessBoard = {
    containerElement: null,
    cellCollor: false,

    init(rowCount, colCount, letters) {
        this.containerElement = document.getElementById('board');
        this.rowCount = rowCount;
        this.colCount = colCount;
        this.letters = letters;
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

                if ((row === 0 || row === 9) && col !== 0) {
                    td.style.backgroundColor = `#fff`;
                    td.innerHTML = this.letters[col];
                }

                if ((col === 0 || col === 9) && (row !== 0 && row !== 9)) {
                    td.style.backgroundColor = `#fff`;
                    td.innerHTML = `${9 - row}`;
                }

                this.cellCollor = !this.cellCollor
            }
            this.cellCollor = !this.cellCollor
        }
    },
};

chessBoard.init(settings.rowCount, settings.colCount, settings.letters)
chessBoard.render()