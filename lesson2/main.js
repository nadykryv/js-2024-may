
//--------1-------//

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array [0]);
console.log(array [1]);
console.log(array [2]);
console.log(array [3]);
console.log(array [4]);
console.log(array [5]);
console.log(array [6]);
console.log(array [7]);
console.log(array [8]);
console.log(array [9]);

//-------2----------//

let book1 ={
    title : "One, no one and a hundred thousand",
    pageCount : 256,
    genre: 'novel'
}
console.log(book1 );

let book2 ={
    title : "The Betrothed",
    pageCount : 743,
    genre: 'historical novel'
}
console.log(book2 );

let book3 ={
    title : "French kiss",
    pageCount : 480,
    genre: 'Masters of Action-Packed Novel, thriller'
}
console.log(book3 );

//--------3-----------//

let book4 ={
    title : "One, no one and a hundred thousand",
    pageCount : 256,
    genre: 'novel',
    authors: [
        {name : 'Luigi Pirandello', age: '1926'}
    ]
}
console.log(book4 );

let book5 ={
    title : "The Betrothed",
    pageCount : 743,
    genre: 'historical novel',
    authors: [
        {name : 'Alessandro Manzoni', age: '1840'}
    ]
}
console.log(book5 );

let book6 ={
    title : "French kiss",
    pageCount : 480,
    genre: 'Masters of Action-Packed Novel, thriller',
    authors: [
        {name : 'Eric Van Lastbeider', age: '1989'}
    ]
}
console.log(book6 );

//---------4------------//

let users = [
    {name : "John", username : "Johnson", password: "1hd9033gg",},
    {name : "Tony", username : "Ant", password: "v89fdc6",},
    {name : "Katy", username : "Kat", password: "Fh11vgn32",},
    {name : "Mayk", username : "Myu", password: "10p76ue6",},
    {name : "Eva", username : "Apple", password: "12hs99mGj",},
    {name : "Dorothy", username : "Dora", password: "K771xf56",},
    {name : "Samuel", username : "Sam", password: "kso345Ol",},
    {name : "Juliana", username : "July", password: "lsi34996",},
    {name : "Aster", username : "Stella", password: "Ghj6793hg",},
    {name : "Margherita", username : "Megan", password: "Hdu753b7",},
]

console.log(users [0].password );
console.log(users [1].password );
console.log(users [2].password );
console.log(users [3].password );
console.log(users [4].password );
console.log(users [5].password );
console.log(users [6].password );
console.log(users [7].password );
console.log(users [8].password );
console.log(users [9].password );

// А почему просто не использовать: console.log(users); ? так сразу выводит в консоль все данные и всего одна строка))))


//-------------5------------//

let x = 7;
if (x) {
    console.log(true);
} else {
    console.log();
}

//-----------6-----------//


//-----------7----------//

m = prompt('(0-59)')
let time = +m;
let quarter;
if (time < 0 || time > 59) {
    quarter = 0;
} else if(time < 15) { // 0-14
    quarter = 1;
} else if(time < 30) { // 15-29
    quarter = 2;
} else if(time < 45) { // 30-44
    quarter = 3;
} else { // 45-59
    quarter = 4;
}
console.log(quarter);

 //------------8--------------//

day = + prompt('(1-7)' ) || 1;
console.log(day);
switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
       console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('');
}
if(day) {
    console.log('');
} else {
    console.log('');
}

//------------9-------------//

let num1= +prompt;
console.log( typeof +num1);

let num2 = +prompt;
console.log(typeof +num2);

if ( num1 !== num1){
    console.log(num1 !== num1)

} else if (num2 !== num2){
    console.log(num2 !== num2)

} else {
    res = (num1 > num2) ? num1 : num2;
    console.log(res);
}

//-----------10------------//
let a = 1; // Prova con 1, 0, -3

if (a !== 0) {
    console.log('true');
} else {
    console.log('False');
}
//--------//
x = 0;
x = x || 1;
console.log(x);

x = false;
x = x || true;
console.log(x);
x = '';
x = x || 'default';
console.log(x);

//-----------11-----------//

let coursesAndDurationArray =[
    {title : "JavaScript Complex", mountDuration: 5},
    {title : "Java Complex", mountDuration: 6},
    {title : "Python Complex", mountDuration: 6},
    {title : "QA Complex", mountDuration: 4},
    {title : "FullStack", mountDuration: 7},
    {title : "Frontend", mountDuration: 4},
];


if (coursesAndDurationArray[0].mountDuration > 5 ){
    console.log('super');
}
if (coursesAndDurationArray[1].mountDuration > 5 ){
    console.log('super');
}
if (coursesAndDurationArray[2].mountDuration > 5 ){
    console.log('super');
}
if (coursesAndDurationArray[3].mountDuration > 5 ){
    console.log('super');
}
if (coursesAndDurationArray[4].mountDuration > 5 ){
    console.log('super');
}
if (coursesAndDurationArray[5].mountDuration > 5 ){
    console.log('super');
}















