
// var array = ["Lagartixa", 5, "dois", 8.7, true]

// // QUANDO NÃO ESPECIFICA O ARRAY É EXIBIDO COMPLETO
// // console.log(array)

// //ARRAY COM POSIÇÃO ESPECIFICA
// console.log(array[2])

// // Substitui um valor
// array[2] = "Outro Valor"

// console.log(array)




// // Laço de repetição pra interagir com o array
// var times = ["Palmeiras", "Corinthians", "São Paulo", "Santos", "Portuguesa"]


// //percorrendo o array com final definido
// for (var i = 0; i < 4; i++){
//     console.log(times[i])
//  }

// console.log("----------------")

// //percorrendo o array descobrindo o tamanho dele
// for (var i = 0; i < times.length; i++){
//     console.log(times[i])
// }

// console.log("----------------")

// for (var index in times){
//     console.log(times[index])
// }

// // manipulação de arrays
// var frutas = ["Maçã", "Uva", "Pêra"]

// console.log(frutas);

// // push - Adiciona no fim do array
// frutas.push("Laranja")
// console.log(frutas);

// // pop - retira o ultimo valor e te retorna
// var frutaTirada = frutas.pop()
// console.log("Fruta tirada: ", frutaTirada)
// console.log(frutas);

// // shift - retira o primeiro valor, e te retorna
// var exPrimeirafruta = frutas.shift()
// console.log("Ex:", exPrimeirafruta)

// // unshift - adiciona no inicio do array 
// frutas.unshift("Tomate")
// console.log(frutas);





//array.includes(valor, posiçãoInicial), 
// valor = valor buscado, 
// posiçãoInicial = a partir de qual posição no array ele deve começar a buscar
//Exemplo:
var numeros = [1,2,3,4,5]
console.log (numeros.includes(0));

