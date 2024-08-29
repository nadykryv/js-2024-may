

let form1 = document.forms.form1;

form1.addEventListener('submit', function (eventObject) {
    eventObject.preventDefault();
    console.log('submit');
    console.log(eventObject);
    let name = this.name.value;
    let surname = this.surname.value;
    let age = this.age.value;
    console.log({ name, surname, age });

});
let button = form1 [3];
console.log(button);

button.onclick = function () {
    document.getElementsByClassName('popup')[0].style.display = 'block';

};

//------------------------------------------//

console.log(localStorage);

