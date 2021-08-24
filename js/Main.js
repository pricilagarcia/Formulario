var nombre = document.querySelector("#inputNombre1").value;
var nombre2 = document.querySelector("#inputNombre2").value;
var apellidos = document.querySelector("#inputApellidos").value;
var correo = document.querySelector("#inputCorreo").value;

function verificacionContrasenna(elEvento){
    elEvento.preventDefault();


var contrasenna = document.querySelector("#inputContrasenna").value;
var confirmarContrasenna = document.querySelector("#inputConfirmarContrasenna").value;
var veri = document.querySelector("#veri");
var veri2 = document.querySelector("#veri2");

    if(contrasenna ==  confirmarContrasenna){
        veri2.innerHTML = "Contraseña Correcta";

    }else{
        veri.innerHTML = "Contraseña Incorrecta";
    }
  
}

var boton = document.querySelector("#botonFormulario");
boton.addEventListener("submit", verificacionContrasenna);
