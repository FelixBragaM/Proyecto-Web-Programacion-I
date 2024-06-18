let queryString = location.search;
let queryStringObject = new URLSearchParams(queryString);
let id = queryStringObject.get("id");

let url = `https://fakestoreapi.com/products/${id}`;
fetch(url)
.then(function(response){
    console.log(response);
    return response.json();
 })
 .then(function(data){
     console.log(data.category );
        let section = document.querySelector(".product")
         section.innerHTML += `<article class="info">
         <h3 class= "tituloProd">${data.title}</h3>  
         <img class="foto" src="${data.image}" alt="">
         <p class= "description">${data.description}</p>
         <p class="precioProd">USD ${data.price}</p>
         <a href="./category.html?categoria=${data.category}">Categoria: ${data.category}</a>   
         <a href="./carrito.html" class="agregar"><Button>Agregar al carrito</Button></a>
     </article>`;
     
     let product = document.querySelector(".agregar");
     
     product.addEventListener("click",function (e){
        e.preventDefault(); 
        function agregarCarrito(id){
            if(localStorage.getItem("product") == null){   
                let agregados = [];   
                agregados.push(id);
                let prodEnCarrito = JSON.stringify(agregados);
                localStorage.setItem("product", prodEnCarrito);
            } else {
                let productosSeleccionados = localStorage.getItem("product");
                let agregados = JSON.parse(productosSeleccionados);
                agregados.push(id);
                let prodEnCarrito = JSON.stringify(agregados);
                localStorage.setItem("product", prodEnCarrito);
            }
        }

        agregarCarrito(id);
})
 })
 .catch(function(error){
     console.log("Error" + error);
 });



