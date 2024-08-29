 document.body.style.backgroundColor = prompt('background color?', 'silver');

//---------------------------------------//
const div = document.createElement('div');

div.classList.add('wrap', 'collapse', 'alpha', 'beta');

div.classList.add('wrap');
div.classList.add('collapse');
div.classList.add('alpha');
div.classList.add('beta');

div.style.backgroundColor = 'violet'
div.style.color = 'blue'
div.style.fontSize = '18px'
div.innerText = 'Hello, World!';

document.body.appendChild(div);

const div2 = div.cloneNode(true);
document.body.appendChild(div2);

document.body.appendChild(div.cloneNode(true));

//------------------------------------//
 // Non e giusto secondo variante !!!!!

const divBlock = document.createElement('div');
['wrap', 'collapse', 'alpha', 'beta'].forEach(val => divBlock.classList.add(val));
divBlock.innerHTML = `
<ul>
    <li>lorem </li>
    <li>lorem</li>
    <li>lorem</li>
    <li>lorem</li>
    <li>lorem</li>
    <li>lorem</li>
</ul>
`
document.body.appendChild(divBlock);
document.body.appendChild(divBlock.cloneNode(true));
console.log(divBlock);
//------------------------------------//

const arr = ['Main','Products','About us','Contacts'];
const menuDiv = document.getElementsByClassName('menu')[0];
for (const item of arr) {
    const li = document.createElement('li');
    li.innerText = item
    menuDiv.appendChild(li);
}
console.log();

//--------------------------------------//

