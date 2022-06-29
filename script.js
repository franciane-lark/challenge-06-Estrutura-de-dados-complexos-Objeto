// Crie um objeto que receba ao menos três propriedades sobre você.
let pessoal = {
    nome: "Franciane",
    idade: 29,
    signo: "Gêmeos"
}
// Adicione uma nova propriedade sem alterar seu objeto inicial.
pessoal.sexo = "Feminino";
console.log(pessoal)

// Remova uma propriedade desse objeto.
delete pessoal.signo;
console.log(pessoal)

//Mostre no console todas as propriedades desse objeto.
console.log(pessoal)

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.

let cadastro = [
    {
        nome: "João" ,
        idade: 18, 
        telefone: 123364 ,
        amigos: ["Amanda", "Ana", "Adriana", "Andressa", "Amanda"]
    },
    {
        nome: "Pedro" ,
        idade: 19, 
        telefone: 455266 ,
        amigos: ["Amanda", "Ana", "Adriana", "Andressa", "Amanda"]
    },
    {
        nome: "Maria" ,
        idade: 20, 
        telefone: 445566,
        amigos: ["Amanda", "Ana", "Adriana", "Andressa", "Amanda"]
    },
    {
        nome: "Ana" ,
        idade: 21, 
        telefone: 778899,
        amigos: ["Amanda", "Ana", "Adriana", "Andressa", "Amanda"]
    },
    {
        nome: "Enrique" ,
        idade: 22, 
        telefone: 101147,
        amigos: ["Amanda", "Ana", "Adriana", "Andressa", "Amanda"]
    }
]

/// Mostre no console o nome de um amigo de cada lista.
for(let contador = 0; contador < cadastro.length; contador++ ){
    console.log(cadastro[contador].amigos[contador])
}