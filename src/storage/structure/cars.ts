import { Expose, Transform } from "class-transformer";

class Cars {
    @Expose({name: "marca"})
    mr: string

    @Expose({name: "modelo"})
    mdl: string

    @Expose({name: "anio"})
    an: string

    @Expose({name: "tipo"})
    tp: string

    @Expose({name: "capacidad"})
    cp: number

    constructor(data:Partial<Cars>) {
        Object.assign(this, data)
        this.mr = "car1";
        this.mdl = "0";
        this.an = "0",
        this.tp = "0";
        this.cp = 0;
    }
}

export default Cars; 