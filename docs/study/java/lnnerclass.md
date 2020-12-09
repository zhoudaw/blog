# innerclass

## 内部类

::: tip

1.  Java 中允许将一个类 A 声明在另一类 B 中，则类 A 就是内部类，类 B 称为外部类
2.  内部类的分类，成员内部类(静态 非静态) vs 局部内部类（方法内，代码块，构造器内）
3.  成员内部类
    ```html
    一方面，作为外部类的成员 >调用外部类的结构 >可以被static修饰
    >可以被4总不同的权限修饰 另一方面，作为一个类
    >类内可以定义属性，方法，构造器等
    >可以被final修饰，表示此类不能被继承。言外之意不能用final，就可以被继承
    >可以被abstract修饰
    ```
4.  关注如下 3 个问题
    `html 4.1 如何实例化成员内部类的对象 4.2 如何在成员内部类中区分调用外部类的结构 4.3 开发中局部内部类的使用`
    :::

## 例子一

```js
 public class InnerClassTest{
     public static void main(String[] args){
         //创建Dog实例（静态的成员内部类:）
        Person.Dog dog=  new Person.Dog();
        dog.show();
        //创建Bird实例（非静态的成员内部类:）
        Person p= new Person();
        Person.Bird bird =p.new Bird();
        bird.sing();
        bird.display("燕子")
     }
 }
 class Person{
     String name;
     int age;
     public void eat(){
         System.out.println("人吃饭")
     }
    //静态成员内部类
    static class Dog{
       String name;
       int age;
       public void show(){
           System.out.println("卡拉是条狗")
            // 非静态的方法，不可以调用  eat();
       }
    } //非静态成员内部类
    class Bird{
      String name;
      public Bird(){
      }
      public void sing(){
          System.out.println("我是一只小小鸟")
          Person.this.eat();
            // eat();
      }
      public void display(String name){
          System.out.println(name); //方法的形参
          System.out.println(this.name); // 内部类的属性
          System.out.println(Person.this.name); // 外部类的属性
      }
    }
     public void method(){
         //局部内部类
         class AA{
         }
     }
     //局部内部类
     {
         class BB{
         }
     }
     public Person(){
        //局部内部类
       class CC{
       }
     }
 }
```
