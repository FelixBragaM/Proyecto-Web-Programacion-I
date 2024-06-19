let logout = document.querySelector(".out");
let mensaje = document.querySelector(".texto");
let login = document.querySelector(".in");
let registro = document.querySelector(".regi");

logout.addEventListener("click", function(e){
    e.preventDefault();                             

    localStorage.clear();

    mensaje.style.display = "none";
    login.style.display = "block";

    logout.style.display = "none";
    registro.style.display = "block";

})