function verificarValor () {
    velocidade = parseInt (document.getElementById ("qtdVelocidade").value);
    if(velocidade > 60) {
        multa = (velocidade - 60) * 100
    } else {
        multa = 0;
    }

    document.getElementById("resultado").innerText = !velocidade || velocidade < 0 ? "R$0" : "R$" + multa

}