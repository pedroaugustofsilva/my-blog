---
title: 'Como pausar um loop dentro de um loop no Javascript'
date: "2020-02-05"
type: "tip"
categories: "javascript"
---

Nesse artigo vou te mostrar como pausar um loop de dentro de um loop. Ou seja, como parar o loop pai de dentro de um loop filho.

Veja nosso array de filosofos abaixo:
~~~javascript
let filosofos = [
  {
    categoria: 'pre-socraticos',
    filosofos: [
      {
        nome: 'Tales',
        idade: 25
      },
      {
        nome: 'Heraclito',
        idade: 30
      }
    ]
  },
  {
    categoria: 'medievais',
    filosofos: [
      {
        nome: 'Tomás de Aquino',
        idade: 28
      },
      {
        nome: 'Agostinho de Hipona',
        idade: 18
      }
    ]
  },
  {
    categoria: 'modernos',
    filosofos: [
      {
        nome: 'Baruch Espinosa',
        idade: 17
      },
      {
        nome: 'Blaise Pascal',
        idade: 30
      }
    ]
  }
]
~~~

Temos um array com 3 objetos, cada um deles representa uma época da filosofia e tem 2 filósofos com nome e idade.

Queremos exibir o primeiro filósofo que tem menos de 20 anos

No nosso caso é o **Agostinho de Hipona**.

Vamos fazer isso usando dois loops.

Veja como fica:
~~~javascript
for (let i = 0, categoria; categoria = filosofos[i++];) {
  for (let p = 0, filosofo; filosofo = categoria.filosofos[p++];) {
    if (filosofo.idade < 20) {
      console.log(`O filósofo é: ${filosofo.nome}`)
      break
    }
  }
}
~~~

Mas veja qual é o resultado desse código:
~~~terminal
O filósofo é: Agostinho de Hipona
O filósofo é: Baruch Espinosa
~~~

O que aconteceu? Nosso break não funcionou? 

Ele funcionou sim. Porém, ele parou somente o loop que estava dentro. E se quisermos parar o loop exterior?

## Labels para o loop for

Para resolver esse problema vamos usar um label no loop. Fica assim:
~~~javascript
primeiroLoop: for (let i = 0, categoria; categoria = filosofos[i++];) {
  for (let p = 0, filosofo; filosofo = categoria.filosofos[p++];) {
    if (filosofo.idade < 20) {
      console.log(`O filósofo é: ${filosofo.nome}`)

      // Agora o loop exterior será parado
      break primeiroLoop
    }
  }
}
~~~

Agora sim, nossa saída é:
~~~terminal
O filósofo é: Agostinho de Hipona
~~~

Espero que tenha sido útil!