# findIndex

::: tip

1.返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。

```js
 第一个参数 值
 第二个参数 索引
 第三个参数 数组本身
 Arrya.findIndex(function(value,index,arr){
   return '需要的条件'
 })
```

:::

```js
let arr = [1, 2, 3, 4, 5]
let num = arr.findIndex((item) => {
	return item > 3
})
console.log(num) //索引值 3
```
