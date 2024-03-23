# App.js
```js
console.log("hello Word");

var n1 = 10
var n2 = 2

var total = n1 + n2

console.log(total);

if(n1 > n2){
    console.log(`${n1} é maior que ${n2}`);
}else if(n1 < n2){
    console.log(`${n1} é menor que ${n2}`);
}else{
    console.log(`${n1} é igual que ${n2}`);
}
```

# Soma com module.exports
```js
var soma = function(n1, n2){
    return n1 +  n2
}

module.exports = soma
```
