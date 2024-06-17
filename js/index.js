let jewelery = document.querySelector("#jewerly");
fetch('https://fakestoreapi.com/products/category/jewelery')
.then(function(response){
   console.log(response);
   return response.json();
})
.then(function(data){
    console.log(data);
    for (let i = 0; i < 4; i++) {
        jewelery.innerHTML += `<article class="info">
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









let womensClothing = document.querySelector("#womensClothing");
fetch("https://fakestoreapi.com/products/category/women's clothing")
.then(function(response){
    console.log(response);
    return response.json();
})
.then(function(data){ 
    console.log(data);
    for (let i = 0; i < 6; i++) {          
        womensClothing.innerHTML += `<article class="info">
        <h3>${data[i].title}</h3>
        <img class="foto" src="${data[i].image}" alt="">
        <p>${data[i].description}</p>                      
        <p>USD ${data[i].price}</p>  
        <a href="./producto.html?id=${data[i].id}"><button>Ver Mas</button></a>
    </article>`
        
    }
})

.catch(function(error){
    console.log("Error" + error);
})