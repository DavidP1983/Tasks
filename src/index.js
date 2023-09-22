"use strict";

// --- Condition and Lopp-- //

// 1 Создать геом-кую фигуру 
let result = '';

for (let i = 1; i < 7; i++) {
    for (let j = 0; j < i; j++) {
        result += "*";
    }
    result += '\n';
}

console.log(result);



// 2  При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой 
for (let i = 5; i <= 10; i++) {
    console.log(i);
}

let num = 5;
while (num <= 10) {
    console.log(num);
    num++;
}


// 3 При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл
for (let i = 20; i > 10; i--) {
    if (i == 13) {
        break;
    }
    console.log(i);
}


// 4 При помощи цикла for выведите чётные числа от 2 до 10 включительно
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}


// 5 Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть.
for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

let num2 = 2;

while (num2 <= 16) {
    if (num2 % 2) {
        console.log(num2);
    }
    num2++;
}


// 6 Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]

const arr = [];

for (let i = 5; i <= 10; i++) {
    arr[i - 5] = i;
}

console.log(arr);



// 7 Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд. Должен получиться точно такой же массив

const result1 = [];
const arr1 = [3, 5, 8, 16, 20, 23, 50];

for (let i = 0; i < arr1.length; i++) {
    result1[i] = arr1[i];
}

console.log(result1);


// 8 Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".[ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

const data = [5, 10, 'Shopping', 20, 'Homework'];

for (let i = 0; i < data.length; i++) {
    if (typeof (data[i]) === 'number') {
        data[i] *= 2;
    } else {
        data[i] = `${data[i]} - done`;
    }
}

console.log(data);


// 9 Разверните массив data наоборот при помощи цикла и запишите данные в массив result. [ 'Homework', 20, 'Shopping', 10, 5 ]

const data1 = [5, 10, 'Shopping', 20, 'Homework'];
const result2 = [];

for (let i = data1.length; i > 0; i--) {
    result2[5 - i] = data1[i - 1];
}

console.log(result2);



// 10 Задача на формирование фигуры

let result3 = '';

for (let i = 0; i < 6; i++) {

    for (let j = 5; j > i; j--) {
        result3 += ' ';
    }

    if (i > 0) {
        result3 += "*";
    }

    for (let k = 1; k < i * 2; k++) {
        result3 += "*";
    }

    result3 += "*";
    result3 += '\n';
}

console.log(result3);




// --- Function's Tasks --- //


// 1 Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.

function sayHello(name) {
    return `Hello ${name}`;
}

console.log(sayHello('David'));


// 2 Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше. [4, 5, 6].

function number(num) {
    const arr = [];
    let decrNumber = num - 1;
    for (let i = 0; i < 3; i++) {
        arr[i] = decrNumber + i;
    }
    return arr;
}

console.log(number(5));



// 3 Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть. 5---10---15


function getMathResult(num, progress) {
    if (typeof (progress) !== 'number' || progress <= 0) {
        return num;
    }
    let str = '';

    for (let i = 1; i <= progress; i++) {
        if (i == progress) {
            str += `${num * i}`;
        } else {
            str += `${num * i}---`;
        }


    }
    return str;
}

console.log(getMathResult(5, 3));



// 4  Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба (тоже базовая математика, иногда используется в создании анимаций). Эта функция принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки, который изображен в примерах. 'Объем куба: 125, площадь всей поверхности: 150'

function calculateVolumeAndArea(cubeEdgeLenght, sq = 6) {

    if (cubeEdgeLenght < 0 || !Number.isInteger(cubeEdgeLenght)) {
        return `an error occurred during calculation`;
    }

    let num = 1;
    let v = cubeEdgeLenght;
    while (num < 3) {
        v *= cubeEdgeLenght;
        num++;
    }
    const s = (cubeEdgeLenght * cubeEdgeLenght) * sq;
    return `V value: ${v}, S value of cube: ${s}`;
}

console.log(calculateVolumeAndArea(5));