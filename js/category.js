let cat = document.querySelector(".ca");
let queryString = location.search;
let queryStringObject = new URLSearchParams(queryString);
let categoria = queryStringObject.get("categoria");
let url = `https://fakestoreapi.com/products/category/${categoria}`;

fetch(url)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    for (let i = 0; i < 4; i++) {
        cat.innerHTML += `<article class="info">
        <h3 class= "tituloProd">${data[i].title}</h3>
        <img class="foto" src="${data[i].image}" alt="">
        <p class= "description">${data[i].description}</p>
        <p class="precioProd">USD ${data[i].price}</p>
        <a href="./producto.html?id=${data[i].id}"><button>Ver Mas</button></a>
    </article>`
        
    }
    
})

.catch(function(error){
    console.log("Error" + error);
})