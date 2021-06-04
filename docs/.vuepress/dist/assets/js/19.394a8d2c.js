(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{375:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"vue综合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue综合"}},[t._v("#")]),t._v(" vue综合")]),t._v(" "),s("h3",{attrs:{id:"_1-v-if和v-show的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-v-if和v-show的区别"}},[t._v("#")]),t._v(" 1-v-if和v-show的区别")]),t._v(" "),s("ol",[s("li",[t._v("共同点都能控制元素的显示隐藏")]),t._v(" "),s("li",[t._v("v-show本质就是通过控制css中的display：none; 控制隐藏 只会编译一次")]),t._v(" "),s("li",[t._v("v-if是动态的向DOM树内添加或者删除DOM元素，若初始值为false，就不会编译了。而且v-if不停的销毁和创建比较消耗性能。")])]),t._v(" "),s("h3",{attrs:{id:"_2-子组件父组件传值方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-子组件父组件传值方式"}},[t._v("#")]),t._v(" 2-子组件父组件传值方式")]),t._v(" "),s("ol",[s("li",[t._v("父组件像子组件 可以通过props")]),t._v(" "),s("li",[t._v("子组件向父组件可以通过$emit")])]),t._v(" "),s("h4",{attrs:{id:"_3-vue中双向数据绑定是如何实现的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-vue中双向数据绑定是如何实现的"}},[t._v("#")]),t._v(" 3-vue中双向数据绑定是如何实现的")]),t._v(" "),s("ol",[s("li",[t._v("vue 双向数据绑定是通过 数据劫持 结合 发布订阅模式的方式来实现的， 也就是说数据和视图同步，数据发生变化，视图跟着变化，视图变化，数据也随之发生改变；\n核心：关于VUE双向数据绑定，其核心是 Object.defineProperty()方法。")])]),t._v(" "),s("h3",{attrs:{id:"_4-v-if和v-fro优先级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-v-if和v-fro优先级"}},[t._v("#")]),t._v(" 4-v-if和v-fro优先级")]),t._v(" "),s("ol",[s("li",[t._v("当 v-if 与 v-for 一起使用时，v-for 具有比 v-if 更高的优先级，这意味着 v-if 将分别重复运行于每个 v-for 循环中")]),t._v(" "),s("li",[t._v("不推荐v-if和v-for同时使用")])]),t._v(" "),s("h3",{attrs:{id:"_5-vue的两个核心点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-vue的两个核心点"}},[t._v("#")]),t._v(" 5-vue的两个核心点")]),t._v(" "),s("ol",[s("li",[t._v("数据驱动")]),t._v(" "),s("li",[t._v("组件系统")])]),t._v(" "),s("h3",{attrs:{id:"_6-第一次页面加载会触发哪几个钩子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-第一次页面加载会触发哪几个钩子"}},[t._v("#")]),t._v(" 6-第一次页面加载会触发哪几个钩子？")]),t._v(" "),s("ol",[s("li",[t._v("beforeCreate")]),t._v(" "),s("li",[t._v("created")]),t._v(" "),s("li",[t._v("beforeMount")]),t._v(" "),s("li",[t._v("mounted")])]),t._v(" "),s("h3",{attrs:{id:"_7-生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-生命周期"}},[t._v("#")]),t._v(" 7-生命周期")]),t._v(" "),s("ol",[s("li",[t._v("beforeCreate  初始前")]),t._v(" "),s("li",[t._v("created       初始")]),t._v(" "),s("li",[t._v("beforeMount   挂载前")]),t._v(" "),s("li",[t._v("Mounted       挂载")]),t._v(" "),s("li",[t._v("beforeUpdate  数据跟新前")]),t._v(" "),s("li",[t._v("updated       数据跟新")]),t._v(" "),s("li",[t._v("beforeDestroy 销毁前")]),t._v(" "),s("li",[t._v("destroyed     销毁")])]),t._v(" "),s("h3",{attrs:{id:"_8-created和mounted的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-created和mounted的区别"}},[t._v("#")]),t._v(" 8-created和mounted的区别")]),t._v(" "),s("ol",[s("li",[t._v("created:在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图")]),t._v(" "),s("li",[t._v("mounted:在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。")])]),t._v(" "),s("h3",{attrs:{id:"_9-路由导航"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-路由导航"}},[t._v("#")]),t._v(" 9 路由导航")]),t._v(" "),s("ol",[s("li",[t._v("beforeEach((to,from,next))")]),t._v(" "),s("li",[t._v("to 即将要进入的目标")]),t._v(" "),s("li",[t._v("from 当前导航正要离开的路由")]),t._v(" "),s("li",[t._v("next()  一定要调用该方法来 resolve 这个钩子")])]),t._v(" "),s("h2",{attrs:{id:"其他"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),s("h3",{attrs:{id:"_1-什么是闭包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是闭包"}},[t._v("#")]),t._v(" 1-什么是闭包")]),t._v(" "),s("ol",[s("li",[t._v("函数 A 内部有一个函数 B，函数 B 可以访问到函数 A 中的变量，那么函数 B 就是闭包.")])]),t._v(" "),s("h3",{attrs:{id:"_2-export和export-default的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-export和export-default的区别"}},[t._v("#")]),t._v(" 2-export和export default的区别？")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v("  xxx\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" xxx "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" xxx\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("xxx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./'")]),t._v("\n")])])]),s("h3",{attrs:{id:"_3-css水平、垂直居中的写法-请至少写出4种"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-css水平、垂直居中的写法-请至少写出4种"}},[t._v("#")]),t._v(" 3-css水平、垂直居中的写法，请至少写出4种？")]),t._v(" "),s("h4",{attrs:{id:"水平居中"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#水平居中"}},[t._v("#")]),t._v(" 水平居中")]),t._v(" "),s("ol",[s("li",[t._v("行内块 text-align:center;")]),t._v(" "),s("li",[t._v("块级元素 margin:0 auto;")]),t._v(" "),s("li",[t._v("position:absolute; left:50%  transform:translateX(-50%)")]),t._v(" "),s("li",[t._v("display:flex; justify-content:center;")])]),t._v(" "),s("h4",{attrs:{id:"垂直居中"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#垂直居中"}},[t._v("#")]),t._v(" 垂直居中")]),t._v(" "),s("ol",[s("li",[t._v("设置line-height 等于height")]),t._v(" "),s("li",[t._v("position：absolute +top:50%+ transform:translateY(-50%)")]),t._v(" "),s("li",[t._v("display:flex + align-items: center")]),t._v(" "),s("li",[t._v("display:table+display:table-cell + vertical-align: middle;")])]),t._v(" "),s("h3",{attrs:{id:"_4-说一下盒模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-说一下盒模型"}},[t._v("#")]),t._v(" 4-说一下盒模型？")]),t._v(" "),s("ol",[s("li",[t._v("有里到外 content padding border margin")])]),t._v(" "),s("h3",{attrs:{id:"_5-变量提升"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-变量提升"}},[t._v("#")]),t._v(" 5-变量提升")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" v1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" v1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" \n")])])]),s("h3",{attrs:{id:"_6-js有几种数据类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-js有几种数据类型"}},[t._v("#")]),t._v(" 6-js有几种数据类型")]),t._v(" "),s("ol",[s("li",[t._v("number")]),t._v(" "),s("li",[t._v("string")]),t._v(" "),s("li",[t._v("boolean")]),t._v(" "),s("li",[t._v("null")]),t._v(" "),s("li",[t._v("undefined")]),t._v(" "),s("li",[t._v("object  function array object 引用类型")]),t._v(" "),s("li",[t._v("symbol")])]),t._v(" "),s("h3",{attrs:{id:"_7-var、let、const之间的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-var、let、const之间的区别"}},[t._v("#")]),t._v(" 7-var、let、const之间的区别")]),t._v(" "),s("ol",[s("li",[t._v("var声明变量可以重复声明，而let不可以重复声明")]),t._v(" "),s("li",[t._v("var是不受限于块级的，而let是受限于块级")]),t._v(" "),s("li",[t._v("var会与window相映射（会挂一个属性），而let不与window相映射")]),t._v(" "),s("li",[t._v("var可以在声明的上面访问变量，而let有暂存死区，在声明的上面访问变量会报错")]),t._v(" "),s("li",[t._v("const声明之后必须赋值，否则会报错")]),t._v(" "),s("li",[t._v("const定义不可变的量，改变了就会报错")]),t._v(" "),s("li",[t._v("const和let一样不会与window相映射、支持块级作用域、在声明的上面访问变量会报错")])]),t._v(" "),s("h3",{attrs:{id:"_8-使用箭头函数应注意什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-使用箭头函数应注意什么"}},[t._v("#")]),t._v(" 8-使用箭头函数应注意什么？")]),t._v(" "),s("ol",[s("li",[t._v("用了箭头函数，this就不是指向window，而是父级（指向是可变的）")]),t._v(" "),s("li",[t._v("不能够使用arguments对象")]),t._v(" "),s("li",[t._v("不能用作构造函数，这就是说不能够使用new命令，否则会抛出一个错误")]),t._v(" "),s("li",[t._v("不可以使用yield命令，因此箭头函数不能用作 Generator 函数")])]),t._v(" "),s("h3",{attrs:{id:"_9-object-defineproperty-obj-prop-descriptor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-object-defineproperty-obj-prop-descriptor"}},[t._v("#")]),t._v(" 9-Object.defineProperty (obj,prop,descriptor)")]),t._v(" "),s("h5",{attrs:{id:"接受三个参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#接受三个参数"}},[t._v("#")]),t._v(" 接受三个参数")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v(" obj要定义属性对象\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.")]),t._v(" prop要定义或者修改属性的名称或者Symbol\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.")]),t._v(" descriptor要定义或者修改的属性描述符\n     configurable\n       《当且仅当该属性的 configurable 键值为 "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" 时，该属性的描述符才能够被改变，\n         同时该属性也能从对应的对象上被删除。默认为 "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("。》\n     enumerable\n       《当且仅当该属性的 enumerable 键值为 "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" 时，该属性才会出现在对象的枚举属性中。\n         默认为 "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("。》\n     value\n       《该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。\n         默认为 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v("。》\n     writable\n       《当且仅当该属性的 writable 键值为 "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" 时，属性的值，也就是上面的 value，才能\n         被赋值运算符改变。默认为 "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("。》\n      \n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("input type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//类似 vue的data")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n   *obj      要劫持的对象\n   *name     要劫持对象的属性\n   *callback 劫持以后的操作\n   */")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("watch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name\n    Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineProperty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//返回获取属性值")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" value\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newVal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 触发setter给obj赋值")]),t._v("\n        value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newVal\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//执行劫持后的操作")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomething")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" value\n    document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'input'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" value\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'input'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'input'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'val'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("watch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'val'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" doSomething"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("h3",{attrs:{id:"_10-事件捕获"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10-事件捕获"}},[t._v("#")]),t._v(" 10-事件捕获")]),t._v(" "),s("ol",[s("li",[t._v("事件从最上一级标签开始往下查找，直到捕获到事件目标(target)。")])]),t._v(" "),s("h3",{attrs:{id:"_10-事件冒泡"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10-事件冒泡"}},[t._v("#")]),t._v(" 10-事件冒泡")]),t._v(" "),s("ol",[s("li",[t._v("事件从事件目标(target)开始，往上冒泡直到页面的最上一级标签。")]),t._v(" "),s("li",[t._v("event.stopPropagation()")])]),t._v(" "),s("h2",{attrs:{id:"webpack"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack"}},[t._v("#")]),t._v(" webpack")]),t._v(" "),s("h3",{attrs:{id:"核心模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#核心模块"}},[t._v("#")]),t._v(" 核心模块")]),t._v(" "),s("ol",[s("li",[t._v("入口entry")]),t._v(" "),s("li",[t._v("出口 output")]),t._v(" "),s("li",[t._v("loder")]),t._v(" "),s("li",[t._v("pulgin 插件")]),t._v(" "),s("li",[t._v("mode 模式")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("export"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    publicPath"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'根路径 /name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    outputDir"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dist 打包的时候生成的文件名'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    lintOnSave"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'true/false'")]),t._v("是否开启eslint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("configureWebpack")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);