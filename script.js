function sumar() {
    console.log(1+2)
}
sumar()

function sumar2(a,b){
    console.log(a+b)
}
sumar2(1+2)

function saludar(nombre){
    return("Hola"+nombre)
}

saludar("santiago")

function consologear(resultado){
    console.log(resultado)
}

consologear(saludar("santiago"))

let restar = function(a,b){    //tengo que declararla antes de llamarla en esta manera
    return(a-b)
}
consologear(restar(3,2))

prompt //-->input box para el usuario
alert //-->alerta, muestra al usuario, da respuesta

parseInt //-->pasa a int