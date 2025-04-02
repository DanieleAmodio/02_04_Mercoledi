let tentativo = 0
let passKey = "segreto"
let div = document.createElement("div")
let div1 = document.createElement("div1")
let div3 = document.createElement("div3")
let pass
function valore(pass) {
    do  { let indovina = pass


        if (indovina === passKey) {
            div.innerHTML=("Puoi entrare!")
            document.body.appendChild(div)
            break
        
        } else if (div1){
            div1.innerHTML=("Sbagliato")
            document.body.appendChild(div1)
        }  else 
            div1.innerHTML +=("Sbagliato")
            document.body.appendChild(div1)
        
         tentativo++
        
        
        } while (tentativo <3)
        
        if (tentativo === 3 )
        div3.innerHTML=(`La pass era ${passKey}, hai finito i tentativi `)
        document.body.appendChild(div3)
}
