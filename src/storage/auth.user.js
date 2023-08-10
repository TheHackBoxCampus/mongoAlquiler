class user {
    constructor(password, email) {
        this.args = arguments 
        this.password = password,
        this.email = email
    }

    scapeData() {
        let schema = {
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
    
    validateContentData([o] = null) {
        let x = [/^[a-z A-Z 0-9]*$/,  /\S+@(\S+\.\S+)/]
        let s = ""
        let b = false; 

        for(let i = 0; i < x.length; i++) {
            for (let p in o) {
                s += x[i].test(o[p]) + " "; 
                i += 1; 
            }
        }

        let l = s.split(" ")
        let f = l.filter(p => p != ''); 
       
        for(let w = 0; w < f.length; ++w) {
           if(f[w] == 'false') {
              b = !b
              break; 
            }
        }

        return b ? 'Algunos de los parametros no cumplen con los requisitos' : o;  
    }

    validateLengthObject([o]) {
        let lengths = [[8.16], [30]]
        
        for(let x = 0; x < Object.entries(o).length; ++x) {
            console.log(Object.entries(o)[x])
        }
    }
}

let inst = new user("miller", "")

export default user; 