# every
::: tip
1. every 一假即假
2. every 必须所有都返回true才会返回true,哪怕一个false 就会返回false
:::
```js
let arr1= [1,2,3,4,5];
let isok =arr1.every((e)=>{
  return e>3
})
console.log(isok) //false
```