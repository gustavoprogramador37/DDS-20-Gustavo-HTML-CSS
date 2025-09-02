// // // //com array
// // // var alunos = ["Pedro","Tiago","Barquinho"]

// // // var media = [7,8,4]

// // // console.log("O aluno", alunos[1], "teve média de",media[1])

// // // // criando um objeto
// // // var aluno1 = {
// // //     // chave : "valor",
// // //     nome : "pedro",
// // //     media : 7 
// // // }

// // // var aluno2 = {
// // //     nome : "tiago",
// // //     media : 8
// // // }
// // // // Acessa todo o objeto
// // // console.log(aluno1)

// // // //Acessa uma propriedade daquele objeto
// // // console.log(aluno1.nome)
// // // console.log(aluno2.media)

//     var professor = {
//      nome: "Gregory",
//      salario: 3500,
//      materia: "Desenvolvimento De Sistemas",
//      dias_aulas: 3

// }

// console.log(professor)
// console.log("O salário do professor é de: ",professor.salario);

//  Acessando um valor passando uma chave
//  console.log("O professor leciona a materia de", professor["materia"])





// criando um objeto vazio
// var garrafa = {     
// }
// garrafa.cor = "Azul"

// garrafa.nome = "garrafa"

// garrafa.tamanho = "2L"

// garrafa["marca"] = "Staney"

//  console.log(garrafa);

//  alterar uma propriedade ja existente
// garrafa.cor = "Roxo"

//  console.log(garrafa);

// var propriedade = prompt("Digite uma nova propriedade de garrafa: ");
// garrafa[propriedade] = prompt("Digite um valor para essa propriedade: ");
// console.log(garrafa)
// console.log(garrafa.preco)

//Criar metódo

// var animal1 = {
//     nome : "Greg",
//     espécie : "cachorro",
//     raca : "yorkshire",
//     andar : function(){
//            console.log("Estou andando, acredite")
//     },

//     falar: function(){
//         console.log("Ruff Ruff")
//     }
// }

// console.log(animal1);
// console.log(animal1.andar);
// animal1.andar()

// var produto1 = {
//     nome: "Coca Cola",
//     categoria: "Bebida", 
//     quantidade: 30,
//     tamanhos: ["200ml", "Lata", "600ml", "2L"],
//     //Criação de um método interno
//     descricao: function(){
//         //uso do this como referencial
//         console.log("O produto", this.nome,"é da categoria", this.categoria, "e tem", this.quantidade, "unidades")
//     },
//     verTamanhos : opcoes
// }



// var produto2 = {
//     nome: "Salgado",
//     categoria: "Comida", 
//     quantidade: 10,
//     tamanhos: ["Pequeno","Médio","Grande"],
//     descricao: function(){
//        console.log("O produto", this.nome,"é da categoria",this.categoria, "e tem", this.quantidade,"unidades")
//     },
//     verTamanhos: opcoes
// }


// //THIS
// // produto1.descricao()
// // produto2.descricao()

// function opcoes(){
//     //  let tmnhs = ""
//     //  for(var i in this.tamanhos){
//     //  tmnhs += this.tamanhos[i] + ","
//     //  }  

//      console.log("As opções são: ", this.tamanhos.toString());
    
// }

// produto1.descricao()
// produto1.verTamanhos()

// produto1.descricao()
// produto2.verTamanhos()


var produto3 = {
    nome: prompt("nome:"),
    categoria: prompt("categoria"),
    quantidade: prompt("quantidade:"),
    tamanhos: prompt("tamanhos: (sepados por vírgula)").split(","),
    descricao: function(){
        console.log("O produto", this.nome, 
        "é da categoria", this.categoria)
    },
    verTamanhos : opcoes
}

produto3.descricao()
produto3.verTamanhos()

























