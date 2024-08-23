//---------------1-------------//
function square (namSideA, namSideB) {
    if (namSideB > 0 && namSideA > 0) {
       return namSideA * namSideB;
    }
    return 0;
}
// debugger
let result = square(10, 30);
 console.log(result);

 let res2 = square(20, 40);
 console.log(res2);

//---------------2-------------//

function squareCircle(radius) {
    if (radius < 0 && typeof radius !== "number") {
        return radius;
    }else {
        return  Math.PI * radius ** 2;
    }
}
console.log(result);



//----------------3-------------//
function squareCylinder(height, radius) {
    if (height < 0 && typeof radius !== "number") {

    return 2 * Math.PI * radius * (radius + height);
    }
}

console.log(result);

//---------------4--------------//

let arrA = [9, 3, 7];
let arrB = [20, 35, 76];
let arrC = [91, 43, 81];
let arrD  = [63, 25, 67];
let arrF = [89, 13, 44];

function arrayPrint(arr) {
    for (const arrEntry of arr) {
        console.log(arrEntry);

    }
}
arrayPrint(arrA);
arrayPrint(arrB);
arrayPrint(arrC);
arrayPrint(arrD);
arrayPrint(arrF);

//---------------6--------------//

  function createParagraph(text) {
   document.write(`<p>${text}</p>`);
 }
 createParagraph('hello world');
 createParagraph('ciao mondo');
 createParagraph('good morning');
 createParagraph('buon giorno');
 createParagraph('java script');

// function paragraph (text){
//
//     document.write(`<p>${text}</p>`);
// }
// paragraph('hello word');


//---------------//-------------//
let arr = []

function addObjToConcreteArray(obj, array) {
    if (array) {
    array[array.length] = obj;
    }
}
addObjToConcreteArray({id: 1, name: 'Diana'}, arr);
addObjToConcreteArray({id: 2, name: 'Erik', age: 32}, arr);
addObjToConcreteArray({id: 3, name: 'John'}, arr);
addObjToConcreteArray({id: 4, name: 'January', password: 'wj4jb0l6h'}, arr);
addObjToConcreteArray({id: 5, name: 'Joan',age: 31, password: 'vj9dn0l6pa'}, arr);

console.log(arr);


//---------------7--------------//

function createUl(text) {
    document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`);
}
createUl('scram');
createUl('git');
createUl('html');
createUl('js');


//---------------8--------------//

function createUlWithCount(text, counter) {

        document.write('<ul>');
        for (let i  = 0; i < counter; i++) {
            document.write(`<li>${text}</li>`);
        }
        document.write(`</ul>`);
}

createUlWithCount('ciao', 5);


//---------------9--------------//

function foobar (arrayOfSimple) {
    document.write('<ul>');
    for (const item of arrayOfSimple) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);

}
foobar([45, 899,2134, 'hello','ciao']);

//--------------10--------------//
function person(users) {
    for (const user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
        
    }
    
}
person([
    {id: 1, name: 'John', age: 32},
    {id: 2, name: 'John', age: 32},
    {id: 3, name: 'John', age: 32},
    {id: 4, name: 'John', age: 32},
    {id: 5, name: 'John', age: 32},
]);

//--------------11--------------//

function arrayMinNumbers(numbers) {
    let min = numbers[0];
    for (const number of numbers) {
        if (number < min) {
            min = number;
        }

    }
    return min;
    
}
console.log(arrayMinNumbers([17, 23, 134, 3, 76, -34, 135]));

//------------------------------//

//  function square(a, b) {
//    let s = a * b;
//    return s;
// }
// let result = square(10, 30);
// console.log(result);

// let res2 = square(20, 40);
// console.log(res2);

//----------------------------------//

// function factorial(n) {
//     if (n === 0 || n === 1) return 1;
//     else return n * factorial(n - 1);
// }
// let a, b, c, d, e;
// a = factorial(1);
// b = factorial(2);
// c = factorial(3);
// d = factorial(4);
// e = factorial(5);