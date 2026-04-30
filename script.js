const botaoMenu = document.querySelector(".btn-menu");
const menuEscondido = document.querySelector(".menu-lateral");
let PaginaInicial = alert("Você acabou de abrir a página");
botaoMenu.addEventListener("click", function(){
    menuEscondido.classList.toggle("ativo");
    botaoMenu.classList.toggle("girar");
})
//AGARRANDO O BOTÃO CHAVEAMENTO
/*
const btnBrasil = document.querySelector('#time1');
const btnChile = document.querySelector('#time2');
const vagaSemi1 = document.querySelector('#vencedor-q1');

btnBrasil.addEventListener("click",function(){
    if(vagaSemi1.innerText === "?"){
        vagaSemi1.innerText = btnBrasil.innerText;
        btnBrasil.classList.add("brilho-vencedor");
    }
    else{
        console.log("Atenção: Este jogo já foi decidido");
    }
})
*/
async function carregarTimes(){
    try{
        let response = await fetch("https://api.npoint.io/c9011e411843473f6334")
        let timesDaApi = await response.json();
        console.log("Dados recebidos:",timesDaApi);
        const tabuleiro = document.getElementById("tabuleiro-copa");
        const primeiraSemi = document.getElementById("vencedor-q1");
        timesDaApi.forEarch(function(time){
            letnovoBotao = document.createElement("button");       
        novoBotao.innertext = time.nome;
        novoBotao.dataset.destino = time.destino;
        novoBotao.classList.add("jogo", "quartas");
        tabuleiro.insertBefore(novoBotao,primeiraSemi);
        });
        console.log("Botões Criados na Tela!");
        ativarMaquinaCliques();
    }
    catch(erro){
        console.log("Erro ao buscar os times:", erro);
        }
}
function ativarMaquinaCliques(){
    const todosOsJogos = document.querySelectorAll(".jogo");
    todosOsJogos.forEach(function(botao){
        botao.addEventListener("click", function(event){
            let nomeDoTime = event.target.innertext;
            let idDodestino = event.target.dataset.destino;
            if(nomeDoTime === "?" || !idDoDesino){
                return;
            }
            let espacoDestino = document.getElementById(idDoDestino);
            if(espacoDestino.innertext === "?"||espacoDestino.innerText === "A Grande Final"){
                if(espacoDestino.innerText === "A Grande Final"){
                espacoDestino.innertext = nomeDoTime + "CAMPEÂO! 🏆";
            } else{
                espacoDestino.innertext = nomeDoTime;
            }
            event.target.classList.add("brilho-vencedor");
        } else{
            console.log("O juiz já apitou o fim dete confronto!");
        }
        })
    })
}
carregarTimes()