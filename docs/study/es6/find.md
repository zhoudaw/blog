# find

::: tip

1. 用于找到符合条件的数组成员
2. 它的参数是一个回调函数
3. 所有数组成员依次执行该回调函数，直到找出第一个返回值为 true 的成员，然后返回该成员

```js
 第一个参数 值
 第二个参数 索引
 第三个参数 数组本身
 Arrya.find(function(value,index,arr){
   return '需要的条件'
 })
```

:::

```js
let arr = [1, 2, 3, 4, 5]
let num = arr.find((item) => {
	return item > 3
})
console.log(arr) //4
```
