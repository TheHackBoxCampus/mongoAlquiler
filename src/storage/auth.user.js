class user {
    constructor(name, password, email) {
        this.args = arguments 
        this.name = name;
        this.password = password,
        this.email = email
    }

    scapeData() {
        let schema = {
            name: this.name,
            password: this.password,
            email: this.email
        }
        let state = Boolean();  

        let typeData = Object.keys(schema).reduce((at, item) => {
            if(typeof schema[item] != "string") {
                at = Object.entries(schema).length; 
                state = true
            }
            if(this.args.length > Object.entries(schema).length || this.args.length < 3) state = true

            return state ? "parametros incorrectos" : null
        }, 0)
        

         let redirect = [typeData].map(err => err != null ? err : schema );      
         
         return redirect
    }
}


let inst = new user("miller", "false", 1); 
console.log(inst.scapeData()); 