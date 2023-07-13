alert("Bienvenido a JK Polietileno")

alert("Ingrese la opcion del producto que desea llevar, para salir ingrese 0")
let seleccionarProductos = parseInt(prompt( "\n 1-Bolsa camiseta negra \n 2-Bolsa camiseta personalizada \n 3-Bolsa riñon personalizada \n 4-Film negro"))
let seleccionarCantidad;
let total = 0;


const cantidad = (cant, precio) => {
  return cant * precio
}


while (seleccionarProductos != 0) {
    switch (seleccionarProductos) {
    case 1:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Bolsa camiseta negra, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 1000)
        break;
    case 2:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Bolsa camiseta personalizada, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 1500)
        break;
    case 3:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Bolsa riñon personalizada, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 2000)
        break;
    case 4:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Film negro, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 5000)
        break;

    default:
        break;
    }
    seleccionarProductos = parseInt(prompt( "\n 1-Bolsa camiseta negra \n 2-Bolsa camiseta personalizada \n 3-Bolsa riñon personalizada \n 4-Film negro"))
}

alert("el total de la compra es de: " + total)


const envio = () => {
    if (total >= 20000) {
        alert("El envio es gratuito")
    } else{ 
        (total += 1000)
        alert("el costo de envio es de 1000, el total es: " + total)
    }
}

// envio()

const metodoDePago = () => {
    let metodo = prompt("ingrese el metodo de pago, tarjeta o efectivo" )
    if (metodo == "tarjeta") {
    total = total
    }else if ( metodo == "efectivo") {
    total -= 2000
    alert("tenes un descuento de 1000, el total es: " + total)
    }
}

alert("Gracias por su compra.")
metodoDePago()


