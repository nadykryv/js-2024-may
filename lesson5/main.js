//-----------------------1------------------------//

let z1 = 'hello world';
console.log(z1);

let z2 = 'lorem ipsum';
console.log(z2);

let z3 = 'javascript is cool';
console.log(z3);

//-----------------------2-------------------------//

console.log(z1.toUpperCase());
console.log(z2.toUpperCase());
console.log(z3.toUpperCase());
//----------------------3------------------------//

let a1 = 'HELLO WORLD'
console.log(a1.toLowerCase());

let a2 = 'LOREM IPSUM'
console.log(a2.toLowerCase());

let a3 = 'JAVASCRIPT IS COOL'
console.log(a3.toLowerCase());
//---------------------4-------------------------//

let str1 = ' dirty string   '
console.log('%s -> %s', '"' + str1 + '"', '"' + str1.trim() + '"');

//---------------------5-------------------------//

let str2 = 'Ревуть воли як ясла повні';
console.log(str2);

let split = str2.split(' ');
console.log(split);

// const stringToarray = str => str.split(' ');
// let arr = split[1].split(' ');

//----------------------6--------------------//

let  num1 = [10,8,-7,55,987,-1011,0,1050,0];
console.log(num1);
num1 = num1.map(value => '' + value);
console.log(' ', num1);

// const array1 = [10,8,-7,55,987,-1011,0,1050,0];
// const map1 = array1.map((x) => x * 2);
// console.log(map1);

//--------------------7------------------------//
let nums = [11,21,3];
console.log(nums);

nums = nums.toSorted(function(a, b) {
    return a - b;

});


 nums = nums.toSorted(function(a, b)  {
    return b - a;
 })

console.log(nums);
console.log(nums);

// function shuffle(array) {
//     array.sort(() => Math.random() - 0.5);
// }
//
// let arr = [11, 21, 3];
// shuffle(arr);
// alert(arr);
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

//-------------------------8-------------------------//

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration)

console.log(coursesAndDurationArray);

const coursesGreaterThenFive = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(coursesGreaterThenFive);

//----------------------9-----------------------//

const suits = ['spade', 'diamond', 'heart', 'club'];
const values = ['6', '7', '8', '9', '10', 'jack','queen', 'king','ace'];

const cards = [];
for (const suit of suits) {
    for (const  value of values) {
        const card = {cardSuit: suit, value: value};
        if (suit === 'heart' || suit === 'diamond') {
            card.color = 'red';
        }else {
            card.color = 'black';
        }
        cards.push(card);
    }
}

console.log(cards);

const reduce = cards.reduce ((accum, card) => {
    switch (card.cardSuit) {
        case 'spade':
            accum.spades.push(card);
            break;
        case 'diamond':
            accum.diamonds.push(card);
            break;
        case 'heart':
            accum.hearts.push(card);
            break;
        case 'club':
            accum.clubs.push(card);
            break;

    }
    return accum;
},{
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
});
console.log(reduce);


//--------------------------------------------//


const calculator = (a, b) => a + b;
console.log(calculator(10, 20));

//----------------------------------------//
// let user:{} =
// this - oggetto/persona con cui lavoro...
let asd = {
    name: 'John',
    greeting1: function (msg) {
        console.log('Hello1', msg, this.name);

    },
    greeting2: function (msg) {
        console.log('Hello2', msg, this.name);

    },
    greeting3: (msg) => {
        console.log('Hello3', msg, asd.name);
        // !!! this - non funziona - chiama oggetto globale, windows//
    }
}
asd.greeting1('you')
asd.greeting2('me')
asd.greeting3('us')

//----------------------------------------//
function* cardHolder() {
    let cards = [
        {value: 6, suite: 'diamond'},
        {value: 7, suite: 'spade'},
        {value: 8, suite: 'diamond'},
        {value: 9, suite: 'spade'},
    ]
    for (const card of cards) {
        yield card;
    }
}
let holder = cardHolder();
console.log(holder.next());
console.log(holder.next());
console.log(holder.next());
console.log(holder.next());
console.log(holder.next());
//----------------------------------------//

// let arr = [
//     11, 22, 33, [44, 55], [66, 77, [111,[112,123,]]]
//
// ]
//  let innerArray = [];
//
//  function flatter(array) {
//      for (const item of array) {
//         if (Array.isArray(item)) {
//             flatter(item);
//         }
//          else {
//             innerArray.push(item);
//          }
//      }
//
//  }
//  flatter(arr);
//  console.log(innerArray);


// function iterator(arr, i) {
//     console.log(arr[i]);
//     i++;
//     if (i < arr.length) {
//         iterator(arr, i);
//     }
// }
// iterator(innerArray, 0);

//-------------------------//

//  let arr = [];
//  console.log(Array.isArray(arr));
//  arr[arr.length] = 100;
//  console.log(arr.push('new element1'));
//  console.log(arr.push('new element2'));
//  console.log(arr.push('new element3'));
//  console.log(arr.push('new element4'));
//  console.log(arr.push('new element5'));
//  console.log(arr);
//
// console.log(arr.pop());
// console.log(arr);
//
// console.log(arr.unshift('!!!'));
// console.log(arr);
//
// console.log(arr.shift());
// console.log(arr);
//
// let join = arr.join(';');
// console.log(join);
// let nums = [11, 22, 33];
//
// let concat = arr.concat(nums);
// console.log(concat);
// console.log(arr);
// console.log(nums.reverse());
//
// console.log(concat);
// let slice = concat.slice(0, 4);
// console.log(slice);
// console.log(concat);
//
// // let splice = concat.splice(0, 2, '!!!', '#$%^', '*&&^%$65');
// // console.log(splice);
// // console.log(concat);
// // concat.splice(concat.indexOf(11), 1);
//
// console.log(concat.includes(11));
// console.log('hello okten'.includes('ok'));