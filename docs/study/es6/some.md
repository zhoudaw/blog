
# some
::: tip
1. some 一真即真
2. some 方法只要其中一个为true就是true的
:::
```js
let arr1= [1,2,3,4,5];
let isok =arr1.some((e)=>{
  return e<3
})
console.log(isok) //true
```