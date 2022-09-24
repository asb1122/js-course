'use strict';

let num = 20;

function showFirstMessage(msg) {
    console.log(msg)
    let num = 10;
    console.log(num);
}

showFirstMessage("hello");
console.log(num);


function calc(a, b) {
    return (a + b);
}

console.log(calc(5, 7));
console.log(calc(6, 9));
console.log(calc(3, 0));

function ret() {
    let num = 50;
    return num;
}
 
const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log('hi');
};

logger();

const calc = (a, b) => {
    console.log('q');
    return a + b;
};

console.log(calc(3, 7));

const usdCourse = 28.5;
const eurCourse = 32.5;
const discount = 0.9;

function convert (curr ,amount) {
    return curr * amount;
}

function promotion(result) {
    console.log(result * discount);
}

const res = convert(500, usdCourse);

promotion(res);
promotion(convert(eurCourse , 500));

// convert(usdCourse , 500);
// convert(eurCourse , 500);


// return препывает выполнение функции
// пример ниже это указывает
function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i)
        if (i === 3) {
            return
        }
    }

    console.log('done');
}

test();

// каждая функция возвращает undefined
// это пример проверки этой фичи
function doNothing() {}
console.log(doNothing() === undefined)

const userName = 'Антон';

function sayHello(name) {
    return `Привет ${name}`
}

sayHello('Alex');


function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1]
}

returnNeighboringNumbers(5);

function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
            // Тут без черточек в конце
        } else {
            str += `${num * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }

    return str;
}

getMathResult(10, 5);


//

const str = 'test';

console.log(str.toUpperCase());
console.log(str);

const fruit = 'Some fruit';

console.log(fruit.indexOf('q'));

const logg = 'hello world !';
// console.log(logg.slice(-5, -1))
// console.log(logg.substring(6, 11));
console.log(logg.substr(6, 5));


const num = 12.2;
console.log(Math.round(num));

const test = '12.2px';
console.log(parseInt(test))
console.log(parseFloat(test))

//объем|площадь куба
function calculateVolumeAndArea(length) {
    if (typeof(length) !== 'number' || length <= 0 || !Number.isInteger(length)) {
        return "При вычислении произошла ошибка";
    }

    let volume = 0,
        area = 0;
    
    volume = length * length * length;
    area = 6 * (length * length);

    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

calculateVolumeAndArea(5);

//купе номер
function getCoupeNumber(seat) {
    if(typeof(seat) !== 'number' || seat < 0 || !Number.isInteger(seat)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }

    if(seat === 0 || seat > 36) {
        return 'Таких мест в вагоне не существует'
    } 
    
    return Math.ceil(seat / 4);
}

getCoupeNumber(33);


//целое число минут и возвращает время в нужном формате строки. 
function getTimeFromMinutes(mins) {
    if (typeof(mins) !== 'number' || mins < 0 || !Number.isInteger(mins)) {
        return `Ошибка, проверьте данные`
    }

    let hours = Math.floor(mins/60);
    let minutes = mins % 60;
    let strHours = '';

    switch (hours) {
        case 0: 
            strHours = 'часов';
            break;
        case 1:
            strHours = 'час';
            break;
        case 2:
        case 3:
        case 4:
            strHours = 'часа';
            break;
        default:
            strHours = 'часов';
    }

    return `Это ${hours} ${strHours} и ${minutes} минут`;
}

getTimeFromMinutes(350)


// функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0.


function findMaxNumber(a, b ,c, d) {
    if (typeof(a) !== 'number' ||
        typeof(b) !== 'number' ||
        typeof(c) !== 'number' ||
        typeof(d) !== 'number') {
        return 0;
    } else {
        return Math.max(a, b ,c, d);
    }
}

findMaxNumber(1, 5, 6.6, 10.5);
findMaxNumber(1, 5, '6', '10');

//фибоначи (без рекурсии)

function fib(num) {
    if(typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return '';
    }

    let result = '';
    let first = 0;
    let second = 1;

    for (let i = 0; i < num; i++) {
        if (i + 1 === num) {
            result += `${first}`;
        } else {
            result += `${first}`;
        }

        let third = first + second;
        first = second;
        second = third;
    }

    return result
}

fib(4)
fib(7)
fib('7')
fib(1)
fib(0)