'use strict';

console.log('arr' + ' - jbject');
console.log(4 + ' - jbject');
console.log(4 + +'5'); // - + делает строку цифрой


// инкримент и дикримент укорочение кода

let incr = 10,
    decr = 10;

// incr++; // постфикс и префикс
// decr--;

// console.log(incr++);
// console.log(decr--); // сначала в консольлог потом суммирование

console.log(++incr); // наоборот 
console.log(--decr);

console.log(5%2); // остаток

// = присваивание
// == сравнение

console.log(2*4 == 8);
console.log(2*4 == '8');
console.log(2*4 === '8');
console.log(2*4 === 8);

// && - и это правда и это правда
// || - или это правда или это правда

const isChecked = true,
    isClose = true;

const isChecked = true,
    isClose = false;

console.log(isChecked && isClose);

const isChecked = true,
    isClose = false;

console.log(isChecked || isClose);

const isChecked = false,
    isClose = false;

console.log(isChecked || isClose);


const isChecked = false,
    isClose = false;

console.log(isChecked || !isClose); // оператор отрицания

console.log(1*4 != 8); // не равен
console.log(1*4 + 2 != 6); // не равен
console.log(1*4 + 2 !== '6');

