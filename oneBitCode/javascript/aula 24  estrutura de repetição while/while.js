let velocidade = 80

while (velocidade > 0) {
    alert("O carro está a " + velocidade + " km/h")
    velocidade += 20
    alert("aumentando 20 km/h")

    if (velocidade > 120) {
        break
    }
} 
alert("multado")