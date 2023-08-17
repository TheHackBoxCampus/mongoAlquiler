import { Expose, Transform } from "class-transformer";

class Rent {
    @Expose({name: "ID_cliente"})
    idc: string

    @Expose({name: "ID_automovil"})
    ida: string

    @Expose({name: "fecha_inicio"})
    fhi: Date

    @Expose({name: "fecha_fin"})
    fhl: Date

    @Expose({name: "costo_total"})
    ct: number
   
    @Expose({name: "estado"})
    e: string

    constructor(data:Partial<Rent>) {
        Object.assign(this, data)
        this.idc = "tclient";
        this.ida = "client2";
        this.fhi = new Date(2023, 8, 6);
        this.fhl = new Date(2023, 8, 6);
        this.ct = 0;
        this.e = "Estatico";
    }
}

export default Rent; 