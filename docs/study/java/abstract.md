# abstract
::: tip
 1. abstract：抽象的
 2. abstract可以用来修饰的结构：类，方法
 3. abstract修饰类：抽象类
    >1. 此类不能实例化，
    >2. 抽象类中一定有构造器，便于子类实例化时调用（涉及：子类对象实例化的全过程）
    >3. 开发中都会提供抽象类的子类，让子类对象实例化，完全相关操作。
 4. abstract修饰方法：抽象方法
    >1. 抽象方法只有方法的声明，没有方法体  
    >2. 包含抽象方法的类一定是抽象类,反之抽象类中可以没有抽象方法的
    >3. 若子类重写了父类中的所有的抽象方法后，此类方法可实例化
    >4. 若子类没有重写父类中的所有抽象方法，则此子类也是一个抽象类，需要使用abstract修饰
::: 
## 例子一
```js
//abstract 
public class AbstractTest {
 public static void main(String[] args) {
	 //一旦Person类抽象了，就不可实例化
//	 Person  p =new Person();
//	 p.eat();
}
}
abstract class Creature{
	public abstract void breath();
}
abstract class Person extends Creature {
	String name;
	int age;
	public Person() {
	}
	public Person(String name, int age) {
		super();
		this.name = name;
		this.age = age;
	}
    //不是抽象方法
//	public void eat() {
//	  System.out.println("人吃饭");	
//	}
//	抽象方法
	public abstract void eat();
}

//第一种
//abstract class Student extends Person{
//	public Student(String name,int age) {
//		super(name,age);
//	}
//}

//第二种
class  Student extends Person{
	public void eat() {
		System.out.println("學生要多吃營養的實物");
	}
	public void breath() {
        System.out.println("学生应该呼吸新鲜的没有雾霾的空气");
	}	
}


```
## 注意要点
::: danger
1. abstract不能用来修饰：属性，构造器等结构
2. abstract不能用来修饰私有方法, 静态方法 ，final的方法，final的类
:::