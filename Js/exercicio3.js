// 1. Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.
let nota = parseInt(prompt("Digite uma nota entre 0 e 10: "));

while (nota < 0 || nota > 10 || isNaN(nota)) {
    alert("Nota inválida. Por favor, insira novamente um valor entre 0 e 10");
    nota = prompt("Digite uma nota entre 0 e 10:");
}
alert("Nota válida! Você digitou: " + nota);
// 2. Crie um loop que imprima todos os números de 1 a 100.
for (let i = 1; i <= 100; i++) {
    console.log(i);
}
// 3. Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.
let usuario = prompt("Usuário: ");
let senha = prompt("Senha: ");

while (senha === usuario) {
    alert("Erro: A senha não pode ser igual ao nome do usuário. ");
    usuario = prompt("Digite o nome do usuário novamente: ");
    senha = prompt("Digite a senha novamente: ");
}
alert("Cadastro realizado com sucesso!");
// 4. Faça um programa que leia e valide as seguintes informações:
// a. Nome: maior que 3 caracteres;
let nome;
do {
  nome = prompt("Qual seu nome?");
} while (nome.length <= 3);
// b. Idade: entre 0 e 150;
let idade;
do {
  idade = parseInt(prompt("Digite sua idade: "));
} while (is(idade) || idade < 0 || idade > 150);
// c. Salário: maior que zero;
let salario;
do {
  salario = parseFloat(prompt("Digite seu salário (maior que 0):"));
} while (is(salario) || salario <= 0);
// d. Sexo: 'f' ou 'm';
let sexo;
do {
  sexo = prompt("Digite seu sexo ('f' para feminino ou 'm' para masculino):");
} while (sexo !== 'f' && sexo !== 'F' && sexo !== 'm' && sexo !== 'M')
// e. Estado Civil: 's', 'c', 'v', 'd';
// Dica: se sua variável é texto, o tamanho dela está armazenado em: texto.length
// 5. Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual
// de crescimento de 3% e que a população de B seja 200000 habitantes com uma taxa de
// crescimento de 1.5%. Faça um programa que calcule e escreva o número de anos necessários para
// que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de
// crescimento.
// 6. Altere o programa anterior permitindo ao usuário informar as populações e as taxas de
// crescimento iniciais. Valide a entrada e permita repetir a operação.
// 7. Faça um programa que imprima na tela os números de 1 a 20, um abaixo do outro. Depois
// modifique o programa para que ele mostre os números um ao lado do outro.
// 8. Faça um programa que leia 5 números e informe o maior número.
// 9. Faça um programa que leia 5 números e informe a soma e a média dos números.
// 10. Faça um programa que imprima na tela apenas os números ímpares entre 1 e 50.
// 11. Faça um programa que receba dois números inteiros e gere os números inteiros que estão no
// intervalo compreendido por eles.
// 12. Altere o programa anterior para mostrar no final a soma dos números.
// 13. Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro
// entre 1 a 10. O usuário deve informar de qual numero ele deseja ver a tabuada. A saída deve ser
// conforme o exemplo abaixo:
// a. Tabuada de 5:
// 5 X 1 = 5
// 5 X 2 = 10
// ...
// 5 X 10 = 50
// b. Como fazer a tabuada
// 14. Faça um programa que peça dois números, base e expoente, calcule e mostre o primeiro
// número elevado ao segundo número. Não utilize a função de potência da linguagem.

