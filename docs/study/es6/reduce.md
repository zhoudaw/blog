# reduce

::: tip

1. 使用中数组的递归方法
2. 函数的第一个参数得到的是计算后的结果
3. arr.reduce(callback,[initval]) 
:::

#### 回调函数（callback）有四个参数

1. fnval 上一次调用回调返回的值，或者是提供的初始值（initval）
2. item 数组中当前被处理的对象
3. index 当前元素在数组中的索引
4. arr 数组本身

```js
let arr = [10, 5, 8, 9, 7]
let obj = arr.reduce((fnval, item, index, arr) => {
	console.log(fnval, item, index, arr)
	return a + b
})
console.log(obj)
// 10 5 1 (5) [10, 5, 8, 9, 7]
// 15 8 2 (5) [10, 5, 8, 9, 7]
// 23 9 3 (5) [10, 5, 8, 9, 7]
// 32 7 4 (5) [10, 5, 8, 9, 7]
```

#### 求和求乘积

```js
let arr = [1, 2, 3, 44, 11, 22]
let num = arr.reduce((a, b) => {
	return a + b
})
let num1 = arr.reduce((a, b) => {
	return a * b
})
console.log(num) //83
console.log(num1) //63888
```

### 数组对象求和

```js
let obj = [
	{ name: 'vue', num: 12 },
	{ name: 'html', num: 10 },
	{ name: 'css', num: 30 }
]
let num =obj.reduce((a,b)=>{
  return a+b.num
},0)
console.log(num) //52
```
