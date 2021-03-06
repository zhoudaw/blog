## vue综合

### 1-v-if和v-show的区别
1. 共同点都能控制元素的显示隐藏
2. v-show本质就是通过控制css中的display：none; 控制隐藏 只会编译一次
3. v-if是动态的向DOM树内添加或者删除DOM元素，若初始值为false，就不会编译了。而且v-if不停的销毁和创建比较消耗性能。
### 2-子组件父组件传值方式
1. 父组件像子组件 可以通过props
2. 子组件向父组件可以通过$emit
#### 3-vue中双向数据绑定是如何实现的
1. vue 双向数据绑定是通过 数据劫持 结合 发布订阅模式的方式来实现的， 也就是说数据和视图同步，数据发生变化，视图跟着变化，视图变化，数据也随之发生改变；
核心：关于VUE双向数据绑定，其核心是 Object.defineProperty()方法。
### 4-v-if和v-fro优先级
1. 当 v-if 与 v-for 一起使用时，v-for 具有比 v-if 更高的优先级，这意味着 v-if 将分别重复运行于每个 v-for 循环中
2. 不推荐v-if和v-for同时使用
### 5-vue的两个核心点
1. 数据驱动
2. 组件系统
### 6-第一次页面加载会触发哪几个钩子？
1. beforeCreate
2. created
3. beforeMount
4. mounted
### 7-生命周期
1. beforeCreate  初始前
2. created       初始
3. beforeMount   挂载前
4. Mounted       挂载
5. beforeUpdate  数据跟新前
6. updated       数据跟新
7. beforeDestroy 销毁前 
8. destroyed     销毁
### 8-created和mounted的区别
1. created:在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图
2. mounted:在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。

### 9-路由导航
1. beforeEach((to,from,next))
2. to 即将要进入的目标
3. from 当前导航正要离开的路由
4. next()  一定要调用该方法来 resolve 这个钩子

### 10-组件之间通讯
1. 公共bus
```js

import Vue from 'vue'
const bus = new Vue()
export default bus 
// 例子一
// A页面
import bus from '@/utils/bus'
bus.$emit('message', 'hello');.
// B页面
import bus from '@/utils/bus'
bus.$on('message', (e) => {
    console.log(e)
})

// 例子二
//一个组件(A)调用另一个组件(B)的方法
//B
mounted () {    
  bus.$on('testA', this.testA)  
},
testA () {
  console.log('由A组件调用')
},
//A
mounted () {
  bus.$emit('testA')
},
```
2. provide / inject 
3. $parent 和 $children






## 其他
### 1-什么是闭包

1. 函数 A 内部有一个函数 B，函数 B 可以访问到函数 A 中的变量，那么函数 B 就是闭包.
2. 闭包作用延申了变量的作用范围
```js
function fun(){
  let a =1
  function fun2(){
    console.log(a)
  }
  return fun2
}
let f =fun()
console.log(f)
// 类似
let f = fun2(){ console.log(a)}
```
### 2-export和export default的区别？
```js
export default  xxx
import xxx from './'

export xxx
import {xxx} from './'
```

### 3-css水平、垂直居中的写法，请至少写出4种？
#### 水平居中
1. 行内块 text-align:center;
2. 块级元素 margin:0 auto;
3. position:absolute; left:50%  transform:translateX(-50%)
4. display:flex; justify-content:center;
#### 垂直居中
1. 设置line-height 等于height
2. position：absolute +top:50%+ transform:translateY(-50%)
3. display:flex + align-items: center
4. display:table+display:table-cell + vertical-align: middle;
### 4-说一下盒模型？
1. 有里到外 content padding border margin

### 5-变量提升
```js
console.log(v1);
var v1 = 100;
function foo() {
    console.log(v1);
    var v1 = 200;
    console.log(v1);
}
foo();
console.log(v1);

1. undefined
2. undefined
3. 200
4. 100 
```
### 6-js有几种数据类型
1. number
2. string
3. boolean
4. null
5. undefined
6. object  function array object 引用类型
7. symbol

### 7-var、let、const之间的区别
1. var声明变量可以重复声明，而let不可以重复声明
2. var是不受限于块级的，而let是受限于块级
3. var会与window相映射（会挂一个属性），而let不与window相映射
4. var可以在声明的上面访问变量，而let有暂存死区，在声明的上面访问变量会报错
5. const声明之后必须赋值，否则会报错
6. const定义不可变的量，改变了就会报错
7. const和let一样不会与window相映射、支持块级作用域、在声明的上面访问变量会报错

### 8-使用箭头函数应注意什么？
1. 用了箭头函数，this就不是指向window，而是父级（指向是可变的）
2. 不能够使用arguments对象
3. 不能用作构造函数，这就是说不能够使用new命令，否则会抛出一个错误
4. 不可以使用yield命令，因此箭头函数不能用作 Generator 函数
### 9-Object.defineProperty (obj,prop,descriptor)
#####  接受三个参数
```js
1. obj要定义属性对象
2. prop要定义或者修改属性的名称或者Symbol
3. descriptor要定义或者修改的属性描述符
     configurable
       《当且仅当该属性的 configurable 键值为 true 时，该属性的描述符才能够被改变，
         同时该属性也能从对应的对象上被删除。默认为 false。》
     enumerable
       《当且仅当该属性的 enumerable 键值为 true 时，该属性才会出现在对象的枚举属性中。
         默认为 false。》
     value
       《该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。
         默认为 undefined。》
     writable
       《当且仅当该属性的 writable 键值为 true 时，属性的值，也就是上面的 value，才能
         被赋值运算符改变。默认为 false。》
      
```

