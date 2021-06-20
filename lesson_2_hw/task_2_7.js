/**
 * 7. *Сравнить null и 0. Попробуйте объяснить результат.
 */

let a, b;
a = 0;
b = null;

console.log(a === b)
console.log(a < b)
console.log(a > b)
console.log(a >= b)
console.log(typeof a)
console.log(typeof b)

/**
 * null по сути аналог None из Python - когда объект возвращает "Ничего".
 * 0 - это тип number.
 * Из-за ошибки в ранней реализации JS null является типом object.
 */