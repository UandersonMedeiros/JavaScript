const entrada1 = prompt ('Digite o primeiro número:')
const entrada2 = prompt ('Digite o segundo número:')

const x = parseFloat (entrada1)
const y = parseFloat (entrada2)

const soma = x + y
const subtração = x - y
const multiplicação = x * y
const divisão = x / y

alert (
    'Resultado:\n ' +
    '\nSoma: ' + soma +
    '\nsubtração: ' + subtração +
    '\nmultiplicação: ' + multiplicação +
    '\ndivisão: ' + divisão
)