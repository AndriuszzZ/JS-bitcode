const primeiroNome = prompt("informe o primeiro nome do recruta:")
const sobrenome = prompt("Informe o sobrenome do recruta:")
const campoDeEstudo = prompt("Qual é o campo de estudo do recruta?")
const anoNascimento = prompt("Qual é o ano de nascimento do recruta?")

alert(
    "recruta cadastrado com sucesso!\n" + 
    "\nnome completo: " + primeiroNome + " " + sobrenome + 
    "\ncampo de estudo: " + campoDeEstudo + 
    "\nIdade: " + (2023 - anoNascimento)
)