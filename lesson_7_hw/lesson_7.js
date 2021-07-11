'use strict'

const settings = {
    rowsCount: 21,
    colsCount: 21,
    speed: 2,
    winFoodCount: 50,
};

const config = {
    settings,

    init(userSettings) {
        Object.assign(this.settings, userSettings);
    },

    getRowsCount() {
        return this.settings.rowsCount;
    },

    getColsCount() {
        return this.settings.colsCount;
    },

    getSpeed() {
        return this.settings.speed;
    },

    getWinFoodCount() {
        return this.settings.winFoodCount;
    },

    validate() {
        const result = {
            is_valid: true,
            errors: [],
        };

        if (this.getRowsCount() < 10 || this.getRowsCount() > 30) {
            result.is_valid = false;
            result.errors.push('Неверные настройки, количество строк должно быть в диапазоне от 10 до 30.');
        }

        if (this.getColsCount() < 10 || this.getColsCount() > 30) {
            result.is_valid = false;
            result.errors.push('Неверные настройки, количество столбцов должно быть в диапазоне от 10 до 30.');
        }

        if (this.getSpeed() < 1 || this.getSpeed() > 10) {
            result.is_valid = false;
            result.errors.push('Неверные настройки, значение скорости должно быть в диапазоне от 1 до 10.');
        }

        if (this.getWinFoodCount() < 5 || this.getWinFoodCount() > 50) {
            result.is_valid = false;
            result.errors.push('Неверные настройки, количество еды должно быть в диапазоне от 5 до 50.');
        }

        return result;
    },
};

const map = {
    cells: {},
    usedCells: [],


    init(rowsCount, colsCount) {
        const table = document.getElementById('game');
        table.innerHTML = '';

        this.cells = {};
        this.usedCells = [];

        for (let row = 0; row < rowsCount; row++) {
            const tr = document.createElement('tr');
            tr.classList.add('row');
            table.appendChild(tr);

            for (let col = 0; col < colsCount; col++) {
                const td = document.createElement('td');
                td.classList.add('cell');
                this.cells[`x${col}_y${row}`] = td;
                tr.appendChild(td);

            }
        }
    },

    render(snakePointsArray, foodPoint) {
        for (const cell of this.usedCells) {
            cell.className = 'cell';
        }

    },

};



