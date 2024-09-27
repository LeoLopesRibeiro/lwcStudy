//importando a propriedade track, essa propriedade faz com que consigamos editar um valor de um objeto, array direto de um input
import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    //propriedades
   fullName = "Leonardo Lopes"
   title = "Developer"

   //method 
   //metodos são as funções que usaremos dentro das classes
   changeHandler(e){
    //pra acessar uma propriedade usamos o this.
    this.title = e.target.value
   }

   //desta maneira não está "errado" porem no javascript o correto é criar uma copia do objeto e depois altera-lo e não alterar diretamente, mas pode usar o track tbm
//    @track addres = {
//     city: "São Paulo",
//     postCode: 3008,
//     country: "Brasil"
//    }

//    trackHandler(e){
//         this.addres.city = e.target.value
//    }
   addres = {
        city: "São Paulo",
        postCode: 3008,
        country: "Brasil"
   }
   trackHandler(e){
    //alterando do jeito coreto com o spread operator
    this.addres = {...this.addres, city: e.target.value}
   }

   //getter é um metodo que começa com get e sempre retorna algum valor
   num1 = 20
   num2 = 10
   users = ["user1", "user2", "user3"]
   get sumNum(){
    return this.num1 + this.num2
   }
   //dessa maneira sempre que o valor do user for atualizado o getter traz o valor automaticamente
   get firstUser(){
        return this.users[0]
   }
  
}