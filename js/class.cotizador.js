// COTIZADOR

class Cotizador {
    constructor(m2, factorPropiedad, factorUbicacion, costoM2){
    this.m2 = parseInt(m2)
    this.factorPr = parseFloat(factorPropiedad)
    this.factorUbi = parseFloat(factorUbicacion)
    this.costoM2 = parseFloat(costoM2)
}
    cotizar(){
        let resultado = (this.m2 * this.factorPr * this.factorUbi * this.costoM2 )
        return resultado.toFixed(2) 
    }
}
