# for...of

::: tip
1.  entries()，keys() 和 values()
:::

```js
let arr = [
	{ name: 'vue', id: 1 },
	{ name: 'html', id: 2 },
	{ name: 'java', id: 3 },
]
for (let item of arr) {
	console.log(item)
	// { name: 'vue', id: 1 }
	// { name: 'html', id: 2 }
	// { name: "java", id: 3 }
}
```

#### entries()是对键值对的遍历

```js
let arr = [
	{ name: 'vue', id: 1 },
	{ name: 'html', id: 2 },
	{ name: 'java', id: 3 },
]
for (let [index, value] of arr.entries()) {
	console.log(index, value)
	//0 { name: 'vue', id: 1 }
	//1 { name: 'html', id: 2 }
	//2 { name: "java", id: 3 }
}
```

#### keys()是对键名的遍历

```js
let arr = [
	{ name: 'vue', id: 1 },
	{ name: 'html', id: 2 },
	{ name: 'java', id: 3 },
]
for (let index of arr.keys()) {
	console.log(index)
	//0
	//1
	//2
}
```
#### values()是对键值的遍历
```js
let arr = [
	{ name: 'vue', id: 1 },
	{ name: 'html', id: 2 },
	{ name: 'java', id: 3 },
]
for (let value of arr.values()) {
	console.log(value)
	// { name: 'vue', id: 1 }
	// { name: 'html', id: 2 }
	// { name: "java", id: 3 }
}
```
