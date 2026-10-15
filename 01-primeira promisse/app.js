// EXEMPLO 01 – Sua primeira Promise
// Promise é uma promessa de que teremos um resultado.
// resolve informa que a tarefa terminou com sucesso.

const pedido = new Promise((resolve) => {
    resolve('Pedido confirmado!');
});

// then recebe uma função (callback) executada quando a Promise é resolvida.
pedido.then((mensagem) => {
    console.log(mensagem);
});

console.log('Mensagem escrita depois do then no arquivo.');
// Observe: o console.log acima aparece antes da mensagem do then.
