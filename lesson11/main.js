//-----------------------1-------------------//

const cartsDiv = document.getElementById('carts');
fetch('https://dummyjson.com/carts')
    .then(value => value.json())
    .then(cartsObject => {
        const {carts} = cartsObject;
        console.log(carts);

        for (const cart of carts) {
            const div = document.createElement('div');
            div.classList.add('cartDiv');
            div.innerText =`
                "total": ${cart.total},
               "discountedTotal": ${cart.discountedTotal},
               "userId": ${cart.userId},
               "totalProducts": ${cart.totalProducts},
               "totalQuantity": ${cart.totalQuantity},
                `;


            cartsDiv.appendChild(div);



        }



    });

//-----------------------2--------------------------//


const url = new URL('https://dummyjson.com/recipes');
url.searchParams.set('limit', '50');

const target = document.getElementsByClassName('target')[0];
fetch(url)
    .then(value => value.json())
    .then(recipesObject => {
        const {recipes} = recipesObject;
        for (const recipe of recipes) {
            console.log(recipe);

            const recipeDiv = document.createElement('div');
            for (const recipeKey in recipe) {
                if (Array.isArray(recipe[recipeKey])) {
                    const arrayAndTitleDiv = document.createElement('div');
                    const h3 = document.createElement('div');
                    h3.innerText = `${recipeKey}:`;
                    const ol = document.createElement('ol');
                    const array = recipe[recipeKey];
                    for (const item of array) {
                        const li = document.createElement('li');
                        li.innerText = item;
                        ol.appendChild(li);
                    }
                    arrayAndTitleDiv.append(h3, ol);
                    recipeDiv.appendChild(arrayAndTitleDiv);
                } else {
                    if (recipeKey !== 'image') {
                const keyDiv = document.createElement('div');
                keyDiv.innerText = `${recipeKey} : ${recipe[recipeKey]}`
                recipeDiv.appendChild(keyDiv);
                    }
                }

            }

            const img= document.createElement('img');
            img.src = recipe.image;
            recipeDiv.appendChild(img);


            target.appendChild(recipeDiv);
        }


    });

