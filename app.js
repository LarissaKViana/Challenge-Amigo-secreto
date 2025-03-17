//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let listaAmigos=document.getElementById("listaAmigos");

function adicionarAmigo(){
    let nome=document.querySelector('input').value.trim();
    if (nome!=""){
        if(amigos.includes(nome)){
            alert("Nome já existe no array, digite um nome diferente");
        }else{
            amigos.push(nome);
        }
    }else{
        alert("Por favor, insira um nome.");
    } 
    limparCampo();
    listaAmigos.innerHTML="";
    atualizarLista();
}

function sortearAmigo(){
    let qtdAmigos=amigos.length;
    let sorteio=Math.floor((Math.random()*qtdAmigos));
    let resultado = document.getElementById("resultado");
    listaAmigos.innerHTML="";
    resultado.innerHTML = "Amigo sorteado é " + amigos[sorteio];
}

function atualizarLista(nome){
    let lista = document.getElementById("listaAmigos");
    listaAmigos.innerHTML="";
    for(i=0;i<=amigos.length;i++){
        let item = document.createElement('li');
        item.textContent=amigos[i];
        lista.appendChild(item);
    }
}

function limparCampo(){
    lista=document.querySelector('input');
    lista.value='';
}


