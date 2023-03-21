// Biblioteca para capturar inputs de texto do usuário no console
const prompt = require('prompt-sync')({sigint: true});

// Receber o pedido
function recebePedido() {
    let pedido = {
        sabor: null,
        confeitos: null
    }
    // Qual o sabor do bolo?
    pedido.sabor = prompt("qual o sabor do bolo? ");
    // Quais confeitos deseja?
    pedido.confeitos = prompt("quais confeitos? ");

    return pedido;
}


// Preparar o pedido
function preparaPedido(pedido){
    // Separar ingredientes
    let ingredientes_base = separaIngredientes(pedido);
    // Misturar bolo
    let tabuleiro = misturaBolo(pedido, ingredientes_base)
    // Colocar no forno
    let bolo = colocaForno(tabuleiro)
    // Confeitar
    bolo = confeitar(pedido, bolo);

    return bolo;
}

function separaIngredientes(pedido){
    let ingredientes_base = 'ovos, leite, farinha, fermento';
    return ingredientes_base;
}

function misturaBolo(pedido, ingredientes_base){
    return pedido.sabor + ', ' + ingredientes_base;
}
    
function colocaForno(tabuleiro){
    return 'bolo de ' + tabuleiro
}

function confeitar(pedido, bolo){
    return bolo + ' confeitado com ' + pedido.confeitos;
}



// Calcular o preço
function calculaPreco(){
    // Valor dos ingredientes
    let preco_final = calculaIngredientes();
    // Valor da confeiteira
    preco_final = calculaConfeiteira(preco_final)
    // Valor das despesas de produção
    preco_final = calculaDispesas(preco_final);
    // Valor dos gastos fixos
    preco_final = calculaGastos(preco_final);
    // Valor do lucro
    preco_final = calculaLucro(preco_final);
    // Retornar preço final

    return preco_final;
}
    
function calculaIngredientes(){
    return 10.00;
}

function calculaConfeiteira(preco_calc){
    return preco_calc += preco_calc * 0.30;
}

function calculaDispesas(preco_calc){
    return preco_calc += 5.00;
}

function calculaGastos(preco_calc){
    return preco_calc += 15.00;
}

function calculaLucro(preco_calc){
    return preco_calc += preco_calc * 0.25;
}


// Entregar pedido
function entregaPedido(bolo, preco){
     // Exibir/entregar bolo para cliente
     console.log("Pedido Pronto ");
     console.log("Aproveite seu bolo " + bolo );

    // Exibir preço para o cliente
    prompt("Seu pedido ficou em R$ " + preco + " precione ENTER para pagar");
}
   

// Receber dinheiro
function receberDinheiro(preco){
     // Receber dinheiro do cliente
    let valor_pago = prompt("Digite o Valor para pagar: ");
    for(; valor_pago != preco;){
        valor_pago = prompt("Valor incorreto ");
    } 
    // Fechar pedido e agradecer ao cliente
    prompt("Obrigado e volte sempre");
}
   



let pedido = recebePedido();
let bolo = preparaPedido(pedido);
let preco = calculaPreco();
entregaPedido(bolo, preco);
receberDinheiro(preco);
