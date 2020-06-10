//2. Dado um array de objetos: 

const usuarios = [
{ nome: "Jordana", idade: 18 },
{ nome: "Lilian", idade: 28 },
{ nome: "Janaina", idade: 19 },
{ nome: "Carla", idade: 25 },
{ nome: "Maíra", idade: 32 },
{ nome: "George", idade: 30 },
{ nome: "Camila", idade: 27 },
{ nome: "Janaína", idade: 22 },
{ nome: "Amanda", idade: 50 },
{ nome: "Raquel", idade: 45 }
];

/*Imprima todos nome e idade do array que contém objetos usuários.
A saída deverá ser:

Jordana
18

Lilian
28*/

//para saber os indice dos usuarios
for(let indice = 0 ;indice< usuarios.length; indice++){
    console.log(usuarios[indice].nome, usuarios[indice].idade)
    
}
console.log('................')

// com for
//fornecem aceeso ao indice do array , não ao elemento real
// no for vc vê  o que esta acontecendo. qdo queremos controlar usamos o for
for(let i = 0 ; i < usuarios.length; i++){
    console.log(usuarios[i].nome)
    console.log(usuarios[i].idade)
}
console.log('..................')

//com for of é sempre com uma array, mas podemos testar em outros causos
//só quero ler o usuario ai usa o FOR of desse jeito for(usuario of usuarios){
  //  console.log(usuario)
//}
for(usuario of usuarios) {
    console.log(usuario.nome)
    console.log(usuario.idade)
}
console.log('...............')

// no vc pode acesar o indice do array em indice e o froEach o acesso é directo e não precisa fazer a compraçaõ
// do verdadeira ou falso e no vc não vê o que esta acontendo.
// quando queremos saber o valor real usamos o forEach
usuarios.forEach((iten) =>{
    console.log(iten.nome)
    console.log(iten.idade)
})

console.log('.............')

//No for of preciso do entries para poder ler o indice 
for(const [indice, valor ]of usuarios.entries()){
    console.log(indice)
}
