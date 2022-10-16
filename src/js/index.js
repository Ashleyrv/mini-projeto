 //pegar os elementos d abas do hmtl
 const abas = document.querySelectorAll(".aba");

 //1° identicar o clique, 2° desmarcar aba selecionada
abas.forEach(aba => {
    aba.addEventListener("click", function(){

        if(aba.classList.contains("selecionado")){
            return;
        }

        selecionarAba(aba)
        mostrarinfoDaAba(aba)
    });
})

function selecionarAba(aba){
    const abaSelecionada = document.querySelector(".aba.selecionado"); 
    abaSelecionada.classList.remove("selecionado");

    //marcar aba selecionada
    aba.classList.add("selecionado");
}

function mostrarinfoDaAba(aba){
    //esconder o conteudo
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");
    
    //mostrar conteudo selcionado
    const idDoElementoAbas = `informacao-${aba.id}`

    const infoAserMostrada = document.getElementById(idDoElementoAbas )
    infoAserMostrada.classList.add("selecionado")
}