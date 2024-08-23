//-----------------1---------------------//
function Client (id, name, surname , email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

let clients = [

    new Client (1, 'john', 'Smith' , 'j.smith@gmail.com', '+393172345076', [{title: 'tv', price: 34678}, {title: 'phone', price:  21678}, {title: 'robot', price:  42789}]),
    new Client (2, 'Tony', 'allan', 'a.tony@gmail.com', '+390338889065', [{title: 'tv', price: 34678}, {title: 'phone', price: 21678}]),
    new Client (3, 'Aster', 'Dorian', 'dor.astra@gmail.com', '+396691623119', [{title: 'phone', price: 21678}, {title: 'robot', price: 42789}]),
    new Client (4, 'Jack', 'Solaro', 'j.solar@gmail.com', '+393179999226', [{title: 'phone', price: 21678}, {title: 'robot', price: 42789}]),
    new Client (5, 'Lory', 'Wendy', 'w.loren@gmail.com', '+393456083253', [{title: 'tv', price: 34678}, {title: 'robot', price: 42789}]),
    new Client (6, 'Sten', 'Sarah', 's.sten@gmail.com', '+390055326789', [{title: 'tv', price: 34678}, {title: 'phone', price: 21678}, {title: 'robot', price: 42789}]),
    new Client (7, 'Lina', 'Rossi', 'lina.ros@gmail.com', '+393195223456', [{title: 'tv', price: 34678},  {title: 'robot', price: 42789}]),
    new Client (8, 'Eva', 'Korry', 'eva.kor@gmail.com','+393903455677', [{title: 'tv', price: 34678}, {title: 'phone', price: 21678}, {title: 'robot', price: 42789}]),
    new Client (9, 'Stella', 'Adora', 'a.stels@gmail.com', '+393903935605', [{title: 'tv', price: 34678}, {title: 'phone', price: 21678}, {title: 'robot', price: 42789}]),
    new Client (10, 'Erik', 'list', 'e.list@gmail.com', '+393903407933', [{title: 'tv', price: 34678}, {title: 'phone', price: 21678}]),

];

const sort = clients.sort((a, b) => a.order.length - b.order.length);
console.log(sort);

//----------------------------2-----------------------------//

function Car(model, producer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    this.increaseMaxSpeed = function (newSpeed) {
        if (newSpeed > 0) {
            this.maxSpeed = this.maxSpeed + newSpeed;
        }
    };
    this.changeYear = function (newYear) {
        if (newYear > 1815) this.year = newYear;
    };
    this.addDriver = function (driverObject) {
        if (driverObject) this.driver = driverObject
    };

}
const car = new Car('asd', 'qwe', 1234, 122, 4);
console.log(car);

car.drive();
car.info();
car.increaseMaxSpeed(100);
car.changeYear(2000);
car.addDriver({});
console.log(car);

//------------------------------------//

function Person (name, age, shoeSize) {
    this.name = name;
    this.age = age;
    this.shoeSize = shoeSize;
}
















