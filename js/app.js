// FUNCION CARGA DE DATOS

/*const cargarDatos = (select, array) =>{
    if(array.length > 0){
        array.forEach(element => {
            select.innerHTML += `<option value="${element.factor}">${element.tipo}</option>`
        });
    } else {
        console.error("No existen elementos en el array.")
    }
}

cargarDatos (propiedad, datosPropiedad)
cargarDatos (ubicacion, datosUbicacion)*/

function cargarDatos(select){
    fetch("js/basepr.json")
    .then(respuesta => respuesta.json())
    .then(array => 
        array.forEach(element => {
            select.innerHTML += `<option value="${element.factor}">${element.tipo}</option>`
        }))
    }
    cargarDatos (propiedad)

    function cargarDatosB(select){
        fetch("js/baseub.json")
        .then(respuesta => respuesta.json())
        .then(array => 
            array.forEach(element => {
                select.innerHTML += `<option value="${element.factor}">${element.tipo}</option>`
            }))
        }

cargarDatosB (ubicacion)





const datosCompletos = ()=> {
    if (propiedad.value !== "..." && ubicacion.value !== "..." && parseInt(metros2.value) && metros2.value  >= 10 && metros2.value <= 600 ){
    return true
    } else {
        return false
} 
}


const cotizador = ()=> {
    const seguro = new Cotizador(metros2.value, propiedad.value, ubicacion.value, costoM2)
        importe.innerText = seguro.cotizar()
        
}

const realizarCotizacion = () => {
     datosCompletos () ? cotizador() : alert("Completa los datos solicitados")
}   


const enviarMail = () => {
    const cotizacion = {
        fechaCotizacion : new Date().toLocaleString(),
        propiedad : propiedad[propiedad.selectedIndex].text,
        ubicacion : ubicacion[ubicacion.selectedIndex].text,
        metroscuadrados : metros2.value,
        poliza : importe.innerText
    }

    localStorage.setItem("Ultima cotizacion", JSON.stringify(cotizacion))
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Enviamos su cotizacion por mail, muchas gracias por elegirnos!',
        showConfirmButton: false,
        timer: 3500
      })
    
}


btnCotizar.addEventListener("click", realizarCotizacion)
btnEnviar.addEventListener("click", enviarMail)


