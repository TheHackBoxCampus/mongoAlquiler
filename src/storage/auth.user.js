class user {
    constructor(name, password, email) {
        this.name = name;
        this.password = password,
        this.email = email
    }

    validateData() {
        const schema = {
            name: this.name,
            password: this.password,
            email: this.email
        }

        for (let [key, value] in schema) {
            let count = 0;
            
            if (count > 3 || count < 3) return "Cantidad de registros incorrecto!!"

            if (typeof value != "string") return "Contenido de los registros incorrecto!!"
     
            count++; 
        }
    }
}