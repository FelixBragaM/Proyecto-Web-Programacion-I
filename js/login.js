let form = document.querySelector("form");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let user = "";

form.addEventListener("submit", function(e){
    e.preventDefault();
    if(email.value == ""){
        alert("Por favor complete el campo email");
    }else if(password.value == ""){
        alert("Por favor complete el campo contraseña");
    }else if(password.value.length < 6){
        alert("La contraseña debe tener al menos 6 caracteres");
    }else{
        user = email.value   
        localStorage.setItem("username", user) 
        this.submit();
    }
})