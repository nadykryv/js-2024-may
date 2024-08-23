//--------------------------//
 function User(id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
 }
 const user = new User (1, 'John', 'Smith', 'j.smith@gmail.com', '+393172345076');
console.log(user);

let users = [
     {id: 2, name: 'Tony', surname: 'allan', email: 'a.tony@gmail.com', phone: '+390338889065'},
    {id: 10, name: 'Erik', surname: 'list', email: 'e.list@gmail.com', phone: '+393903407933'},
     {id: 4, name: 'Jack', surname: 'Solaro', email: 'j.solar@gmail.com', phone: '+393179999226'},
    {id: 8, name: 'Eva', surname: 'Korry', email: 'eva.kor@gmail.com', phone: '+393903455677'},
     {id: 5, name: 'Lory', surname: 'Wendy', email: 'w.loren@gmail.com', phone: '+393456083253'},
    {id: 1, name: 'John', surname: 'Smith', email: 'j.smith@gmail.com', phone: '+393172345076'},
     {id: 7, name: 'Lina', surname: 'Rossi', email: 'lina.ros@gmail.com', phone: '+393195223456'},
    {id: 6, name: 'Sten', surname: 'Sarah', email: 's.sten@gmail.com', phone: '+390055326789'},
    {id: 3, name: 'Aster', surname: 'Dorian', email: 'dor.astra@gmail.com', phone: '+396691623119'},
     {id: 9, name: 'Stella', surname: 'Adora', email: 'a.stels@gmail.com', phone: '+393903935605'},

]
console.log(users);

//---------------------------2---------------------------//

const filterFunction = (user) => user.id % 2 === 0;


const filterUsers = users.filter(filterFunction);
console.log(filterUsers);

//-------------------------3---------------------//

console.log(users.sort((user1,user2) => user2.id - user1.id));

//----------------------4-----------------------//

function Client (id, name, surname , email, phone, ...products) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = products;
}

function Products (title, price) {
    this.title = title;
    this.price = price;

}
const clients = new Client (
    'id',
    'name',
    'surname',
    'email',
    'phone',
    new Products ('tv', 34678),
    new Products ('phone', 21678),
    new Products ('robot', 42789),

);
 let Clients = [
     new Client (1, 'john', 'Smith' , 'j.smith@gmail.com', '+393172345076',['tv',  34678,  'phone',  21678,  'robot',  42789]),
     new Client (2, 'Tony', 'allan', 'a.tony@gmail.com', '+390338889065', ['tv', 34678, 'phone',  21678, 'robot', 42789 ]),
     new Client (3, 'Aster', 'Dorian', 'dor.astra@gmail.com', '+396691623119', ['tv',  34678, 'phone', 21678, 'robot', 42789]),
     new Client (4, 'Jack', 'Solaro', 'j.solar@gmail.com', '+393179999226',  ['tv',  34678, 'phone', 21678, 'robot', 42789]),
     new Client (5, 'Lory', 'Wendy', 'w.loren@gmail.com', '+393456083253', ['tv', 34678, 'phone', 21678, 'robot',  42789]),
     new Client (6, 'Sten', 'Sarah', 's.sten@gmail.com', '+390055326789', ['tv', 34678, 'phone', 21678, 'robot',  42789]),
     new Client (7, 'Lina', 'Rossi', 'lina.ros@gmail.com', '+393195223456', [ 'tv', 34678, 'phone',  21678, 'robot',  42789]),
     new Client (8, 'Eva', 'Korry', 'eva.kor@gmail.com','+393903455677', ['tv', 34678, 'phone', 21678, 'robot', 42789]),
     new Client (9, 'Stella', 'Adora', 'a.stels@gmail.com', '+393903935605', ['tv', 34678,  'phone',  21678, 'robot', 42789]),
     new Client (10, 'Erik', 'list', 'e.list@gmail.com', '+393903407933', [ 'tv',  34678, 'phone', 21678, 'robot', 42789]),

 ];


console.log(clients.order);









