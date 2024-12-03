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
let populacaoA = 80000;
let populacaoB = 200000;
let taxaCrescimentoA = 0.03;
let taxaCrescimentoB = 0.015; 
let anos = 0;
while (populacaoA <= populacaoB) {
    populacaoA += populacaoA * taxaCrescimentoA;
    populacaoB += populacaoB * taxaCrescimentoB;
    anos++;
}
console.log(`Serão necessários ${anos} anos para que a população do país A ultrapasse ou iguale a população do país B.`);
// 6. Altere o programa anterior permitindo ao usuário informar as populações e as taxas de
// crescimento iniciais. Valide a entrada e permita repetir a operação.
//Ajuda ao chatGPT
function calcularCrescimento() {
    const prompt = require("prompt-sync")(); // Biblioteca para entrada de dados (instale com `npm install prompt-sync`)
    let repetir;
    do {
        console.log("\n==== Cálculo de Crescimento Populacional ====");
        // Entrada de dados
        let populacaoA = parseFloat(prompt("Informe a população inicial do país A: "));
        let taxaCrescimentoA = parseFloat(prompt("Informe a taxa de crescimento anual (%) do país A: "));
        let populacaoB = parseFloat(prompt("Informe a população inicial do país B: "));
        let taxaCrescimentoB = parseFloat(prompt("Informe a taxa de crescimento anual (%) do país B: "));
        // Validação dos dados
        if (isNaN(populacaoA) || isNaN(taxaCrescimentoA) || isNaN(populacaoB) || isNaN(taxaCrescimentoB) ||
            populacaoA <= 0 || taxaCrescimentoA <= 0 || populacaoB <= 0 || taxaCrescimentoB <= 0) {
            console.log("Por favor, insira valores válidos e positivos.");
            continue;
        }
        // Conversão de taxas para decimais
        taxaCrescimentoA /= 100;
        taxaCrescimentoB /= 100;
        let anos = 0;
        // Cálculo do crescimento populacional
        while (populacaoA <= populacaoB) {
            populacaoA += populacaoA * taxaCrescimentoA;
            populacaoB += populacaoB * taxaCrescimentoB;
            anos++;
        }
        console.log(`\nSerá necessário ${anos} anos para que a população do país A ultrapasse ou iguale a população do país B.`);
        // Perguntar se o usuário deseja repetir
        repetir = prompt("\nDeseja realizar outro cálculo? (s/n): ").toLowerCase();
    } while (repetir === "s");
    console.log("Programa encerrado. Até mais!");
}
calcularCrescimento();
// 7. Faça um programa que imprima na tela os números de 1 a 20, um abaixo do outro. Depois
// modifique o programa para que ele mostre os números um ao lado do outro.
for (let i = 1; i <= 20; i++) {
    console.log(i);
}
let numeros = "";
for (let i = 1; i <= 20; i++) {
    numeros += i + " "; 
}
console.log(numeros()); 
// 8. Faça um programa que leia 5 números e informe o maior número.
let maiorNumero = Number.NEGATIVE_INFINITY;
console.log("Informe 5 números:");
for (let i = 1; i <= 5; i++) {
    let numero = parseFloat(prompt(`Digite o número ${i}: `));
    if (isNaN(numero)) {
        console.log("Entrada inválida! Digite apenas números.");
        i--;
    }
    if (numero > maiorNumero) {
        maiorNumero = numero; // Atualiza o maior número
    }
}
console.log(`O maior número informado foi: ${maiorNumero}`);
// 9. Faça um programa que leia 5 números e informe a soma e a média dos números.
let soma = 0;
let numeros = [];
for (let i = 0; i < 5; i++) {
    let numero = parseFloat(prompt(`Digite o número ${i + 1}:`));
    numeros.push(numero);
    soma += numero;
}
let media = soma / numeros.length;
console.log(`A soma dos números é: ${soma}`);
console.log(`A média dos números é: ${media}`);