// 15. Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade de números
// pares e a quantidade de números ímpares.
// 16. A série de Fibonacci é formada pela sequência 1,1,2,3,5,8,13,21,34,55,... Faça um programa
// capaz de gerar a série até o n−ésimo termo.
// Sequência de Fibonacci com laços
// 17. A série de Fibonacci é formada pela sequência 0,1,1,2,3,5,8,13,21,34,55,... Faça um programa
// que gere a série até que o valor seja maior que 500.
// 18. Faça um programa que calcule o fatorial de um número inteiro fornecido pelo usuário. Ex.:
// 5!=5.4.3.2.1=120
// Calcular fatorial com laços
// 19. Faça um programa que, dado um conjunto de N números, determine o menor valor, o maior
// valor e a soma dos valores.
// 20. Altere o programa anterior para que ele aceite apenas números entre 0 e 1000.
// 21. Altere o programa de cálculo do fatorial, permitindo ao usuário calcular o fatorial várias vezes
// e limitando o fatorial a números inteiros positivos e menores que 16.
// 22. Faça um programa que peça um número inteiro e determine se ele é ou não um número primo.
// Um número primo é aquele que é divisível somente por ele mesmo e por 1.
// Números primos com laços
// 23. Altere o programa de cálculo dos números primos, informando, caso o número não seja primo,
// por quais número ele é divisível.
// 24. Faça um programa que mostre todos os primos entre 1 e N sendo N um número inteiro
// fornecido pelo usuário. O programa deverá mostrar também o número de divisões que ele
// executou para encontrar os números primos. Serão avaliados o funcionamento, o estilo e o
// número de testes (divisões) executados.
// 25. Faça um programa que calcule o mostre a média aritmética de N notas.
// 26. Faça um programa que peça para n pessoas a sua idade, ao final o programa devera verificar
// se a média de idade da turma varia entre 0 e 25,26 e 60 e maior que 60; e então, dizer se a turma
// é jovem, adulta ou idosa, conforme a média calculada.
// 27. Numa eleição existem três candidatos. Faça um programa que peça o número total de
// eleitores. Peça para cada eleitor votar e ao final mostrar o número de votos de cada candidato.
// 28. Faça um programa que calcule o número médio de alunos por turma. Para isto, peça a
// quantidade de turmas e a quantidade de alunos para cada turma. As turmas não podem ter mais
// de 40 alunos.
// 29. Faça um programa que calcule o valor total investido por um colecionador em sua coleção de
// CDs e o valor médio gasto em cada um deles. O usuário deverá informar a quantidade de CDs e o
// valor para em cada um.
// 30. O Sr. Manoel Joaquim possui uma grande loja de artigos de R$ 1,99, com cerca de 10 caixas.
// Para agilizar o cálculo de quanto cada cliente deve pagar ele desenvolveu um tabela que contém o
// número de itens que o cliente comprou e ao lado o valor da conta. Desta forma a atendente do
// caixa precisa apenas contar quantos itens o cliente está levando e olhar na tabela de preços. Você
// foi contratado para desenvolver o programa que monta esta tabela de preços, que conterá os
// preços de 1 até 50 produtos, conforme o exemplo abaixo:

// a. Lojas Quase Dois - Tabela de preços

// 1 - R$ 1.99
// 2 - R$ 3.98
// ...
// 50 - R$ 99.50

// 31. O Sr. Manoel Joaquim acaba de adquirir uma panificadora e pretende implantar a metodologia
// da tabelinha, que já é um sucesso na sua loja de 1,99. Você foi contratado para desenvolver o
// programa que monta a tabela de preços de pães, de 1 até 50 pães, a partir do preço do pão
// informado pelo usuário, conforme o exemplo abaixo:
// a. Preço do pão: R$ 0.18

// Panificadora Pão de Ontem - Tabela de preços
// 1 - R$ 0.18
// 2 - R$ 0.36
// ...
// 50 - R$ 9.00

// 32. O Sr. Manoel Joaquim expandiu seus negócios para além dos negócios de 1,99 e agora possui
// uma loja de conveniências. Faça um programa que implemente uma caixa registradora
// rudimentar. O programa deverá receber um número desconhecido de valores referentes aos preços
// das mercadorias. Um valor zero deve ser informado pelo operador para indicar o final da compra.
// O programa deve então mostrar o total da compra e perguntar o valor em dinheiro que o cliente
// forneceu, para então calcular e mostrar o valor do troco. Após esta operação, o programa deverá
// voltar ao ponto inicial, para registrar a próxima compra. A saída deve ser conforme o exemplo
// abaixo:
// a. Lojas Tabajara

// Produto 1: R$ 2.20
// Produto 2: R$ 5.80
// Produto 3: R$ 0
// Total: R$ 9.00
// Dinheiro: R$ 20.00
// Troco: R$ 11.00
// ...

// 33. O Departamento Estadual de Meteorologia lhe contratou para desenvolver um programa que
// leia as um conjunto indeterminado de temperaturas, e informe ao final a menor e a maior
// temperaturas informadas, bem como a média das temperaturas.
// 34. Os números primos possuem várias aplicações dentro da Computação, por exemplo na
// Criptografia. Um número primo é aquele que é divisível apenas por um e por ele mesmo. Faça um
// programa que peça um número inteiro e determine se ele é ou não um número primo.
// 35. Encontrar números primos é uma tarefa difícil. Faça um programa que gera uma lista dos
// números primos existentes entre 1 e um número inteiro informado pelo usuário.
// 36. Desenvolva um programa que faça a tabuada de um número qualquer inteiro que será digitado
// pelo usuário, mas a tabuada não deve necessariamente iniciar em 1 e terminar em 10, o valor
// inicial e final devem ser informados também pelo usuário, conforme exemplo abaixo:
// a. Montar a tabuada de: 5
// Começar por: 4
// Terminar em: 7
// Vou montar a tabuada de 5 começando em 4 e terminando em 7:
// 5 X 4 = 20
// 5 X 5 = 25
// 5 X 6 = 30
// 5 X 7 = 35

