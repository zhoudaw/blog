# Array 操作

### ES6 Set(数字)去重

```js
let arr = [1, 2, 3, 4, 1, 2, 3, 4]
let arr1 = new Set(arr)
console.log(Array.from(arr1)) //输出 [1,2,3,4]
```

### ES6 Set(字符串)去重

```js
let arr = ['vue', 'vue', 'javascript', 'java', 'html', 'java']
console.log(Array.from(new Set(arr)))
```

### filter indexOf (数字)去重

```js
let arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6]
let arr2 = arr.filter((item, index) => {
	return arr.indexOf(item, 0) === index
})
console.log(arr2)
```

### ES6 reduce()(对象)去重

::: tip

1. reduce()方法(ie9 以下不支持此方法)
   :::

```js
let arr = [
	{ name: 'vue', id: 1 },
	{ name: 'vue', id: 1 },
	{ name: 'react', id: 2 },
	{ name: 'java', id: 3 },
	{ name: 'html', id: 4 },
	{ name: 'html', id: 4 },
	{ name: 'css', id: 5 },
]
let obj = {}
arr1 = arr.reduce((preVal, curVal) => {
	obj[curVal.id] ? '' : (obj[curVal.id] = preVal.push(curVal))
	return preVal
}, [])
console.log(arr1)
```

### 数组里(对象)去重方法一

```js
let arr = [
	{ name: 'vue', id: 1 },
	{ name: 'vue', id: 1 },
	{ name: 'react', id: 2 },
	{ name: 'java', id: 3 },
	{ name: 'html', id: 4 },
	{ name: 'html', id: 4 },
	{ name: 'css', id: 5 },
]
let obj = {}
let arr1 = []
for (let item of arr) {
	if (!obj[item.id]) {
		arr1.push(item)
		obj[item.id] = true
	}
}
console.log(arr1)
```

### 数组里(对象)去重方法二

```js
let arr = [
	{ name: 'vue', id: 1 },
	{ name: 'vue', id: 1 },
	{ name: 'react', id: 2 },
	{ name: 'java', id: 3 },
	{ name: 'html', id: 4 },
	{ name: 'html', id: 4 },
	{ name: 'css', id: 5 },
]
let arr1 = []
let arr2 = []
let str
for (let item of arr) {
	str = JSON.stringify(item)
	if (arr2.indexOf(str) == -1) {
		arr1.push(item)
		arr2.push(str)
	}
}

console.log(arr1)
```

## 多个数组找不同（对象）

```js
let arr1 = [
	{
		value: 1,
		label: '测试1',
	},
	{
		value: 2,
		label: '测试2',
	},
	{
		value: 3,
		label: '测试3',
	},
]
let arr2 = [
	{
		value: 1,
		label: '测试1',
	},
	{
		value: 3,
		label: '测试3',
	},
]
let data = []
for (var i = 0; i < arr1.length; i++) {
	var obj = arr1[i]
	var num = obj.value
	var isExist = false
	for (var j = 0; j < arr2.length; j++) {
		var aj = arr2[j]
		var n = aj.value
		if (n == num) {
			isExist = true
			break
		}
	}
	if (!isExist) {
		data.push(obj)
	}
}

console.log(data)
```
## 组合所有不重复类型

```js
  arr = [
        ['a', 'b'],
        ['1', '2', '3'],
        ['x', 'y'],
    ]
    results = [];
    result = [];
    doExchange(arr, 0);
    function doExchange(arr, index){
        for (var i = 0; i<arr[index].length; i++) {
            result[index] = arr[index][i];
            if (index != arr.length - 1) {
                doExchange(arr, index + 1)
            } else {
                results.push(result.join(','))
            }
        }
    }
    console.log(results)
```