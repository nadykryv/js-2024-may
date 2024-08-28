let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

coursesAndDurationArray.forEach(value => {
    const div = document.createElement('div');
    let text = ''
    for (const key in value) {
        text += `---- ${key}: ${value[key]}`;
    }
    div.innerText = text.slice(2);
    document.body.appendChild(div);
})

console.log(coursesAndDurationArray);

//-------------------------------------------//

let coursesAndDurationArray1 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
coursesAndDurationArray1.forEach(value => {
    const div = document.createElement('div');
    div.classList.add('item')
    const h1 = document.createElement('h1');
    h1.classList.add('heading')
    const p = document.createElement('p');
    p.classList.add('description')
    p.style.fontSize = '32px'
    h1.innerText = value.title
    p.innerText = value.monthDuration
    div.append(h1, p)
    document.body.appendChild(div)
})
console.log(coursesAndDurationArray1);
//----------------------------------------------//



