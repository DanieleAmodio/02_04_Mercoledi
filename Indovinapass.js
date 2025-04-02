let tentativo = 0
let passKey = "segreto"

do  { let indovina = prompt (" Inserisci la pass segreta")


if (indovina === passKey) {
console.log("Puoi entrare!")
break

} else{
console.log( "Sbagliato")

}
tentativo++


} while (tentativo <3)

if (tentativo === 3 )
console.log(`La pass era ${passKey}, hai finito i tentativi `)