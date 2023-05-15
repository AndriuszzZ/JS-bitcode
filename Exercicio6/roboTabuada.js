const numero = prompt(
    "Olá, sou o robô da tabuada!\n" +
    "Informe o número que você deseja calcular a tabuada:"
)
let resultado = ""

for(let fator = 1; fator <= 20; fator++) {
    resultado += " ->" + numero + " * " + fator + " = " + (numero * fator) + "\n"
}

alert("resultado da tabuada: " + numero + ":\n\n" + resultado)