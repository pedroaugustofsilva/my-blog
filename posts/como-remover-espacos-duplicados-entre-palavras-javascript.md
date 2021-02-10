---
title: 'Como remover múltiplos espaços entre palavras no Javascript'
date: "2020-02-09"
type: "tip"
categories: "javascript"
---

Recentemente um dos sites que trabalho começou a apresentar um erro ao enviar as informações de cadastro para a API do PagSeguro.

Depois de me debruçar um tempo sobre o problema, percebi que o nome do cliente tinha múltiplos espaços entre as palavras, o que a API não aceitava e retornava um erro.

Por exemplo, no lugar de **"Pedro Augusto Ferreira da Silva"** estava escrito **"Pedro Augusto Ferreira da Silva"** (com dois espaços entre Pedro e Augusto).

A primeira solução foi usar o replace e substituir 2 espaços. Ficou assim:
~~~javascript
let clientName = 'Pedro  Augusto Ferreira da Silva'

clientName.replace('  ', ' ').

console.log(clientName) // Pedro Augusto Ferreira da Silva
~~~


Porém, surgiu um novo problema: e se o cliente inserir mais de um espaço? Por exemplo 4:
~~~javascript
let clientName = 'Pedro  Augusto Ferreira da    Silva'

clientName.replace('  ', ' ').

console.log(clientName) // Pedro Augusto Ferreira da    Silva
~~~

Para resolver de vez esse problema, decidi usar um regex, e capturar todos os espaços sequencias e substuir somente por um espaço. E ainda complementei com o método ```trim()``` para remover espaços antes e depois do nome.

~~~javascript
let clientName = '   Pedro  Augusto           Ferreira da    Silva  '

clientName.trim().replace(/ +/g, ' ')

console.log(clientName) // Pedro Augusto Ferreira da Silva
~~~

## Explicando o regex

Vou explicar o regex "**/ +/g**".

Primeiro: as duas barras "/" servem para indicar onde termina e começa o regex. 

Então tudo que estiver entre as barras é o que deve ser procurado.

Por exemplo, se eu colocasse "a" entre as barras, ele ia procurar por todos os a's do texto. 

Perceba que o que eu coloquei foi o espaço. Então ele vai procurar por espaços.

Porém, se o regex fosse somente "/ /g", ele iria selecionar somente 1 espaço. Por exemplo, veja como fica o regex "/a/g" aplicado ao texto abaixo (em negrito o que ele selecionaria):

e por f**a**aalar em p**a**ixão<br>
**a**onde **a**nd**a** você?

Perceba que ele seleciona somente o primeiro elemento que encontra, e não um sequência dele.

E é justamente para selecionar uma sequência que usamos o "+" após o espaço. Basicamente, significa o seguinte: procure por uma sequência do valor informado imediatamente antes. 

E após o fechamento da barra, para que serve o "g"?

Ele significa "global", e informa que é para selecionar todas as ocorrências. Se não informarmos ele, a nossa seleção pararia no primeiro match.

Era isso.

Até a próxima!
