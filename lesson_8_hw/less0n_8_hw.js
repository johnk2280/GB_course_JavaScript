'use strict'


/**
 * 2. Не выполняя кода, ответить, что выведет браузер и почему:

 if (!("a" in window)) {
    var a = 1;
}
 alert(a);

 Т.к. переменная 'a' ранее не была объявлена,
 другими словами в глобальном пространстве имен нет переменной 'а',
 т.о. alert выведет undefined.

 _____________________________________________________

 var b = function a(x) {
    x && a(--x);
};
 alert(a);

 Аналогично первому вопросу. В пространстве имен window нет переменной с именем 'а'.
 Следовательно - undefined.

 _____________________________________________________
 function a(x) {
    return x * 2;
}
 var a;
 alert(a);

 Аналогично первым двум вопросам - переменная 'a' не определена.
 Т.е. она определена, но ей не присвоено значение.
 Ответ: undefined.
 ______________________________________________________
 function b(x, y, a) {
    arguments[2] = 10;
    alert(a);
}
 b(1, 2, 3);

 Ответ очевиден: 10
 Т.к. мы меняем аргумент с индексом 2,
 который по счастливой случайности оказывается аргументом по имени 'a'.
 _______________________________________________________
 function a() {
    alert(this);
}
 a.call(null);


 Ответ: скорее всего window)
 _________________________________________________________
 */