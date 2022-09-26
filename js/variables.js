// BASE DE DATOS FICTISIA

const datosPropiedad = [{tipo: "Casa", factor: "1.5"},
                        {tipo: "Departamento", factor: "1.3"},
                        {tipo: "P.H", factor: "1.2"},]
                        


const datosUbicacion = [{tipo: "CABA", factor: "1.5"},
                        {tipo: "Berazategui", factor: "1.2"},
                        {tipo: "Quilmes", factor: "1.3"},]

const costoM2 = 25     


// CONEXION CON EL HTML

const propiedad = document.querySelector("#propiedad")
const ubicacion = document.querySelector("#ubicacion")
const metros2 = document.querySelector("#metros2")
const btnCotizar = document.querySelector("#btnCotizar")
const importe = document.querySelector("span")
const btnEnviar = document.querySelector("span.guardar")
