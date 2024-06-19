let mensajeSaludo = document.querySelector(".texto");
let link = document.querySelector(".out");
let loginSaludo = document.querySelector(".in");
let registroSaludo = document.querySelector(".regi");
let emailUsuario = localStorage.getItem("username");

mensajeSaludo.innerText = "Bienvenido: " + "" + emailUsuario;
mensajeSaludo.style.display = "block";
loginSaludo.style.display = "none";

link.innerText = "Logout";
link.style.display = "block";
registroSaludo.style.display = "none";