import { Expose } from "class-transformer";

class Booking {
    @Expose({name: "ID_cliente"})
    idc: number

    @Expose({name: "ID_automovil"})
    ida: number

    @Expose({name: "fecha_Reserva"})
    fr: Date

    @Expose({name: "fecha_inicio"})
    fi: Date

    @Expose({name: "fecha_fin"})
    fl: Date
    
    @Expose({name: "Estado"})
    e: string
    

    constructor(data:Partial<Booking>) {
        Object.assign(this, data)
        this.idc = 0;
        this.ida = 0;
        this.fr = new Date(2023, 8, 6); 
        this.fi = new Date(2023, 8, 6); 
        this.fl = new Date(2023, 8, 6); 
        this.e = "disponible"
    }
}

export default Booking; 