```js
<body>
  <div></div>
  <input type="text">
</body>
<script>
  //类似 vue的data
  let obj = {}

  /*
   *obj      要劫持的对象
   *name     要劫持对象的属性
   *callback 劫持以后的操作
   */
  function watch(obj, name, callback) {
    let value = obj.name
    Object.defineProperty(obj, name, {
      get() {
        //返回获取属性值
        return value
      },
      set(newVal) {
        // 触发setter给obj赋值
        value = newVal
        //执行劫持后的操作
        callback(value)
      },
    })
  }
  function doSomething(value) {
    document.querySelector('div').innerHTML = value
    document.querySelector('input').value = value
  }
  document.querySelector('input').addEventListener('input', (e) => {
    obj['val'] = e.target.value
  })
  watch(obj, 'val', doSomething)

</script>
```
### 10-事件捕获
1. 事件从最上一级标签开始往下查找，直到捕获到事件目标(target)。

### 10-事件冒泡
1. 事件从事件目标(target)开始，往上冒泡直到页面的最上一级标签。
2. event.stopPropagation()

### 11-面向对象
```js
class Person(name,age){
  this.name=name
  this.age=age
  // 多个实例不推荐这样创建 每次创建一个内存会开辟一个fun空间 容易浪费
  this.sing=function(){
    console.log('我会唱歌')
  }
}
// 推荐使用prototype 
// 对象系统上自己添加一个__proto__指向我们构造函数的原型对象

Person.prototype={
  constructor:Star,
  sing:function(){
  console.log('我会唱歌')
  },
  movie:function(){
  console.log('我会演电影')
  }
}
Person.prototype.sin=function(){
     console.log('我会唱歌')
}

let ldh = new Person('刘德华'，18)
let zxy = new Person('张学友'，17)

```
1. call() fun.call(thisAry,arg1,ar2,...) 
```html
 thisAry 当前调用函数this的指向对象
 ary1,ar2 传递的其他参数 
 function fn(x,y){
   console.log('我想喝奶茶')
   console.log(this)
   console.log(x+y)
 }
 let o ={
   name:'zdw'
 }
 fn.call(o,1,2)
```
2. bind  fun.bind(thisAry,arg1,ar2,...) 
```html
bing() 方法不会调用函数，但是能改变函数内部this指向
 thisAry 当前调用函数this的指向对象
 ary1,ar2 传递的其他参数 
 返回由指定的this值和初始化参数改造的原函数拷贝

// 三秒后触发
 let btn=document.queyrSelector('button')
 btn.onclick=function(){
   this.disabled=true
   setTimenout(function(){
     this.disabled=false
   }.bind(this),3000)
 }

```
3. apply fun.apply(thisAry,[arsgArray])
```html
thisAry 当前调用函数this的指向对象
arsgArray:传递的值，必须包含在数组里面
返回值就是函数的返回值，因为它就是调用函数

```
### 12-递归
1. 求阶乘100
```js
 function fn(n){
   if(n===1){
     retrun 1
   }
   retrun n*fn(n-1)
 }
 fn(100)
```
### 13-浅拷贝
### 14-深拷贝
### 15-基本数据类型--->栈 
```js
let a =1
let b=a
b=3
console.log(a) //1
console.log(b) //3 
// 不会改变值
```
### 16-引用数据类型--->堆
```js
let a={}
let b=a
b.name='zdw'
b.age=18
console.log(a)   //zdw 18
console.log(b)   //zdw 18
// 修改什么都会一起变化 
```
### 17-什么事宏任务/微任务
1. 存在微任务的话，那么就会执行所有的微任务
2. 微任务都执行完之后，执行下一个宏任务
```js
// 1 7 6 8 2 4 3 5 9 11 10 12
    console.log('1');
    setTimeout(function () {  //setTimeout1 寄存
      console.log('2');
      process.nextTick(function () {  //process2 寄存
        console.log('3');
      })
      new Promise(function (resolve) {
        console.log('4'); 
        resolve();
      }).then(function () { // then2 寄存
        console.log('5')
      })
    })
    process.nextTick(function () {  //process1 寄存
      console.log('6');
    })
    new Promise(function (resolve) {  
      console.log('7');
      resolve();
    }).then(function () {  // then1 寄存
      console.log('8')
    })

    setTimeout(function () {  // setTimeout2 寄存
      console.log('9'); 
      process.nextTick(function () {  // process3
        console.log('10');
      })
      new Promise(function (resolve) {
        console.log('11');
        resolve();
      }).then(function () {  // then3 
        console.log('12')
      })
    })
   console.log('结束了')
```


## webpack
### 核心模块
1. 入口entry
2. 出口 output
3. loder
4. pulgin 插件
5. mode 模式

```js
module.export={
    publicPath:'根路径 /name',
    outputDir:'dist 打包的时候生成的文件名',
    lintOnSave:'true/false'是否开启eslint,
    configureWebpack=config=>{}
}
````
