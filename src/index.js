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



// 5 Функция принимает только целое число от 1 до 36. Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение: "Ошибка. Проверьте правильность введенного номера места"Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует" getCoupeNumber(33)  => 9

function getCoupeNumber(num) {
    if (num < 0 || !Number.isInteger(num)) {
        return `Error. Check that the seat number entered is correct`;
    }

    if (num == 0 || num > 36) {
        return `Places like this doesn't exist`;
    }
    const couperNumber = Math.round(num / 4);
    return couperNumber;
}

console.log(getCoupeNumber(36));



// 6 Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки.

function getTimeFromMinutes(num) {
    if (num < 0 || !Number.isInteger(num)) {
        return `Error, check your data`;
    }
    const hour = Math.floor(num / 60);
    const munites = num - (hour * 60);
    let str = '';
    switch (hour) {
        case 1:
            str += `${hour} час`;
            break;
        case 2:
        case 3:
        case 4:
            str += `${hour} часа`;
            break;
        case 0:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
            str += `${hour} часов`;
            break;
        default:
            str += `error`;
    }
    return `Time: ${str} ${munites} минут`;
}

console.log(getTimeFromMinutes(15));



// 7 Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0. findMaxNumber(1, 5, 6.6, 11); =>  11

function findMaxNumber(...num) {
    for (let i = 0; i < num.length; i++) {
        if (typeof (num[i]) != 'number' || num.length < 4) {
            return 0;
        }
    }
    const maxNumber = Math.max(...num);
    return maxNumber;
}

console.log(findMaxNumber(1, 5, 12, 11));



// 8 числа Фибоначчи fib(4) => "0 1 1 2" , fib(7) => "0 1 1 2 3 5 8"

function fib(num) {
    let str = '0 1';
    let num1 = 0;
    let num2 = 1;
    let num3;
    for (let i = 2; i < num; i++) {
        num3 = num1 + num2;
        num1 = num2;
        num2 = num3;
        str += ` ${num2}`;

    }
    return str;

}

console.log(fib(7));




// --- Задачи на работу с объектами и массивом--- //


// 1 Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом. showExperience(personalPlanPeter) => '1 month'

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },

};

function showExperience(plan) {
    const { skills } = plan;
    return `${skills.exp}`;
}


console.log(showExperience(personalPlanPeter));



// 2 Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.Пример: showProgrammingLangs(personalPlanPeter)  => "Язык js изучен на 20% Язык php изучен на 10%". Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.


function showProgrammingLangs(plan) {
    const { programmingLangs } = plan.skills;
    let str = '';
    if (Object.keys(programmingLangs).length === 0) {
        return `The Object is empty`;
    }
    for (let i in programmingLangs) {
        str += `Язык ${i} изучен на ${programmingLangs[i]} \n`;
    }
    return str;
}

console.log(showProgrammingLangs(personalPlanPeter));


// 3 Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде. Пример: personalPlanPeter.showAgeAndLangs(personalPlanPeter) => 'Мне 29 и я владею языками: RU ENG'


const personalPlanPeter1 = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLans: function (plan) {
        const { languages } = plan.skills;
        const { age } = plan;
        let str = `I'm ${age} and i speak: `;
        // const str = [...languages];
        // const [first, second] = languages;
        // return `I'm ${plan.age} and i speak: ${first.toUpperCase()} ${second.toUpperCase()}`;
        languages.forEach(lang => {
            str += `${lang.toUpperCase()} `;
        });
        return str;
    }

};


console.log(personalPlanPeter1.showAgeAndLans(personalPlanPeter1));



// 4 Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате. showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda' Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     if(!arr.length) {
//         return 'Семья пуста';
//     }
//     const result = arr.join(', ');
//     return `Семья состоит из: ${result}`;
// }

function showFamily(arr) {
    let str = '';

    arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';
    arr.forEach(person => {
        str += `${person} `;
    });
    return str;
}


console.log(showFamily(family));



// 5 напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль эти строки в нижнем регистре.

// Пример:

// standardizeStrings(favoriteCities)  выведет в консоль

// lisbon
// rome
// milan
// dublin

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];


function standardizeStrings(arr) {
    let str = '';
    arr.forEach(cities => {
        str += `${cities.toLowerCase()}\n`;
    });
    return str;
}

console.log(standardizeStrings(favoriteCities));


// 6  Задача с собеседований. Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.Пример: const someString = 'This is some strange string'; reverse(someString) => 'gnirts egnarts emos si sihT'

const someString = 'This is some strange string';

function reverse(str) {
    if (typeof (str) !== 'string') return 'Error';

    let reversStr = '';
    const arr = str.split(' ').reverse();
    // const arr = str.split('').reverse();
    arr.forEach(item => {
        let newStr = '';
        for (let i = item.length; i > 0; i--) {
            newStr += item[i - 1];

        }
        reversStr += `${newStr} `;
    });
    return reversStr;
    // return arr.join('');
}

console.log(reverse(someString));



// 7 Вам нужно создать главную функцию банкомата availableCurr, которая принимает два аргумента: первый - это массив со всеми доступными валютами из двух банков сразу (сейчас представим, что они не могут повторяться), второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате. Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'. Функция возвращает строку в нужном виде. 


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(available, missing = 'UAH') {
    let str = '';
    available.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты: \n';

    available.forEach(currency => {
        if (currency !== missing) {
            str += `${currency}\n`;
        }
    });
    return str;
}


console.log(availableCurr([...baseCurrencies, ...additionalCurrencies]));



// 8 Определить буджет магазина

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function isBudgetEnough(data) {
    let S = 0;
    let V = 0;
    const { shops, height, moneyPer1m3, budget } = data;
    shops.forEach(item => {
        const { width, length } = item;
        S += width * length;
    });
    V = S * height;

    return (V * moneyPer1m3) <= budget ? 'Бюджета достаточно' : 'Бюджета недостаточно';
}

console.log(isBudgetEnough(shoppingMallData));


// 9 команд может быть только 3 по 3 человека. Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк. Эти группы должны быть массивами. Как итог, функция возвращает новый массив с тремя командами и строкой как 4й элемент.

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'].sort();

function sortStudentsByGroups(student) {

    let str = '';
    const arr = [];
    for (let i = 0; i <= student.length; i++) {
        if (i === student.length) {
            break;
        }
        str += `${student[i]} `;

        if (str.trim().split(' ').length == 3) {
            arr.push(str.trim().split(' '));
            str = '';
        }
    }
    if (str.length !== 0) {
        arr.push(`Оставшиеся студенты: - ${str.trim().split(' ').join('')}`);
    } else {
        arr.push('Оставшиеся студенты: -');
    }
    return arr;
}

console.log(sortStudentsByGroups(students));



// 10 Поиск ошибки

const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        { name: 'Alice', age: 22 }, { name: 'John', age: 24 }
    ],
    averageLunchPrice: '20$',
    openNow: true
};



// function isOpen(prop) {
//     let answer = '';
//     prop ? answer = 'Закрыто' : answer = 'Открыто';

//     return answer;
// }

// console.log(isOpen(restorantData.openNow));



function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < average) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

// console.log(isAverageLunchPriceTrue(restorantData.menu[2], restorantData.menu[3], restorantData.averageLunchPrice));



function transferWaitors(data) {
    const copy = Object.assign({}, data);
    // Так как это верхний уровень объекта, то значение 
    // будет меняться только у копии
    copy.waitors = [{ name: 'Mike', age: 32 }];
    return copy;
}

console.log(transferWaitors(restorantData));

console.log(restorantData);