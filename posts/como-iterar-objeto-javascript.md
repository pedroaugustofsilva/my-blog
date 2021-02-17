---
title: 'Como iterar um objeto em Javascript'
date: "2020-02-16"
type: "tip"
categories: "javascript"
---

Para iterar um objeto em Javascript e acessar todas as suas propriedades, usamos o loop **for..in**.

Por exemplo, veja o objeto abaixo:
~~~javascript run
let user = {
  nome: 'Pedro',
  idade: '21',
  cidade: 'Francisco Beltrão'
}
~~~

Vamos iterar sobre ele e exibir toda as suas informações:
~~~javascript run
for (let key in user) {
  console.log(`${key}: ${user[key]}`)
}
~~~

O resultado será:
~~~terminal
nome: Pedro
idade: 21
cidade: Francisco Beltrão:
~~~

Espero ter ajudado.

Até a próxima!