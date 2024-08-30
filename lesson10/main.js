

let form1 = document.forms.form1;

form1.addEventListener('submit', function (eventObject) {
    eventObject.preventDefault();
    console.log('submit');
    console.log(eventObject);
    let name = this.name.value;
    let surname = this.surname.value;
    let age = this.age.value;
    let user = {name, surname, age};
    localStorage.setItem('user', JSON.stringify(user));
    console.log({ name, surname, age });

    let users = JSON.parse(localStorage.getItem('user')) || [];
    users.push(user);
    // let stringify = JSON.stringify(users);
    localStorage.setItem('user', JSON.stringify(users));

});
// let button = form1 [3];
// console.log(button);
//
// button.onclick = function () {
//     document.getElementsByClassName('popup')[0].style.display = 'block';
//
// };
// console.log(localStorage);
// localStorage.setItem('asd', 'que');
// console.log(localStorage.getItem('asd'));

//------------------------------------------//

let currentNumber = +localStorage.getItem('number');
currentNumber += 1;
localStorage.setItem('number', currentNumber);

document.getElementById('target').innerText = currentNumber;

//-----------------------------------------//

let sessionList;
if (localStorage.getItem('sessionList')) {
    sessionList = JSON.parse(localStorage.getItem('sessionList'));
}else {
    sessionList = [];
}
sessionList.push(new Date());
localStorage.setItem('sessionList', JSON.stringify(sessionList));

//------------------------------------------//


