// Obs: Você deve verificar se o usuário não digitou o final menor que o inicial.
// 37. Uma academia deseja fazer um senso entre seus clientes para descobrir o mais alto, o mais
// baixo, a mais gordo e o mais magro, para isto você deve fazer um programa que pergunte a cada
// um dos clientes da academia seu código, sua altura e seu peso. O final da digitação de dados deve
// ser dada quando o usuário digitar 0 (zero) no campo código. Ao encerrar o programa também deve
// ser informados os códigos e valores do clente mais alto, do mais baixo, do mais gordo e do mais
// magro, além da média das alturas e dos pesos dos clientes
// 38. Um funcionário de uma empresa recebe aumento salarial anualmente: Sabe-se que:
// a. Esse funcionário foi contratado em 1995, com salário inicial de R$ 1.000,00;
// b. Em 1996 recebeu aumento de 1,5% sobre seu salário inicial;
// c. A partir de 1997 (inclusive), os aumentos salariais sempre correspondem ao dobro do percentual
// do ano anterior. Faça um programa que determine o salário atual desse funcionário. Após concluir
// isto, altere o programa permitindo que o usuário digite o salário inicial do funcionário.
// 39. Foi feita uma estatística em cinco cidades brasileiras para coletar dados sobre acidentes de
// trânsito. Foram obtidos os seguintes dados:
// a. Código da cidade;
// b. Número de veículos de passeio (em 1999);
// c. Número de acidentes de trânsito com vítimas (em 1999). Deseja-se saber:
// d. Qual o maior e menor índice de acidentes de transito e a que cidade pertence;
// e. Qual a média de veículos nas cinco cidades juntas;
// f. Qual a média de acidentes de trânsito nas cidades com menos de 2.000 veículos de passeio.
// 40. Faça um programa que receba o valor de uma dívida e mostre uma tabela com os seguintes
// dados: valor da dívida, valor dos juros, quantidade de parcelas e valor da parcela.
// a. Os juros e a quantidade de parcelas seguem a tabela abaixo:

// Quantidade de Parcelas % de Juros sobre o valor inicial da dívida
// 1 0
// 3 10
// 6 15
// 9 20
// 12 25
// Exemplo de saída do programa:
// Valor da Dívida Valor dos Juros Quantidade de Parcelas Valor da Parcela
// R$ 1.000,00 0 1 R$ 1.000,00
// R$ 1.100,00 100 3 R$ 366,00
// R$ 1.150,00 150 6 R$ 191,67

// 41. O cardápio de uma lanchonete é o seguinte:
// a. Especificação Código Preço

// Cachorro Quente 100 R$ 1,20
// Bauru Simples 101 R$ 1,30
// Bauru com ovo 102 R$ 1,50
// Hambúrguer 103 R$ 1,20
// Cheeseburguer 104 R$ 1,30
// Refrigerante 105 R$ 1,00
// Faça um programa que leia o código dos itens pedidos e as quantidades desejadas.
// Calcule e mostre o valor a ser pago por item (preço * quantidade) e o total geral do
// pedido. Considere que o cliente deve informar quando o pedido deve ser encerrado.
// 42. Em uma eleição presidencial existem quatro candidatos. Os votos são informados por meio de
// código. Os códigos utilizados são:
// a. 1 , 2, 3, 4 - Votos para os respectivos candidatos

// (você deve montar a tabela ex: 1 - Jose/ 2- João/etc)
// 5 - Voto Nulo
// 6 - Voto em Branco

// Faça um programa que calcule e mostre:

// b. O total de votos para cada candidato;
// c. O total de votos nulos;
// d. O total de votos em branco;
// e. A percentagem de votos nulos sobre o total de votos;
// f. A percentagem de votos em branco sobre o total de votos. Para finalizar o conjunto de votos
// tem-se o valor zero.
// 43. Desenvolver um programa para verificar a nota do aluno em uma prova com 10 questões, o
// programa deve perguntar ao aluno a resposta de cada questão e ao final comparar com o gabarito
// da prova e assim calcular o total de acertos e a nota (atribuir 1 ponto por resposta certa). Após
// cada aluno utilizar o sistema deve ser feita uma pergunta se outro aluno vai utilizar o sistema.
// Após todos os alunos terem respondido informar:
// a. Maior e Menor Acerto;
// b. Total de Alunos que utilizaram o sistema;
// c. A Média das Notas da Turma.
