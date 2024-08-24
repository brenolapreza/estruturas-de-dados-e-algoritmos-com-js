# Arrays

## Nesse capítulo será mostrado um pouco de Arrays

### O que é um array

Array é uma forma de armazenar valores em linguagens de programação. Os valores
armazenados deverão ser dos mesmo tipo. Exemplo: Se um array é criado para ser string, por boa prática não devemos incluir um número nesse array, por mais que *no javascript isso é permitido*.

### Criando e inicializando um array

para criarmos e inicializarmos um array, é possível instaciarmos com a palavra reservada `new Array` uma constante. Ex:

```ts
let daysOfWeek = new Array()
daysOfWeek = new Array(7) // Aqui estamos especificando o tamanho desse array
daysOfWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
```

Com isso, utilizar a palavra reservada `new Array` não é considerado a melhor prática, já que podemos simplesmente utilizar o `let daysOfWeek = []`.

### Acessando elementos e fazendo uma interação em um array

#### Sequência de Fibonacci

```ts
// Iniciando um array de números
const fibonacci = <number[]>[]
fibonacci[1] = 1; // Adicionando o número 1 na segunda casa do array (ignorando a casa 0)
fibonacci[2] = 1; // Adicionando o número 1 na terceira casa do array

// Fazendo um loop que basicamente soma o valor atual
// Inicia em i = 3, por que em Fibonacci, vamos pegar o valor atual e somar com o anterior 
// porém como começa em 0, 1 e 1 (valores definidos no começo), não precisamos somar esses valores.
// Portanto, o primeiro cálculo realizado pelo loop será para i = 3, onde fibonacci[3] será calculado como fibonacci[2] + fibonacci[1] (ou seja, 1 + 1).
for (let i = 3; i < 20; i++) {
  // Definindo que, o próximo valor será a soma do valor atual com valor anterior
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
}

// Realizando um loop, que define i = 1 e parando somente quando i for igual a quantidade do array fibonacci (que terá 19 itens)
for (let i = 1; i < fibonacci.length; i++) {
  console.log(fibonacci[i])
}

/* Resultado:
1 
1 
2 
3 
5 
8 
13 
21 
34 
55 
89 
144 
233 
377 
610 
987 
1597 
2584 
4181
*/
```
