let pessoa = {
    nome: "André",
    idade: 26,
    // metodo:
    dizerOla() {
        console.log("Olá, mundo! Meu nome é " + this.nome)
    }
}

console.log(pessoa)

pessoa.dizerOla()