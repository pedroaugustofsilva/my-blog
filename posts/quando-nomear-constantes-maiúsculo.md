---
title: "Quando nomear constantes em maiúsculo"
date: "2020-02-01"
type: "article"
categories: "javascript"
---

> "Numa batida de olho nos nomes das variáveis é possível saber
> se o programador é experiente ou iniciante" - Desconhecido

Vou passar uma dica muito simples que no entanto achei bem útil.

Quando você for nomear uma constante, você tem duas opções:
1. Você pode nomeá-la com camelCase:

~~~javascript
const minhaConstante = ...;
~~~

2. Ou você pode nomeá-la toda em maiúscula:
~~~javascript
const MINHACONSTANTE = ...;
~~~

Agora, quando usar uma ou outra? 

Simples, a regra é a seguinte. Se você já sabe o valor da constante antes da execução, ela deve ser em
maiúsculo. Caso contrário, se a constante é calculada no tempo de execução, ela não deve ser um maiúsculo.

Exemplo:
~~~javascript
const COLOR_RED = "#ff000";
const algumaMudanca = fazAlgumaCoisa(COLOR_RED);
~~~

Perceba que a constante *algumaMudanca* é calculada no tempo de execução.

É isso!