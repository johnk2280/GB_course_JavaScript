/**
 * 5. *Нарисовать пирамиду с помощью console.log, как показано на рисунке,
 * только у вашей пирамиды должно быть 20 рядов, а не 5:
 */

const asterisk = '*';
const size = 20;

for (let i = 1; i <= size; i++) {
    console.log(asterisk.repeat(i))
}

