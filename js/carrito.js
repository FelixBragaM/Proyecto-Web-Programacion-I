let section = document.querySelector(".s");
let finalizar = document.querySelector("#finalizar");

finalizar.style.display = "inline-block";
finalizar.style.margin = "10px";
finalizar.style.padding = "15px";
finalizar.style.border = "3px solid black";
finalizar.style.backgroundColor = "aqua";
finalizar.style.color = "black";
finalizar.style.textDecoration = "none";

finalizar.addEventListener("click", function (e) {
    e.preventDefault();
    localStorage.clear();
    alert("¡Gracias por su compra!");
    window.location = "index.html";
   
})

let recuperoStorage = localStorage.getItem("product");
let idParseado = JSON.parse(recuperoStorage);

if (recuperoStorage == null) {
    let mensaje = "Su carrito esta vacio";
    section.innerText = mensaje;
} else {

    for (let i = 0; i < idParseado.length; i++) {
        fetch(`https://fakestoreapi.com/products/${idParseado[i]}`)
            .then(function (response) {
                return response.json();
            })
            .then(function(data){
                section.innerHTML += `<article class="info">
                         <h3 class= "tituloProd">${data.title}</h3>
                        <img class="foto" src="${data.image}" alt="">
                        <p class= "description">${data.description}</p>
                        <p class="precioProd">USD ${data.price}</p>
                        </article>`

            })
            .catch (function(e) {
                console.log("Error" + error);

        })
    }
    
}














