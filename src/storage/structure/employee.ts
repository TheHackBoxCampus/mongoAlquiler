import { Expose, Transform } from "class-transformer";

class Employee {
    @Expose({name: "nombre"})
    nm: string

    @Expose({name: "apellido"})
    last: string

    @Expose({name: "DNI"})
    uuid: string

    @Expose({name: "direccion"})
    dr: string

    @Expose({name: "telefono"})
    tl: string
   
    @Expose({name: "email"})
    em: string

    constructor(data:Partial<Employee>) {
        Object.assign(this, data)
        this.nm = "temployee";
        this.last = "temployee2";
        this.uuid = "0";
        this.dr = "0";
        this.tl = "0";
        this.em = "example@gmail.com";
    }
}

export default Employee; 