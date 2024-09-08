
// Recupera l'ID dell'utente memorizzato nel localStorage
const selectedUserId = localStorage.getItem('user'); // Assicurati che "user" sia l'ID corretto memorizzato

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        console.log(users);

        // Filtra per trovare l'utente con l'ID corrispondente
        const selectedUser = users.find(user => user.id == selectedUserId);

        if (selectedUser) {
            let div = document.createElement("div");
            div.innerHTML = `<h4> id: ${selectedUser.id}</h4> 
                             <h2> name: ${selectedUser.name}</h2>
                             <h5>Username: ${selectedUser.username}</h5>
                             <p>E-mail: ${selectedUser.email}</p>
                             <p>Address:</p>
                             <p>street: ${selectedUser.address.street}</p>
                             <p>suite: ${selectedUser.address.suite}</p>
                             <p>city: ${selectedUser.address.city}</p>
                             <p>zip code: ${selectedUser.address.zipcode}</p>
                             <h5>GEO:</h5>
                             <p>lat: ${selectedUser.address.geo.lat}</p>
                             <p>lng: ${selectedUser.address.geo.lng}</p>
                             <p>Phone: ${selectedUser.phone}</p>
                             <p>Website: ${selectedUser.website}</p>
                             <h5>COMPANY:</h5>
                             <p>name: ${selectedUser.company.name}</p>
                             <p>catch phrase: ${selectedUser.company.catchPhrase}</p>
                             <p>bs: ${selectedUser.company.bs}</p>`;

            let buttonPost = document.createElement('button');
            buttonPost.innerText = 'post of current user';
            buttonPost.onclick = () => {
                localStorage.setItem('user', JSON.stringify(selectedUser.id));
                window.location.href = 'post-details.html';
            }

            userList.appendChild(div);
            userList.appendChild(buttonPost);
        }
    });
