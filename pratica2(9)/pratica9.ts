//ATIVIDADE 1 Crie uma classe patinete e apresente os atributos e métodos referentes a esta classe, em seguida crie um objeto patinete, defina as instâncias deste objeto e apresente as informações deste objeto no console.

// class patinete {
//     modelo: string
//     tamanho: number
//     cor: string
//     funções: string

//     sinopse(){
//         console.log(`Patinete, modelo ${Bipolar.modelo}, tamanho ${Bipolar.tamanho} metros, cor ${Bipolar.cor} com função de motor ${Bipolar.funções}.`)
// }

// }
// const Bipolar = new patinete()
// Bipolar.modelo = "Hizer Bipolar"
// Bipolar.tamanho = 2.30
// Bipolar.cor = "cinza"
// Bipolar.funções = "elétrico"

// Bipolar.sinopse()

//ATIVIDADE 2 Crie uma classe conta bancária e apresente os atributos e métodos referentes a esta classe, em seguida crie um objeto conta bancária, defina as instâncias deste objeto e apresente as informações deste objeto no console.

// class contaBancaria {
//     banco: string
//     numeroDaConta: number
//     nomeDoCliente: string

//     sinopse(){
//         console.log(`${Isabel.banco}\nnúmero da conta bancária: ${Isabel.numeroDaConta}\nnome do cliente: ${Isabel.nomeDoCliente}.`)
// }

// }
// const Isabel = new contaBancaria()
// Isabel.banco = "Banco Generation Brasil"
// Isabel.numeroDaConta = 9587390284
// Isabel.nomeDoCliente = "Isabel Silva"


// Isabel.sinopse()

//ATIVIDADE 3 Crie uma classe paciente e apresente os atributos e métodos referentes a esta classe, em seguida crie um objeto paciente, defina as instâncias deste objeto e apresente as informações deste objeto no console.

class paciente {
    nome: string
    idade: number
    sexo: string
    atendimento: string

    sinopse(){
        console.log(`Nome do Paciente: ${Matheus.nome}\nIdade do Paciente: ${Matheus.idade}\nSexo do Paciente: ${Matheus.sexo}\nÁrea de atendimento: ${Matheus.atendimento}.`)
}

}
const Matheus = new paciente()
Matheus.nome = "Matheus Honais"
Matheus.idade = 19
Matheus.sexo = "masculino"
Matheus.atendimento = "Clínico Geral"

Matheus.sinopse()