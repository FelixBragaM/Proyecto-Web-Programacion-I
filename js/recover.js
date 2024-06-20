let form = document.querySelector("form");
let email = document.querySelector("#email");
let checkbox = document.querySelector("#text");
let emailWrong = document.querySelector(".emailWrong");
let checkBoxWrong = document.querySelector(".checkboxWrong");
let procesoFinalizado = document.querySelector(".completado");

form.addEventListener("submit", function(e){
    e.preventDefault();
    if(email.value == ""){
        emailWrong.innerHTML = "Por favor escriba su email";
        emailWrong.style.display = "block";  
        emailWrong.style.color = "red";
    }else if(!checkbox.checked){ 
        checkBoxWrong.innerText = "Por favor acepte el campo Quiero recuperar mi contraseña";
        checkBoxWrong.style.display = "block";
        checkBoxWrong.style.color = "red";
    }else{
        procesoFinalizado.innerText = "Recibiras un email con las instrucciones para recuperar tu contraseña";
        procesoFinalizado.style.display = "block";
        procesoFinalizado.style.color = "black";
        procesoFinalizado.innerHTML += `<a href="./login.html" class="final">Ir a login</a>` 
    }
})