let opcao = "5"

do {
    opcao = prompt(
        "Seja bem-vindo(a)!\n " +
        "\nEscolha uma das opções abaixo:" +
        "\n1. opção um" +
        "\n2. opção dois" +
        "\n3. opção três" +
        "\n4. opção quatro" +
        "\n5. Encerrar"
    )
    switch (opcao) {
        case "1":
            alert("Você escolheu opção 1")
            break
        case "2":
            alert("Você escolheu opção 2")
            break
        case "3":
            alert("Você escolheu opção 3")
            break
        case "4":
            alert("Você escolheu opção 4")
            break
        case "5":
            alert("Você escolheu encerrar!")
            alert("Encerrando...")
            break
        default:
            alert("Opção Invalida!")
    }

} while (opcao !== "5")
