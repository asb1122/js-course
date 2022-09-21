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