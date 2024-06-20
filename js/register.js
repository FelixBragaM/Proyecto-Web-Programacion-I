let form = document.querySelector("form");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let rePassword = document.querySelector("#rePassword");
let emailError = document.querySelector(".emailError");
let passwordError = document.querySelector(".passwordError");
let rePasswordError = document.querySelector(".rePasswordError");

form.addEventListener("submit", function(e){
    e.preventDefault();
    if(email.value == ""){
        emailError.innerText = "Por favor complete el campo";
        emailError.style.display = "block";
        emailError.style.color = "red";
    }else if(password.value == ""){
        passwordError.innerText = "Por favor complete el campo";
        passwordError.style.display = "block";
        passwordError.style.color = "red";
    }else if(password.value.length < 6){
        passwordError.innerText = "Debe ingresar al menos 6 caracteres";
        passwordError.style.display = "block";
        passwordError.style.color = "red";
    }else if(rePassword.value != password.value){
        rePasswordError.innerText = "Las contraseñas no coinciden";
        rePasswordError.style.display = "block";
        rePasswordError.style.color = "red";
    }else{
        this.submit();   
    }
})