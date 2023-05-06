const entrada1 = prompt("informe o primeiro número:")
const entrada2 = prompt("informe o segundo número:")

const x = parseFloat(entrada1)
const y = parseFloat(entrada2)

const soma = x + y
const sub = x - y 
const multi = x * y
const divi = x / y

alert(
    "resultados:\n" +
    "\nSoma: " + soma +
    "\nSubtração: " + sub +
    "\nMultiplicação: " + multi +
    "\ndivisão: " + divi
)
