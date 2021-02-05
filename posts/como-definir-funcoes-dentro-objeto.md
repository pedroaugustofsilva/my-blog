---
title: 'Como definir uma função dentro de um objeto no Javascript ES6'
date: "2020-02-04"
type: "tip"
categories: "javascript"
---

Para definir uma função dentro de um objeto em javascript, você pode fazer da seguinte forma:
~~~javascript
let meuObjeto = {
  fazAlgumaCoisa: function() {}
}
~~~

No entanto, com versão 6 do Javascript, podemos fazer isso de forma mais abreviada. Veja abaixo.
~~~javascript
let meuObjeto = {
  fazAlgumaCoisa() {}
}
~~~

Era isso. Até a próxima!