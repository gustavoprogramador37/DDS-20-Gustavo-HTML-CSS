// // console - Terminal do navegador
// // console.log(console);
// // console.log(window)
// // window - janela do navegador
// // window.alert("sim")
// // alert("não")

// // document = DOM ou seu codigo html
// console.log(document)
// console.log(document.head);
// console.log(document.body);

// // Acessar elementos do body

// // Pega elementos pela tag
// var titulos = document.getElementsByTagName("h1")
// console.log(titulos)

// // Pega elementos pela class
// var paragrafos = document.getElementsByClassName("para")
// console.log(paragrafos)

// // Pega elemento pelo id
// var especifico = document.getElementById("p3")
// console.log(especifico)

// //pego por id
// especifico.style.backgroundColor = "green"
// especifico.style.color = "yellow"

// //pego por class 
// paragrafos[0].style.backgroundColor = "pink"

// // pego por tag
// titulos[2].style.backgroundColor = "orange"

// function cliquei(){
//     console.log("Eu falei pa você não clicar")
// }

// function hulk(){
//     for(var i = 0; i < titulos.length;i++){
//     titulos[i].style.backgroundColor = "green" 
//     titulos[i].style.fontSize = "100px"
//     }
// }


// function QuemFoi(elemento){
//     console.log(elemento);
// }









function troca(elementoQueChamou){
    // console.log(elementoQueChamou);
    var textoNovo = elementoQueChamou.value
     
    var textoAntigo = document.getElementById
    ("textoTrocar")

    textoAntigo.innerText = textoNovo
    console.log(textoNovo)
}

function trocaAgora(elementoQueChamou){
    // console.log(elementoQueChamou);
    let textoNovo = elementoQueChamou.value
     
    let textoAntigo = document.getElementById
    ("textoTrocaAgora")

    textoAntigo.innerText = textoNovo
    console.log(textoNovo)
}

function viraVerde(elemento){
    elemento.style.color = "green"
    elemento.style.fontSize = "100px"
}

function viraAzul(elemento){
    elemento.style.color = "blue"
    elemento.style.fontSize = "10px"
}