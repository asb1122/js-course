
// let num = 50;

// // if(num < 49) {
// //     console.log('error');
// // } else if (num > 100) {
// //     console.log('much')
// // } else {
// //     console.log('ok')
// // }

// // (num === 50) ? console.log('ok') : console.log('error');

// switch (num) {
//     case 49: 
//         console.log('no');
//         break;
//     case 100:
//         console.log('no');
//         break;
//     case 50:
//         console.log('yes');
//         break;
//     default:
//         console.log('no no no');
//         break;
// }

// // const hamburger = 5;
// // const fries = null;

// // if (hamburger && fries) {
// //     console.log('я сыт!');
// // }

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
//     console.log('все довольны!');
// } else {
//     console.log('мы уходим');
// }


// let johnReport, alexReport, samReport, mariaReport = 'done';

// console.log(johnReport || alexReport || samReport || mariaReport)


// console.log( !1 && 2 || !3 );

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }


// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num <= 55);

// for (let i = 1; i < 10; i++) {
//     if (i === 7) {
//         // break;
//         continue;
//     }

//     console.log(i);
// }

// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
//     }
// }


/////////////////////////////
// *
// **
// ***
// ****
// *****
// ******

let result = '';
const length = 7;

for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) {
        result += '*';
    }

    result += '\n';
}

console.log(result);
////////////////////////////////


first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) continue first
            console.log(`Third level: ${k}`);
        }
    }
}

//При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл
for (let i = 5; i <= 10; i++) {
    console.log(i);
}

let num = 5

while (num <= 10) {
    console.log(num);
    num++;
}

//При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл
for(let i = 20; i >= 10; i--) {
    if(i === 13) {
       break; 
    }
    
    console.log(i)
}

//При помощи цикла for выведите чётные числа от 2 до 10 включительно
for(let i = 2; i <= 10; i++) {
    if(i % 2 == 0) {
        console.log(i);
    }
}

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

let num = 2;

while(num <= 16) {
    if(num % 2 !== 0) {
        console.log(num); 
    }
    num++;
}

//Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]
let arr = [];

for (i = 5; i <=10; i++) {
    console.log(i)
    arr[i];
    console.log(arr)
}

//Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]
const arrayOfNumbers = [];

for (let i = 5; i < 11; i++) {
    arrayOfNumbers[i - 5] = i;
}

console.log(arrayOfNumbers);


// Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.

const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

for(let i = 0; i < arr.length; i++) {
    result[i] = arr[i];
}

console.log(result);


//Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если
//попадается строка строка - то к ней было добавлено " - done".
//Для определения типа данных используйте typeof();

const data = [5, 10, 'Shopping', 20, 'Homework'];

for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === 'number') {
        data[i] = data[i] * 2;
    } else if (typeof data[i] === 'string') {
        data[i] = `${data[i]} - done`;
    }
}

console.log(data);

//Разверните массив data наоборот при помощи цикла и запишите данные в массив result.

const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];

for (let i = 1; i <= data.length; i++) {
    result[i - 1] = data[data.length - i]
}

console.log(result);

//    *
//   ***
//  *****
// *******
// *********
//***********

const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += ' ';
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += '*';
    }

    result += '\n';
}

console.log(result);

