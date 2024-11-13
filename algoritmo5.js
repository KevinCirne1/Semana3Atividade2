//Some os valores das listas a = [1, 2, 3, 4, 5], b = [6, 7, 8, 9, 10].

const l1  = [1,2,3,4,5], l2 = [6,7,8,9,10];
var l1l2 = l1.reduce((acumulador,elemento) => acumulador+=elemento, l2.reduce((acumulador,elemento) => acumulador +=elemento, 0))
console.log(l1l2);

