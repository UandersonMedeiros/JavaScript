const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function() {
    input.value = input.value === '' ? 'Olá Mundo!' : ''
    
    console.log(input.value)
})

document.getElementById('type').addEventListener('click', function() {
    input.type = input.type !== 'radio' ? 'radio' : 'text'
})

document.getElementById('placeholder').addEventListener('click', function() {
    input.placeholder = input.placeholder === '' ? 'Digite aqui...' : ''
})


