# interface
## 接口的使用
1. 接口使用interface来定义
2. Java中，接口和类是并列的两个结构
3. 如何来定义接口：定义接口中的成员
```html
 3.1 JDK7以前：只能定义全局常量和抽象方法
      >全局常量：public static final的  (但是书写的时候可以省略不写)
      >抽象方法：public abstract的
 3.2 除了定义全局常量和方法之外 还可以定义静态方法 默认方法
``` 
4. 接口中不能定义构造器！意味着接口不可以实例化
5. Java开发中,接口通过类去实现（implements）方式来使用
```html
 5.1 如果实现类覆盖了接口中的所有抽象方法，则此实现类就可以实例化
 5.2 如果实现类没有覆盖接口中所有的抽象方法，则此实现方法任为抽象类
```
6. Java类可以多实现多个接口----》Java单继承性的局限性
```html
 6.1格式： class AA extends BB implements CC,DD,EE 
``` 
7. 接口与接口之间可以继承，而且可以多继承
8. 接口具体的使用体现多态性
9. 接口实际上可以看做一种规范
## 例子一    
```js
public class InterfaceTest {
	public static void main(String[] args) {
		System.out.println(Flyable.MAX_SPEED);
		System.out.println(Flyable.MIN_SPEED);
		Plane p = new Plane();
		p.fly();
		p.stop();
	}
}
interface Attackable {
	void attack();
}
interface Flyable {
	// 全局常量
	public static final int MAX_SPEED = 7900;
	int MIN_SPEED = 1; // 省略了 public static final
	// 抽象方法
	public abstract void fly();
	// 省略了 public abstract
	void stop();
}
class Plane implements Flyable {
	@Override
	public void fly() {
		System.out.println("通过引擎起飞");
	}
	@Override
	public void stop() {
		System.out.println("驾驶员减速停止");
	}
}
abstract class Kite implements Flyable {
	public void fly() {
		System.out.println("通过引擎起飞");
	}
}
class Bullet extends Object implements Flyable, Attackable, CC {
	@Override
	public void attack() {
		// TODO Auto-generated method stub
	}
	@Override
	public void fly() {
		// TODO Auto-generated method stub
	}
	@Override
	public void stop() {
		// TODO Auto-generated method stub
	}
	@Override
	public void method1() {
		// TODO Auto-generated method stub
	}
	@Override
	public void method2() {
		// TODO Auto-generated method stub
	}
}
interface AA {
	void method1();
}
interface BB {
	void method2();
}
interface CC extends AA, BB {
}
```

## 接口使用例子二
```js
1. 接口体现多态性
2. 接口实际上就是定义一种规范
3. 开发中，体会面向接口编程!
public class USBTest {
	public static void main(String[] args) {
		Computer com = new Computer();
		Flashs f = new Flashs();
		com.transferData(f);
	}
}
class Computer {
	public void transferData(USB usb) { // USB usb =new Flashs();
		usb.start();
		System.out.println("具体传输数据的细节");
		usb.stop();
	}
}
interface USB {
	//常量：定义了长 宽，最大最小传输速度等
	void start();
	void stop();
}
class Flashs implements USB {
	@Override
	public void start() {
		System.out.println("U盘开始工作");
	}
	@Override
	public void stop() {
		System.out.println("U盘结束工作");
	}
}
class Printer implements USB {
	@Override
	public void start() {
		System.out.println("打印机开始工作");
	}
	@Override
	public void stop() {
		System.out.println("打印机结束工作");
	}
}
```