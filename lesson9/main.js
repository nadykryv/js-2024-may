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



