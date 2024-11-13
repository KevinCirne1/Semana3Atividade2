//Questão 1
//Item a


const tamanho = prompt('Digite o tamanho da lista de números');   //cria um const "tamanho" que recebe o prompt e no prompt o usuario vai digitar o tamanho da lista de numeros
const lista = new Array(tamanho).fill(null); //cria um const "lista" que recebe new Array(tamanho), ele vai pegar o tamanho desse new Array, e usa o fill pra preencher o elemento da new Array, como está Null, está vazio.
lista    //usa o map na lista, com um function que recebe como parametros: item e index, em seguida ele vai retornar o index adicionando +1
 .map(function (item, index) {
   return index + 1;
 })
 .reduce(function (acumulador, item) { //usa o reduce para iterar cada elemento da lista e reebe function que tem como paramentros o acumulador e o item,em seguida vai retornar o calculo de acumulador vezes o item
   return acumulador * item;
 });


new Array(tamanho) //cria um novo array e pega seu tamanho
 .fill(null)  //usa o fill para preencher o elemento do new array e passa como parametro o null porque está vazio
 .map((item, index) => index + 1) // usa o map para iterar os elementos da lista e passa como parametro o item e o index, usa uma arrow function que vai adicionar +1 no index
 .reduce((acumulador, item) => acumulador + item); // usa o reduce para iterar cada elemento da lista e recebe como parametro o acumulador e o item, usa uma arrow function que vai somar o acumulador + item