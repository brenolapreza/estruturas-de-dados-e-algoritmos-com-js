const pesquisaBinaria = (list: number[], item: number) => {
  let baixo = 0;
  let alto = list.length - 1;

  while (baixo <= alto) {
    let meio = (baixo + alto) / 2;
    let chute = list[meio];

    console.log(chute);

    if (chute === item) {
      return meio;
    }
    if (chute > meio) {
      alto = meio - 1;
    } else {
      baixo = meio + 1;
    }
    return null;
  }
};

const minhaLista = [1, 3, 5, 7, 9];
console.log(pesquisaBinaria(minhaLista, 3));
