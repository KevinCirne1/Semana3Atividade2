const estudantes = [ //cria uma lista de estudantes, com os nomes e notas.
    { nome: 'Alice', notas: [100, 60, 92] },
    { nome: 'João', notas: [75, 30, 85] },
    { nome: 'Charles', notas: [90, 95, 85] },
    { nome: 'Paulo', notas: [100, 100, 100] },
   ];
   
   
   const estudantesMedias = estudantes.map((estudante) => { // cria uma variavel estudantesMedias, vai usar o map para mapear os estudantes e passa estudante como parametro
    const total = estudante.notas.reduce((soma, nota) => soma + nota); //cria a variavel total que vai pegar a nota dos estudantes e usa o reduce para iterar os elementos da lista, recebe como parametro: soma e nota
    let {nome} = estudante; // cria a variavel nome que recebe estudante
    return { nome, media: total / estudante.notas.length };  //retorna o nome e a media total dos estudantes dividido pelo tamanho das notas dos estudantes
   });
   
   
   const melhoresMedias = estudantesMedias.filter( //cria a variavel melhoresMedias que recebe estudantesMedias e usa o filter para filtrar student, ele vai filtrar e pegar somente os estudantes cuja média for acima de 90
    (student) => student.media > 90,
   );
   