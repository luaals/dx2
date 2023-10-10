function musicas() {
    //qnt de músicas
    var qntmus = parseInt(prompt('Digite a quantidade de músicas'))
    //referencia a musica tocada, inicialmente valendo 0
    var ref = 0;
    var contador = qntmus;
    //quantidade de reprodução por musica
    var qntrepro;
    const msg = document.querySelector(".msg");

    while (contador >= 1) {

        qntrepro = parseInt(prompt("Digite quantas vezes cada música foi reproduzida:"))


        if (qntrepro > ref) {
            ref = qntrepro;
        }
        //decremento para não ficar em loop infinito
        contador = contador - 1;
    }
    //resposta
    msg.innerHTML = (`${ref}`);
}

function notamaior() {
    var qntaluno = parseInt(prompt(`Digite quantos alunos há na sala de aula`))

    var contador = qntaluno;
    var notaest =0;
    var nome = 0;
    var nomemax = "";
    var maiornota =0;
    
    const msg2 = document.querySelector(".msg2");

    while (contador > 0 && contador <= 20) {
        nome = prompt(`Digite o nome do aluno ${contador}`)
        notaest = parseInt(prompt(`Digite a nota do aluno ${contador}`)) //5,4,3
       
            if (notaest > maiornota) {
                maiornota = notaest;
                nomemax = nome;
            }
            contador--;           
    }   

    msg2.innerHTML = (`A maior nota foi ${maiornota} do aluno ${nomemax}`);
}