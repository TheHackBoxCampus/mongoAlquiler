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
    
    validateContentData([obj] = null) {
        let arrx = [/^[a-z A-Z 0-9]*$/, /\S+@(\S+\.\S+)/]
        let obje = {name: "jorge5", email: "kalednarinogmail.com"}
        let result = ""

        for(let i = 0; i < arrx.length; i++) {
            for (let prop in obje) {
                result += arrx[i].test(obje[prop])
                i += 1
            }
        }
        return result ;
    }
}


let inst = new user("miller", "false", "kalednarino@gmail.com"); 
let filter1 = inst.scapeData(); 
let filter2 = inst.validateContentData(filter1); 
console.log(filter2)