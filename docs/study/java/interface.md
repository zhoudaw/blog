# interface
## 接口的使用
1. 接口使用interface来定义
2. Java中，接口和类是并列的两个结构
3. 如何来定义接口：定义接口中的成员
```html
 3.1 JDK7以前：只能定义全局常量和抽象方法
      >全局常量：public static final的  (但是书写的时候可以省略不写)
      >抽象方法：public abstract的
 3.2 JDK8:除了定义全局常量和方法之外 还可以定义静态方法 默认方法
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
## 代理模式例子三
```js
public class NetWorkTest {
	public static void main(String[] args) {
		Server s = new Server();
		ProxyServer p = new ProxyServer(s);
		p.browse();
	}
}
interface NetWork {
	public void browse();
}
//被代理类
class Server implements NetWork {
	@Override
	public void browse() {
		System.out.println("真实的服务器访问网络");
	}
}
//代理类
class ProxyServer implements NetWork {
	private NetWork work;
	public ProxyServer(NetWork work) {
		this.work = work;
	}
	public void check() {
		System.out.println("联网之前的检查工作");
	}
	@Override
	public void browse() {
		check();
		work.browse();
	}
}
```

## 比较圆的大小例子
``` js
 public interface CompareObject {
	public int compareTo(Object o);
}

```
``` js
public class Circle {
	private double radius;

	public Circle(double radius) {
		super();
		this.radius = radius;
	}

	public Circle() {
		super();
	}

	public double getRadius() {
		return radius;
	}

	public void setRadius(double radius) {
		this.radius = radius;
	}
	
  
}
```
``` js
 public class ComparableCircle extends Circle implements CompareObject {
    public ComparableCircle(double radius) {
    	super(radius);
    }
	@Override
	public int compareTo(Object o) {
	     if( this == o) {
	    	 return 0;
	     }
	     if(o instanceof ComparableCircle) {
	    	 ComparableCircle c=(ComparableCircle)o;
//	    	 錯誤
//	    	 return (int)( this.getRadius() -c.getRadius());
	    	 if(this.getRadius()>c.getRadius()) {
	    		 return 1;
	    	 }else if(this.getRadius()<c.getRadius()) {
	    		 return -1;
	    	 }else {
	    		 return 0;
	    	 }
	     }else {
	    	 return 0;
	     }
	}
}

```
``` js
public class ComparableCircleTest {
	public static void main(String[] args) {
		ComparableCircle c1 =new ComparableCircle(3.4);
		ComparableCircle c2 =new ComparableCircle(3.6);
        int cvalue=  c1.compareTo(c2);
        if(cvalue>0) {
        	System.out.println("c1對象大");
        }else if(cvalue <0) {
        	System.out.println("c2對象大");
        }else {
        	System.out.println("c1 c2 一樣大");
        }
	}
}
```
## interface.JDK8新特性
1. 除了定义全局常量和方法之外 还可以定义静态方法 默认方法

```js
public interface CompareA{
    //静态方法
    public static void method1(){
       sysout.out.println("CompareA:北京")
    }
    //默认方法
    public default void method2(){
           sysout.out.println("CompareA:上海")
    }
    default void method3(){
            sysout.out.println("CompareA:上海")
    }
}
public interface CompareB{
     default void method3(){
            sysout.out.println("CompareB:上海")
    }
}

1. 子类
public class SubClassTest{
    public static void main(String[] args){
        SubClass s= new SubClass();
        //错误的
        // s.method1()
        // SubClass.menthod1()
        // 知识点1：接口中定义的静态方法，只能通过接口来调用
        CompareA.menthod1();
        //知识点2：通过实现类的对象，可以调用接口中的默认方法
        //如果实现类重写了接口的默认方法，调用时，仍然调用的是重写以后的方法
        s.method2();   //SubClass:上海
        //知识点3.如果子类（或者实现类）继承的是父类和实现类的接口中声明了的同名同参数的方法
        //那么子类在没有重写此方法的情况下 默认调用的是父类中的同名参数的方法--》类优先原则

        //知识点4
        s.method3();    //SuperClass:北京
    }
}
//如果同时实现2个接口会报错 不知道是调用谁的method3()方法 需要重写
class SubClass extends SuperClass implements CompareA ,CompareB{
    public void method2(){
           sysout.out.println("SubClass:上海")
    }
       public void method3(){
           sysout.out.println("SubClass:厦门")
    }
    //知识点5：如何在子类（或者实现类）的方法中调动父类，接口中被重写的方法
    public void myMehtohd(){
        method3(); //调用自己定义的重写方法
        super.method3()//调用的是父类中声明的
        //调用接口中默认的方法
        CompareA.super.method3();
        CompareB.super.method3();
    }
}
2. 父类
public class SuperClass{
     public void method3(){
         sysout.out.println("SuperClass:北京")
     }
}
```