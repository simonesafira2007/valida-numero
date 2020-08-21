
/* Programa para calcular média do usuário:
   Usuário entra com os valores;
   Validação dos inputs do tipo Number acontecem logo após a entrada dos dados, através do comando condicional if;
   A variável total acumula todas as entradas e executa a soma dos inputs;
   A varíavel media recebe total e divide pelo número de inputs;
   Programa exibe na tela a situação do usuário:aprovado; reprovado ou em recuperação.
*/

const input = require("readline-sync")

let input1 = input.question ("Informe valor da primeira nota: ")

if (isNaN(input1)) {
input1 = input.question ("Informe valor da primeira nota: ")
if (isNaN(input1)) {
input1 = input.question ("Digite um numero válido. ")
}
}

const input2 = input.question ("Informe valor da segunda nota: ")

if (isNaN(input2)) {
input2 = input.question ("Informe valor da segunda nota: ")
if (isNaN(input2)) {
input2 = input.question ("Digite um numero válido. ")
}
}

const input3 = input.question ("Informe valor da terceira nota: ")
if (isNaN(input3)) {
input3 = input.question ("Informe o valor da terceira nota: ")
if (isNaN(input)) {
input3 = input.question ("Digite um número válido. ")

}
}  

const total = parseFloat(input1) + parseFloat(input2) + parseFloat(input3)
console.log("A soma das notas foi :", parseFloat(total))

media = total.toFixed(2)/3    

if (media >= 5 && media < 7){
console.log(' Sua média foi :' , media.toFixed(2),  '  --- Você está em Recuperação. Precisa estudar mais. ---')
} else if (media < 5 ){
console.log(' Sua média foi :' , media.toFixed(2),  '  --- Você foi Reprovado(a). Você não estudou o bastante. Sinto muito. ---')
} else {
console.log(' Sua média foi :' , media.toFixed(2),  ' --- Você foi Aprovado(a) por Média. Parabéns! ---')
} 

     
