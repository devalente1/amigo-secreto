// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
let nombreAmigo=document.getElementById('amigo').value;
if(nombreAmigo===""){
    alert('Por favor, inserte un nombre');
}else{
    amigos.push(nombreAmigo);
    mostrarAmigos();
}
amigoRetornado();
}

function mostrarAmigos(){
    let elementoHTML = document.getElementById('listaAmigos')
    elementoHTML.innerHTML = ""
        for(let i = 0; i <= amigos.length - 1; i++){
         let li = document.createElement("li")
            li.innerHTML = amigos[i]
            elementoHTML.appendChild(li)
         }
  limpiarInput()
}

function limpiarInput() {
    document.querySelector('#amigo').value='';
    return;
}

function amigoRetornado(){
    let bandera;
    if(amigos.length===0){
        alert("No hay amigos, debes ingresar amigos!")
    }else{
        bandera=Math.floor(Math.random()*amigos.length);
    }
    return amigos[bandera];
}

function sortearAmigo(){
    let resultado=amigoRetornado();
    if(resultado){
        document.getElementById('listaAmigos').innerHTML = ""
        let resultadoObt = document.getElementById('resultado')
        resultadoObt.innerHTML = `El amigo elegido es: ${resultado}`
      }else{
        let resultadoObt = document.getElementById('resultado')
        resultadoObt.innerHTML = ""
      }
}
