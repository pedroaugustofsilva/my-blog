---
title: 'Para que serve o "use strict" no Javascript'
date: "2020-02-02"
type: "tip"
categories: "javascript"
---

O **"use strict";** é muito usado em várias bibliotecas javascript.

Ele surgiu para resolver um problema da evolução da linguagem.

Como os navegadores prezavam por manter a compatibilidade com a versão anterior, se você escrevesse usando a nova versão, seu código iria gerar erros.

Para resolver esse problema, bastava você adicionar ```"use strict";``` que o navegador interpretava seu código
da forma moderna.

## Funcionamento do use strict

O ```"use strict";``` só será aplicado após a sua declaração. Todo código anterior a ele ainda será interpretado na versão antiga.

Por exemplo:
~~~javascript
// código antigo
let dataAtual = new Date()

"use strict";
// a partir daqui será interpretado da maneira moderna
~~~

Vale notar que não existe um fechamento para **use strict**, como *end strict*. 

## Ainda preciso usar em 2021?

Nas novas versões do javascript, se o navegador detectar que você está tentando usar uma função ou API nova, ele automaticamente irá interpretar seu código da forma correta.

Portanto, não é necessário mais utilizá-lo.

Mas mantenha ele sempre à mão, talvez ele resolva alguns problemas.

Até mais.
