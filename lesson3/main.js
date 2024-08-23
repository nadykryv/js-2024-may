
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
 let arrTrue = [];
 let arrFalse = [];

 let i = 0;
 while(i < users.length){
     let user = users[i];
     if (user.status) {
         arrTrue.push(user);
     }else {
         arrFalse.push(user);
     }
     i++
 }
 console.log(arrTrue);
 console.log(arrFalse);


  //-------------------------//


function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return confirm('Do you have permission from your parents?');
    }
}
console.log(checkAge(20));


let age = prompt('How old are you?', 18);

if ( checkAge(age) ) {
    alert( 'Access granted' );
} else {
    alert( 'Access denied' );
}
console.log(age);

// showMessage(..)     // mostra un messaggio
// getAge(..)          // ritorna l'età (prendendola da qualche parte)
// calcSum(..)         // calcola la somma e ritorna il risultato
// createForm(..)      // crea un form (e solitamente lo ritorna)
// checkPermission(..) // controlla i permessi, ritorna true/false

