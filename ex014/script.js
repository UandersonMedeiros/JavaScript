function carregar() {
    var msg = window.document.getElementById('msg') 
    var img = window.document.getElementById('imagem')
    var msg2 = window.document.getElementById('msg2')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 20
    

    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'fotomanha.png'
        document.body.style.background = '#fdf6d0'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = 'fototarde.png'
        document.body.style.background = '#ff9b01'
    } else {
        // BOA NOITE!
        img.src = 'fotonoite.png'
        document.body.style.background = '#0f4971'
    }

    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        msg2.innerHTML = 'Bom Dia!'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        msg2.innerHTML = 'Boa Tarde!'
    } else {
        // BOA NOITE!
        msg2.innerHTML = 'Boa Noite!'
    }

    
}
     
    


