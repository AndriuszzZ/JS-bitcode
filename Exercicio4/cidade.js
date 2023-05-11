const turista = prompt("Qual o seu nome, turista?")
let cidades = ""
let contagem = 0

let continuar = prompt("você visitou alguma cidade? (Sim/Não)")

while (continuar === "Sim") {
    let cidade = prompt("Qual é o nome da cidade visitada?")
    cidades += " - " + cidade + "\n"
    contagem++
    continuar = prompt("Você visitou outra cidade? (Sim/Não)")
}

alert(
    "turista: " + turista +
    "\nQuantidade de cidades visitadas: " + contagem +
    "\nCidades visitadas:\n" + cidades

)