// 10. Faça um programa que imprima na tela apenas os números ímpares entre 1 e 50.
for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
        console.log(i); 
    }
}
// 11. Faça um programa que receba dois números inteiros e gere os números inteiros que estão no
// intervalo compreendido por eles.
let num1 = parseInt(prompt("Digite o primeiro número inteiro:"));
let num2 = parseInt(prompt("Digite o segundo número inteiro:"));
// 12. Altere o programa anterior para mostrar no final a soma dos números.
let inicio = Math.min(num1, num2);
let fim = Math.max(num1, num2);
let soma = 0;

// 13. Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro
// entre 1 a 10. O usuário deve informar de qual numero ele deseja ver a tabuada. A saída deve ser
// conforme o exemplo abaixo:
// a. Tabuada de 5:
// 5 X 1 = 5
// 5 X 2 = 10
// ...
// 5 X 10 = 50
// b. Como fazer a tabuada
let numero = parseInt(prompt("Digite um número inteiro entre 1 e 10 para gerar a tabuada:"));
if (numero >= 1 && numero <= 10) {
    console.log(`Tabuada de ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} X ${i} = ${numero * i}`);
    }
} else {
    console.log("Por favor, insira um número entre 1 e 10.");
}
// 14. Faça um programa que peça dois números, base e expoente, calcule e mostre o primeiro
// número elevado ao segundo número. Não utilize a função de potência da linguagem.
let base = parseInt(prompt("Digite a base (um número inteiro):"));
let expoente = parseInt(prompt("Digite o expoente (um número inteiro):"));
let resultado = 1;
for (let i = 1; i <= Math.abs(expoente); i++) {
    resultado *= base;
}
console.log(`${base} elevado a ${expoente} é igual a ${resultado}`);
// 15. Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade de números
// pares e a quantidade de números ímpares.
let pares = 0;
let impares = 0;
for (let i = 1; i <= 10; i++) {
    let numero = parseInt(prompt(`Digite o ${i}º número inteiro:`));
    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}
console.log(`Quantidade de números pares: ${pares}`);
console.log(`Quantidade de números ímpares: ${impares}`);
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
let n = parseInt(prompt("Quantos números você deseja informar?"));
let menor = Infinity;
let maior = -Infinity;
let soma = 0;
for (let i = 1; i <= n; i++) {
    let numero = parseFloat(prompt(`Digite o ${i}º número:`));
    if (numero < menor) {
        menor = numero;
    }
    if (numero > maior) {
        maior = numero;
    }
    soma += numero;
}
console.log(`Menor valor: ${menor}`);
console.log(`Maior valor: ${maior}`);
console.log(`Soma dos valores: ${soma}`);
// 20. Altere o programa anterior para que ele aceite apenas números entre 0 e 1000.
let n = parseInt(prompt("Quantos números você deseja informar?"));

