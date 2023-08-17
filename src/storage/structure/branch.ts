import { Expose, Transform } from "class-transformer";

class Branch {
    @Expose({name: "nombre"})
    nm: string

    @Expose({name: "direccion"})
    dr: string

    @Expose({name: "telefono"})
    tp: string

    constructor(data:Partial<Branch>) {
        Object.assign(this, data)
        this.nm = "sucursal";
        this.dr = "0";
        this.tp = "0"; 
    }
}

export default Branch; 