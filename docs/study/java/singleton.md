# singleton

## 单例设计模式

1. 所谓类的单例设计模式。就是采用一定的方法保存在整个的软件系统中，对某个类只能存在一个对象实例。
2. 如何来实现？如下例子...

## 饿汉式 vs 懒汉式 区分

::: warning

1. 饿汉式：坏处:对象加载时间过长,好处：线程安全的
2. 懒汉式：坏处:线程不安全  好处 ：延迟对象的创建
:::
::: tip
例子思维：

1.  私有化类的构造器让 main 方法进行访问
2.  提供一个公共的静态方法返回类的对象
    :::

## 饿汉式例子:

```js
public class SingletonTest1 {
	public static void main(String[] args) {
		Bank bank1 = Bank.getInstance();
		Bank bank2 = Bank.getInstance();
		System.out.println(bank1==bank2); //true
	}
}
//饿汉式
class Bank {
//	1.私有化类的构造器
	private Bank() {

	}
//	2.内部创建类的对象
//	4.要求此对象也必须声明为静态的
	private static Bank instance = new Bank();
//	3.提供公共的静态方法方法，返回类的对象
	public static Bank getInstance() {
		return instance;
	}
}

```

## 懒汉式例子:

```js
public class SingletonTest2 {
	public static void main(String[] args) {
		Order o1 = Order.getInstance();
		Order o2 = Order.getInstance();
		System.out.println(o1==o2); //true
	}
}
class Order {
//	1.私有化类的构造器
//	2.声明当前类的对象，没有初始化
//	4此对象也必须声明为static的
	private static Order instance = null;

//	3.声明public static的返回当前类对象的方法
	public static Order getInstance() {
		if (instance == null) {
			instance = new Order();
		}
		return instance;

	}
}

```