// 21. Altere o programa de cálculo do fatorial, permitindo ao usuário calcular o fatorial várias vezes
// e limitando o fatorial a números inteiros positivos e menores que 16.
// 22. Faça um programa que peça um número inteiro e determine se ele é ou não um número primo.
// Um número primo é aquele que é divisível somente por ele mesmo e por 1.
// Números primos com laços
let numero = parseInt(prompt("Digite um número inteiro:"));
function verificarPrimo(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; 
        }
    }
    return true; 
}
if (verificarPrimo(numero)) {
    console.log(`${numero} é um número primo.`);
} else {
    console.log(`${numero} não é um número primo.`);
}
// 23. Altere o programa de cálculo dos números primos, informando, caso o número não seja primo,
// por quais número ele é divisível.
let numero = parseInt(prompt("Digite um número inteiro:"));
// 24. Faça um programa que mostre todos os primos entre 1 e N sendo N um número inteiro
// fornecido pelo usuário. O programa deverá mostrar também o número de divisões que ele
// executou para encontrar os números primos. Serão avaliados o funcionamento, o estilo e o
// número de testes (divisões) executados.
// Solicita o número N ao usuário
//Ajuda do chatgpt
let N = parseInt(prompt("Digite um número inteiro N:"));
function verificarPrimo(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(`Números primos entre 1 e ${N}:`);
for (let i = 1; i <= N; i++) {
    if (verificarPrimo(i)) {
        console.log(i);
    }
}
// 25. Faça um programa que calcule o mostre a média aritmética de N notas.
let N = parseInt(prompt("Digite o número de notas:"));
let somaNotas = 0;
for (let i = 1; i <= N; i++) {
    let nota = parseFloat(prompt(`Digite a ${i}ª nota:`));
    somaNotas += nota;
}
let media = somaNotas / N;
console.log(`A média aritmética das notas é: ${media}`);
// 26. Faça um programa que peça para n pessoas a sua idade, ao final o programa devera verificar
// se a média de idade da turma varia entre 0 e 25,26 e 60 e maior que 60; e então, dizer se a turma
// é jovem, adulta ou idosa, conforme a média calculada.
let n = parseInt(prompt("Digite o número de pessoas:"));
let somaIdades = 0;
for (let i = 1; i <= n; i++) {
    let idade = parseInt(prompt(`Digite a idade da ${i}ª pessoa:`));
    somaIdades += idade;
}
let mediaIdades = somaIdades / n;
let faixaEtaria;
if (mediaIdades >= 0 && mediaIdades <= 25) {
    faixaEtaria = "jovem";
} else if (mediaIdades >= 26 && mediaIdades <= 60) {
    faixaEtaria = "adulta";
} else if (mediaIdades > 60) {
    faixaEtaria = "idosa";
} else {
    faixaEtaria = "faixa etária inválida";
}
console.log(`A média de idade da turma é: ${mediaIdades.toFixed(2)}`);
// 27. Numa eleição existem três candidatos. Faça um programa que peça o número total de
// eleitores. Peça para cada eleitor votar e ao final mostrar o número de votos de cada candidato.
let totalEleitores = parseInt(prompt("Digite o número total de eleitores:"));
let votosCandidato1 = 0;
let votosCandidato2 = 0;
let votosCandidato3 = 0;
for (let i = 1; i <= totalEleitores; i++) {
    let voto = parseInt(prompt(`Eleitor ${i}: Digite o número do candidato (1, 2 ou 3):`));
    
// 28. Faça um programa que calcule o número médio de alunos por turma. Para isto, peça a
// quantidade de turmas e a quantidade de alunos para cada turma. As turmas não podem ter mais
// de 40 alunos.
let somaAlunos = 0;
let turmasValidas = 0;
for (let i = 1; i <= quantidadeTurmas; i++) {
    let alunos = parseInt(prompt(`Digite a quantidade de alunos na ${i}ª turma:`));
    if (alunos <= 40) {
        somaAlunos += alunos;
        turmasValidas++;
    } else {
        console.log("Número de alunos inválido! O máximo permitido é 40.");
// 29. Faça um programa que calcule o valor total investido por um colecionador em sua coleção de
// CDs e o valor médio gasto em cada um deles. O usuário deverá informar a quantidade de CDs e o
// valor para em cada um.
let quantidadeCDs = parseInt(prompt("Digite a quantidade de CDs na coleção:"));
let valorTotal = 0;
for (let i = 1; i <= quantidadeCDs; i++) {
    let valorCD = parseFloat(prompt(`Digite o valor do ${i}º CD:`));
    valorTotal += valorCD; 
}
let valorMedio = valorTotal / quantidadeCDs;
console.log(`O valor total investido na coleção é: R$ ${valorTotal.toFixed(2)}`);
console.log(`O valor médio gasto por CD é: R$ ${valorMedio.toFixed(2)}`);
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
