// FUNCION CARGA DE DATOS

const cargarDatos = (select, array) =>{
    if(array.length > 0){
        array.forEach(element => {
            select.innerHTML += `<option value="${element.factor}">${element.tipo}</option>`
        });
    } else {
        console.error("No existen elementos en el array.")
    }
}

cargarDatos (propiedad, datosPropiedad)
cargarDatos (ubicacion, datosUbicacion)

const datosCompletos = ()=> {
    if (propiedad.value !== "..." && ubicacion.value !== "..." && parseInt(metros2.value) && metros2.value  >= 10 && metros2.value <= 600 ){
    return true
    } else {
        return false
} 
}


const realizarCotizacion = () => {
    if (datosCompletos ()){
        const seguro = new Cotizador(metros2.value, propiedad.value, ubicacion.value, costoM2)
        importe.innerText = seguro.cotizar()
        btnEnviar.classList.remove("ocultar")

    } else {
        alert("Completa los datos solicitados")
    }
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
    alert("Cotizacion enviada. Muchas gracias por elegirnos!")
    btnEnviar.classList.add("ocultar")
}


btnCotizar.addEventListener("click", realizarCotizacion)
btnEnviar.addEventListener("click", enviarMail)