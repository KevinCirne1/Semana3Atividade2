const funcionarios = [ //cria a variavel funcionarios com uma lista que contem nome, salario e o departamento
    { nome: 'João', salario: 30000, departamento: 'TI' },
    { nome: 'Janete', salario: 70000, departamento: 'RH' },
    { nome: 'Sofia', salario: 100000, departamento: 'RH' },
   ];
   const funcionariosPorDepartamento = funcionarios.reduce(   //cria a constante funcionariosPorDepartamento e usa o reduce para iterar os elementos em funcionarios
    (acumulador, funcionario) => {   //para como paramentro do reduce: o acumulador e o funcionario
      const departamento = funcionario.departamento; //cria a variavel departamento que recebe o funcionario.departamento
      if (!acumulador[departamento]) { //da uma condição, se o funcionario não estiver em nenhum departamento, o acumulador[departamento] recebe uma lista vazia
        acumulador[departamento] = [];
      }
      acumulador[departamento].push(funcionario); //se o funcionario estiver no departamento, vai pegar o funcionario e trazer
      return acumulador;  //vai retornar o acumulador
    },
    {},
   );
   const mediasSalarioPorDepartamento = Object.keys(  //cria a variavel mediasSalarioPorDepartamento
    funcionariosPorDepartamento,  // usa o Object. keys()  que recebe funcionariosPorDepartamento, que vai retornar um array correspondente ao parametro passado
    const total = funcionariosPorDepartamento[departamento].reduce(  //cria uma variavel total que recebe funcionariosPorDepartamento, e usa o reduce para iterar os elementos da lista que recebe como parametro? acumulador e funcionario e usa uma arrow function que soma o acumulador com o salario do funcionario
      (acumulador, funcionario) => acumulador + funcionario.salario,
      0,
    );
    return { // vai retornar o departamento, e a media total dividido pelo tamanho dos funcionariosPorDepartamento
      departamento: departamento,
      media: total / funcionariosPorDepartamento[departamento].length,
    };
   });
   
   
   const maioresPagamentos = mediasSalarioPorDepartamento.filter( //cria a variavel maioresPagamentos que recebe mediasSalarioPorDepartamento e usa o filter que recebe departamento como paramentro e usa  uma arrow function, o  filter vai filtrar o departamento que a media for maior que 65000
    (departamento) => departamento.media > 65000,
   );
   