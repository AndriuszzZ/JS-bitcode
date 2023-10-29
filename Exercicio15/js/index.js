import calculate from './calculate.js'
import copyToClipboard from './copyToClipBoard.js'
import { handleButtonPress, handleClearButton, handleTyping } from './keyHandlers.js'
import themeSwitcher from './themeSwitcher.js'

// funcionalidade nos botões
document.querySelectorAll('.charKey').forEach(function (charKeyBtn) {
    charKeyBtn.addEventListener('click', handleButtonPress)
})

// limpar o calculo digitado
document.getElementById('clear').addEventListener('click', handleClearButton)
// input para escrever somente as teclas permitidas
document.getElementById('input').addEventListener('keydown', handleTyping)
// calcular o resultado
document.getElementById('equal').addEventListener('click', calculate)
// botão copiar o resultado
document.getElementById('copyToClipboard').addEventListener('click', copyToClipboard)
// trocar tema (dark/light)
document.getElementById('themeSwitcher').addEventListener('click', themeSwitcher)