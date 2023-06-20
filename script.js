// function sumar() {
//     console.log(1+2)
// }
// sumar()

// function sumar2(a,b){
//     console.log(a+b)
// }
// sumar2(1+2)

// function saludar(nombre){
//     return("Hola"+nombre)
// }

// saludar("santiago")

// function consologear(resultado){
//     console.log(resultado)
// }

// consologear(saludar("santiago"))

// let restar = function(a,b){    //tengo que declararla antes de llamarla en esta manera
//     return(a-b)
// }
// consologear(restar(3,2))    

//prompt //-->input box para el usuario
//alert //-->alerta, muestra al usuario, da respuesta
//parseInt //-->pasa a int

// let edad =""
// edad = document.getelemetnbyid("...").value--> si la quiero almacenar-->
//localstorage.setitem("edad_usuario", edad) (se guarda la edad en edad_usuario)
//localstorage.getitem("edad_usuario")-->me lo trae
//localstorage.clear()-->borra los datos
//localstorage.removeitem("edad_usuario")-->borra un solo dato
//function guardar(){}
//function cargardatos(){}

let nombre_usuario = ""
nombre_usuario = document.getElementsByClassName("texto")
localStorage.setItem("nombreusuario",nombre_usuario)
localStorage.getItem("nombreusuario")

JSON.parse(nombre_usuario)

let menuboton1 = document.getElementById("boton-menu1");
let menuboton2 = document.getElementById("menu-celu")

menuboton1.addEventListener("click", toggleText);

function toggleText(){
    menuboton2.classList.toggle("show")
}

