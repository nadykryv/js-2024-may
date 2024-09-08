
let userList = document.getElementById('userList');
userList.classList.add('userList');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users) =>{
        console.log(users);
        for(const user of users){
            let div= document.createElement("div")
            div.innerHTML = `<h4> id: ${user.id}</h4> 
                             <h2> name: ${user.name}</h2>
                             <h5>Username: ${user.username}</h5>
                             <p>E-mail: ${user.email}</p>
                             <p>Address:</p>
                             <p>street: ${user.address.street}</p>
                             <p>suite: ${user.address.suite}</p>
                             <p>city: ${user.address.city}</p>
                             <p>zip code: ${user.address.zipcode}</p>
                             <h5>GEO:</h5>
                             <p>lat: ${user.address.geo.lat}</p>
                             <p>lng: ${user.address.geo.lng}</p>
                             <p>Phone: ${user.phone}</p>
                             <p>Website: ${user.website}</p>
                             <h5>COMPANY:</h5>
                             <p>name: ${user.company.name}</p>
                             <p>catch phrase: ${user.company.catchPhrase}</p>
                             <p>bs: ${user.company.bs}</p>`;
            let buttonPost = document.createElement('button');
            buttonPost.innerText = 'post of current user';
            buttonPost.onclick = (id) =>{
                fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(response => response.json())
                    .then(posts =>{
                        console.log(posts);
                        localStorage.setItem('user', JSON.stringify(id));
                        window.location.href = 'post-details.html'

                    })

            }

            userList.appendChild(div);
            userList.appendChild(buttonPost);

        }


    });


fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        return response.json();
    })
    .then(users => {
        let target = document.createElement('div');
        target.classList.add('target-details');
        for (const user of users) {
            if (user.id === +localStorage.getItem('click')) {

                let divPrime = document.createElement('div');
                divPrime.classList.add('divPrime');
                divPrime.innerHTML = ` <h3>ID: ${user.id}</h3>
                                       <h4>Name: ${user.name}</h4>`;

                let divMain = document.createElement('div');
                divMain.classList.add('divMain');

                let divFirst = document.createElement('div');
                divFirst.classList.add('divSecond');
                divFirst.innerHTML = `<h5>COMPANY:</h5>
                                      <h5>name: ${user.company.name}</h5>
                                      <h5>catch phrase: ${user.company.catchPhrase}</h5>
                                      <h5>bs: ${user.company.bs}</h5>`;

                let divSecond = document.createElement('div');
                divSecond.classList.add('divSecond');
                divSecond.innerHTML = `<h5>GEO:</h5>
                                       <h5>lat: ${user.address.geo.lat}</h5>
                                       <h5>lng: ${user.address.geo.lng}</h5>
                                       <h5>Phone: ${user.phone}</h5>
                                       <h5>Website: ${user.website}</h5>`;

                let divThird = document.createElement('div');
                divThird.classList.add('divThird');
                divThird.innerHTML = `<h5>Username: ${user.username}</h5>
                                      <h5>E-mail: ${user.email}</h5>
                                      <h5>ADDRESS:</h5>
                                      <h5>street: ${user.address.street}</h5>
                                      <h5>suite: ${user.address.suite}</h5>
                                      <h5>city: ${user.address.city}</h5>
                                      <h5>zip code: ${user.address.zipcode}</h5>`;

                let divLast = document.createElement('div');
                divLast.classList.add('divLast');

                let divLastCard = document.createElement('div');
                divLastCard.classList.add('divLastCard');

                let button = document.createElement('button');
                button.innerText = 'post of current user';
                button.onclick = (id) => {
                    fetch('https://jsonplaceholder.typicode.com/posts')
                        .then(response => response.json())
                        .then(posts => {
                            for (const post of posts) {
                                if (user.id === post.userId) {
                                    let divCard = document.createElement('div');
                                    divCard.classList.add('card');
                                    divCard.innerHTML = `<h3>USER ID: ${post.userId}</h3>
                                                         <h3>ID: ${post.id}</h3>
                                                         <h4>Title: ${post.title}</h4>
                                                         <h5>Body: ${post.body}</h5>`;
                                    let button = document.createElement('button');
                                    button.innerText = 'comments to post';
                                    button.onclick = (id) => {

                                        localStorage.setItem('click', post.id);
                                        window.location.href = 'post-details.html';

                                    };

                                    divCard.appendChild(button)
                                    divLastCard.appendChild(divCard)

                                }
                            }

                        })
                }

                divMain.appendChild(divThird)
                divMain.appendChild(divSecond)
                divMain.appendChild(divFirst)
                divLast.appendChild(button);
                target.appendChild(divPrime);
                target.appendChild(divMain);
                target.appendChild(divLast);
                target.appendChild(divLast);
                document.body.appendChild(target);
            }

        }
    });


