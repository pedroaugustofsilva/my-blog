---
title: 'Não use mais var no Javascript'
date: "2020-02-03"
type: "tip"
categories: "javascript"
---

Estamos em 2021 e se você ainda declara suas variáveis em Javascript usando **var**, você está fazendo isso errado.

Entenda o motivo abaixo.

## var não respeita escopo de bloco

Vamos examinar o código abaixo:
~~~javascript
var nomes = ['Pedro', 'João', 'Mateus']
var inverterNomes = true

if (inverterNomes) {
  var nomesInvertidos = nomes.reverse()
  console.log(nomesInvertidos) // ['Mateus', 'João', 'Pedro']
}

console.log(nomesInvertidos) // ['Mateus', 'João', 'Pedro']
~~~

Perceba que nós declaramos a variável *nomesInvertidos* dentro do bloco {} do if. Mesmo assim, ela ainda existe fora dele.

Por isso, dizemos que o **var** não respeita escopo de bloco.

E o que isso pode causar?

1. Adiciona as variáveis no escopo global.
2. Efeitos colaterais indesejados.
3. Erros, caso você declare uma variável dentro do if com um nome que já exista fora.

## E como resolver isso?

Simples! Usando o **let**. 

Ele funciona como o var. Com uma diferença: ele respeita o escopo de bloco e vai prevenir muitos erros e dores de cabeça.

Com o **let**, o código acima ficaria assim:
~~~javascript
let nomes = ['Pedro', 'João', 'Mateus']
let inverterNomes = true

if (inverterNomes) {
  let nomesInvertidos = nomes.reverse()
  console.log(nomesInvertidos) // ['Mateus', 'João', 'Pedro']
}

console.log(nomesInvertidos) // Uncaught ReferenceError: nomesInvertidos is not defined
~~~

Pronto, agora seu código fica mais seguro a erros!

Até mais!

### Artigos relacionados

* [Quando nomear constantes em maiúsculo](/quando-nomear-constantes-maiúsculo)