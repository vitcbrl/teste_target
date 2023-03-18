// Usar a função checarFibonacci verificar se o número pertence a Fibonacci
function quadradoPerfeito(n) {
  return n > 0 && Math.sqrt(n) % 1 === 0;
}

// O código abaixo usa a fórmula que diz que se um número ao quadrado, vezes cinco, mais ou menos 4 é um quadrado perfeito, esse número faz parte da sequência de Fibonacci
function checarFibonacci(numero) {
  if (
    quadradoPerfeito(5 * numero * numero + 4) ||
    quadradoPerfeito(5 * numero * numero - 4)
  ) {
    console.log('O número pertence a sequência de Fibonacci.');
    return;
  }
  console.log('O número não pertence a sequência de Fibonacci.');
}
