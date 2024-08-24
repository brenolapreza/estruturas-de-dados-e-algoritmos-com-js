# Trabalhando com getters e setters

## Nesse capítulo veremos como trabalhar com os métodos `get` e `set` do JavaScript

### Método getters

No JavaScript, não há maneiras de criamos uma propriedade privada no inicio da classe. Com isso, é utilizado uma convenção da comunidade de utilizar o underscore `_` no inicio de cada propriedade, representando que sejam uma classe privada. Então, para definirmos uma função que obtém o método getters, é só utilizarmos:

```jsx
class Person {
  constructor(name) {
    // Aqui estamos iniciando um método "Privado"
    this._name = name;
  }

  get namePrivado() {
    // Aqui criamos uma função de get, para podermos acessar Person.namePrivado`
    // Que irá retornar o nome do método privado
    return this._name;
  }
}
```

### Método Setters

O método setters pode ser chamado antes mesmo do método get, com isso, ele simplesmente serve para `setar` um novo valor para o nosso método privado.

```jsx
class Person {
  constructor(name) {
    this._name = name;
  }

  get namePrivado() {
    return this._name;
  }

  // Criando uma função setter, para setar o novo valor de name. Notando que o set
  // precisa necessariamente de um parametro, que será o novo valor
  set namePrivado(value) {
    this._name = value;
  }
}
```
