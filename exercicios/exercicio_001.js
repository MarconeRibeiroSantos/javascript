/*
1 - Faça um algorítmo que dado as 3 notas tiradas por um aluno em um semestre da 
faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo. 

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;
*/

let nota_1 = 7;
let nota_2 = 7;
let nota_3 = 7;
let media = (nota_1 + nota_2 + nota_3) / 3;

if (media < 5) {
    console.log('valor da média:', media);
    console.log('Média menor que 5, reprovação');
} else if (media >= 5 && media <= 7) {
    console.log('valor da média:', media);
    console.log('Média entre 5 e 7, recuperação');
} else {
    console.log('valor da média:', media);
    console.log('Média acima de 7, passou de semestre');
}
