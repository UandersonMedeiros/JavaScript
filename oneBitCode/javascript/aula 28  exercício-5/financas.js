let saldo = parseFloat(prompt("Informe a quantida de dinheiro inicial:"))
//saldo = parseFloat(saldo) "também pode ser feito assim"
let opcao = ""

do {
    opcao = prompt (
        "Saldo disponível: R$ " + saldo +
        "\n1. Adcionar dinheiro" +
        "\n2. Remover dinheiro" +
        "\n3. Sair" 
    )

    switch (opcao) {
        case "1":
            saldo += parseFloat(prompt("Informe o valor a ser adcionado:"))
            break
        case "2":
            saldo -= parseFloat(prompt("Informe o valor a ser removido:"))
            break
        case "3":
            alert("Saindo...")
            break100
        default:
            alert("Entrada Invalida!")
    }
} while (opcao !== "3")