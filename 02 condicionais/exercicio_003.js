/*
3 - Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço 
normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento
escolhida a efetuar o cálculo adequado.

Código condição de pagamento:
- À vista débito, recebe 10% de desconto;
- À vista no dinheiro ou PIX, recebe 15% de desconto;
- Em uma vez, preço normal sem desconto;
- Em duas vezes, preço normal de etiqueta mais juros de 10%;
*/
let quantidadeParcelas = '5';
let precoProduto = 100;
let formaPagamento = 'debito';


if (quantidadeParcelas === 0){
    if(formaPagamento === 'debito'){
        precoProduto = precoProduto - ((precoProduto*10)/100);
        console.log('O preço do produto no débito à vista com desconto de 10% é: ', precoProduto);
    }else if(formaPagamento === 'dinheiro' || formaPagamento === 'pix'){
        precoProduto = precoProduto - ((precoProduto*15)/100);
        console.log('O preço do produto no dinheiro ou pix com desconto de 15% é: ', precoProduto)
    }else{
        console.log('forma de pagamento inválida');
    }
}else if(quantidadeParcelas === 1){
    if (formaPagamento === 'credito'){
        console.log('O preço do produto não terá desconto em pagamentos no crédito ou parcelamento: ', precoProduto);
    }else{
        console.log('Para pagamentos a prazo só aceitamos como forma de pagamento a opção de crédito.');
    }
}else if(quantidadeParcelas >= 2){
    if (formaPagamento === 'credito'){
        console.log('O preço do produto não terá desconto em pagamentos no crédito ou parcelamento.');
        precoProduto = precoProduto + ((precoProduto*10)/100);
        console.log('O preço do produto quando parcelado em 2x ou mais tem juros de 10%: ', precoProduto);
    }else{
        console.log('Para pagamentos a prazo só aceitamos como forma de pagamento a opção de crédito.');
    }
}else{
    console.log('quantidade de parcelas inválida');
}




