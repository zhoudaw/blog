# static

#### .某些特定的数据在内存空间里只有一份 （共享的 共用）

## 静态变量

::: tip
static 关键字用来声明独立于对象的静态变量，无论一个类实例化多少对象，它的静态变量只有一份拷贝。 静态变量也被称为类变量。局部变量不能被声明为 static 变量。
:::

## 静态方法

::: tip
static 关键字用来声明独立于对象的静态方法。静态方法不能使用类的非静态变量。静态方法从参数列表得到数据，然后计算这些数据。
:::

## 说明以及使用

1. static：静态的
2. static 可以用来修饰：属性、方法、代码块、内部类
3. 使用 static 修饰属性：静态变量（或者类变量）
   ::: tip
   　属性，按是否使用 static 修饰，又分为：静态属性 vs 非静态属性（实例变量）
   实例变量：我们创建了类的多个对象，每个对象都独立的拥有一套类中非静态属性.当修改其中一个对象中的非今天属性时,不会导致其他对象中同样的属性值的修改。
   静态变量：我们创建了类的多个对象，多个对象共享一个静态变量。当通过某一个对象修改静态变量时，会导致其他对象调用次静态变量时，是修改过的。
   static 修饰属性的其他说明:
   ！静态变量随着类的加载而加载。可以通过‘类.静态变量’的方式进行调用
   ！静态变量的加载要早于对象的创建
   ！由于类只会加载一次，则静态变量在内存中也只存一份：存在方法区的静态域中。
   :::

#### 例子:

```js{11}
public class StaticTest {
    public static void main(String[] args) {
        Chinese.nation="中国";
		Chinese c1=new Chinese();
		c1.name ="姚明";
		c1.age =40;
		Chinese c2=new Chinese();
		c2.name ="马龙";
		c2.age =30;
		c1.nation="CNN";
		c2.nation="BNN";
		System.out.println(c1.nation); // 是BNN获取的值是修改过的
	}
}
class Chinese{
	String name;
	int age;
	static String nation;
}
```

4. 使用 static 修饰方法：静态方法
   ::: tip 1.随着类的加载而加载，可以通过，‘类.静态方法’的方式进行调用 2.静态方法中只能调用静态的方法或属性
   非静态的方法中，既可以调用非静态的方法或属性，也可以调用静态的方法或者属性
   :::
5. static 注意点：
   ::: warning
   在静态的方法内，不能使用 this 关键字，super 关键字
   关于静态属性和静态方法的使用,大家都是从生命周期的角度去理解使用
   :::

#### 例子:

```js {13,21,22,24,25}
public class StaticTest {
    public static void main(String[] args) {
    	Chinese.nation="中国";
		Chinese c1=new Chinese();
		c1.name ="姚明";
		c1.age =40;
		Chinese c2=new Chinese();
		c2.name ="马龙";
		c2.age =30;
		c1.nation="zdw";
		c2.nation="hahaha";
		System.out.println(c1.nation);
		Chinese.show();
	}
}
class Chinese{
	String name;
	int age;
	static String nation;
	public static void show() {
        System.out.println(this.nation);  //错误
		System.out.println(nation);  //=Chinese.nation
		System.out.println("我是一个中国人");
        this.walk(); //错误
        walk();  //= Chinese.walk()
	}
	public static void walk() {

	}
}
```

6.在开发中，如果确定一个属性是否要声明为 static 的？
::: tip 
1. 属性是可以被多个对象所共享，不会随着对象的不同而不同的。
2. 类中的常量也常常声明为 static
:::

7.在开发中，如何确定一个方法是父要声明为 static 的？
::: tip 
1. 操作静态属性的方法，通常设置为 static 的 
2. 工具类的方法，习惯上声明为 static 比如：Math Arrays Collections
:::

#### 圆例子：

```js
public class CircleTest {
	public static void main(String[] args) {
		Circle c1 = new Circle();
		Circle c2 = new Circle();
		Circle c3 = new Circle(3.1);
		System.out.println("c1的id：" + c1.getId());
		System.out.println("c1的id：" + c2.getId());
		System.out.println("c1的id：" + c3.getId());
		System.out.println("创建圆的个数为：" + Circle.getTotal());
		System.out.println("创建圆的面积："+c3.findArea());
	}
}
class Circle {
	private double radius; //
	private int id;  //圆id
	private static int total; // 创建圆的个数
	private static int init = 1001; // static 声明的属性被所有对象所共享
	public static int getTotal() {
		return total;
	}
	public Circle() {
		id = init++;
		total++;
	}
	public Circle(double radius) {
		this();
		this.radius=radius;
	}
	public double getRadius() {
		return radius;
	}
	public void setRadius(double radius) {
		this.radius = radius;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public double findArea() {
		return 3.14 * radius * radius;
	}
}
```

::: tip
练习题：
编写一个类实现银行账户的概念，包含属性有‘账号’、‘密码’、‘存款余额’、‘利率’、‘最小余额’，定义封装则和谐属性的方法。账户要自动生成
编写主类：使用樱花账户类，输入，输入 3 给储户的上述信息。考虑：哪些属性可以设计成 static?
:::
``` js
public class AccountTest {
	public static void main(String[] args) {
		Account c1 = new Account();
		Account c2 = new Account("123456", 1000);
		Account c3 = new Account("qwerrt",14550);
		Account.setIninterestRate(0.012);
		Account.setMinMoney(100);
		System.out.println(c1);
		System.out.println(c2);
		System.out.println(c3);
		System.out.println("银行利率："+c1.getIninterestRate());
		System.out.println("银行最低余额是："+c1.getMinMoney()+"元");
	}
}


public class Account {
	private int id; //用户id 标识
	private String pwd = "00000"; //密码
	private double balance; // 余额
	private static double ininterestRate; //利率
	private static double minMoney = 1.0; //最小余额
	private static int init = 1001; // 用于自动生成

	public Account() {
		id = init++;
	}

	public Account(String pwd, double balance) {
		id = init++;
		this.pwd=pwd;
		this.balance=balance;
	}

	public String getPwd() {
		return pwd;
	}

	public void setPwd(String pwd) {
		this.pwd = pwd;
	}

	public static double getIninterestRate() {
		return ininterestRate;
	}

	public static void setIninterestRate(double ininterestRate) {
		Account.ininterestRate = ininterestRate;
	}

	public static double getMinMoney() {
		return minMoney;
	}

	public static void setMinMoney(double minMoney) {
		Account.minMoney = minMoney;
	}

	public int getId() {
		return id;
	}

	public double getBalance() {
		return balance;
	}

	@Override
	public String toString() {
		return "Account [id=" + id + ", pwd=" + pwd + ", balance=" + balance + "]";
	}
}

```
