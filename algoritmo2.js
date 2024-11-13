const letras = [   //cria uma lista que recebe varias letras
    ['a', 'b', 'c'],
    ['c', 'd', 'f'],
    ['d', 'f', 'g'],
   ];
   
    
   let resultado = letras.flat().reduce((objeto, numero) => { // Cria a variavel resultado que recebe letras.flat e usa o reduce que recebe como parametros: objeto e numero, o flat vai criar um novo array com todos elementos sub-arrays concatenados nele, o reduce vai iterar sob cada elemento da lista
    if (objeto[numero]) { //da uma condição se for :  objeto[numero] adiciona 1
      objeto[numero] += 1; 
    } else {
      objeto[numero] = 1; //se for o contrario,  o objeto [numero] recebe 1
    }
    return objeto; //vai retornar o valor do objeto
   }, {});
   