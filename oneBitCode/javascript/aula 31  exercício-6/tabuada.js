const numero = prompt(
    "Olá, eu sou o robô da tabuada!\n" + 
    "Informe o valor que deseja fazer a tabuada:")

    let resultado = ""

    for (let fator = 1; fator <= 30; fator++) {
        resultado += " -> " + numero + " * " + fator + " = " + (numero * fator) + "\n"
    }

    alert("O resultado da tabuaba de " + numero + ":\n\n" + resultado)

