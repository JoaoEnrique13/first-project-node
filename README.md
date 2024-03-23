# Soma
```js
var soma = require('./soma.js')
var subtracao = require('./subtracao.js')
var multiplicacao = require('./multiplicacao.js')
var divisao = require('./divisao.js')

console.log("Soma: ",soma(10,10));
console.log("Subtração", subtracao(10,10));
console.log("Multiplicação", multiplicacao(10,10));
console.log("Divisão", divisao(10,10));
```

# Soma com module.exports
```js
var soma = function(n1, n2){
    return n1 +  n2
}

module.exports = soma
```
