# thread

::: tip

1. 多线程的创建 方式一：继承与 Thread 类
1. 创建一个继承于 Thread 类的子类
1. 重写 Thread 类的 run() 将此线程执行的操作声明在 run()中
1. 创建 Thread 类的 run 类的子类的对象
1. 通过此对象调用 start()
  :::

#### 例子：遍历 100 以内的所有的偶数

```js
//1.创建一个继承于Thread类的子类
    class MyThread extends Thread{
//         2.重写Thread类的run()
       public  void  run(){
         for (int i=0;i<100;i++){
             if(i % 2 == 0){
                 System.out.println(i);
             }
         }
       }
}
public class ThreadTest {
    public static void main(String[] args) {
//        3.创建Thread类的run类的子类的对象
        MyThread t1=  new MyThread();
        MyThread t2=  new MyThread();
//        4.通过此对象调用start()
//        启动当前线程
//        调用当前线程的run（）
        t1.start();
//        问题一：我们不能通过直接调用run()的方式启动线程
//         t1.run();

//        问题二：再启动一个线程,遍历100以内的偶数，（不可以还让已经start（）的线程去执行 会报 IllegalThreadStateException）//

         //我们需要重新创建一个线程的对象
          t2.start();
        // 如下的操作仍然是在main线程中执行的。
//        for (int i=0;i<100;i++){
//            if(i % 2 == 0){
//                System.out.println(i+"***********main()*********");
//            }
//        }
//        System.out.println("hello");
    }

}

```
#### 练习一
```js
package com.zdw.exer;

/**
 * 练习 创建2个分线程，其中一个线程遍历100以内的偶数，另一个线程遍历100以内的奇数
 */
public class ThreadDemo {
    public static void main(String[] args) {
      //方法一
//        MyThread1 m1=new MyThread1();
//        MyThread2 m2=new MyThread2();
//        m1.start();
//        m2.start();
        //创建 Thread类的匿名子类的方式
         //方法二
         new Thread(){
             @Override
             public void run() {
                 for (int i = 0; i <100 ; i++) {
                     if(i%2==0){
                         System.out.println(i);
                     }
                 }
             }
         }.start();
        new Thread(){
            @Override
            public void run() {
                for (int i = 0; i <100 ; i++) {
                    if(i%2!=0){
                        System.out.println(i);
                    }
                }
            }
        }.start();
    }
}
class MyThread1 extends Thread{
    @Override
    public void run() {
        for (int i = 0; i <100 ; i++) {
            if(i%2==0){
                System.out.println(i);
            }
        }
    }
}
class MyThread2 extends Thread{
    @Override
    public void run() {
        for (int i = 0; i <100 ; i++) {
            if(i%2!=0){
                System.out.println(i);
            }
        }
    }
}

```
#### 线程方法说明
::: tip



 * 测试Thread 中的常用方法
 * 1.start:启动当前线程：调用当前线程的run();
 * 2.run(): 通常需要重写Thread类中的此方法，将创建的线程要执行的操作声明在此方法
 * 3.currenThread(): 静态方法，返回执行当前代码的线程
 * 4.getName():获取当前线程的名字
 * 5.setName():设置当前线程的名字
 * 6.yield(): 释放当前cpu的执行权
 * 7.join():在线程A中调用线程B的join()方法，此时线程A就进入阻塞状态，直到线程B完全执行完以后，线程A才结束阻塞状态。
 * 8.stop():已过时，当执行此方法时，强制结束当前线程。
 * 9.sleep(long millitime); 让当前线程“睡眠”指定的millitime毫秒，在自指定的millitime毫秒时间内，当前线程是阻塞的状态
 * 10.isAlive():判断当前线程是否还存活
 * 线程的优先级：
 * MAX_PRIORITY:10
 * MIN_PRIORITY:1
 * NORM_PRIORITY:5
 * 如何获取和设置当前线程的优先级：
 * getPriority() 获取
 * setPriority(int p) 设置
 * 说明:高优先级的线程要抢占低优先级cpu的执行权，但是只是从概率上讲。高优先级的线程高概率的情况下呗执行.并不意味着只有当高优先级的线程执行完以后，低优先级的才执行

:::
```js


class  HelloThread extends Thread{
    @Override
    public void run() {
        for (int i=0;i<100;i++){
            if(i % 2 == 0){
                try {
                    sleep(10);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                System.out.println(Thread.currentThread().getName()+":"+Thread.currentThread().getPriority()+":"+i);
            }
//            if(i%20==0){
//                yield();
//            }
        }
    }
    public  HelloThread(String name){
        super(name);
    }

}
public class ThreadMethodTest {
    public static void main(String[] args) {
        HelloThread H=new HelloThread("分线程");
//        H.setName("线程一");
        //设置分线程的优先级
        H.setPriority(Thread.MAX_PRIORITY);
        H.start();
//        给主线程命名
        Thread.currentThread().setName("主线程");
        Thread.currentThread().setPriority(Thread.MIN_PRIORITY);
        for (int i=0;i<100;i++){
            if(i % 2 == 0){
                System.out.println(Thread.currentThread().getName()+":"+Thread.currentThread().getPriority()+":"+i);
            }
//            if(i==20){
//                try {
//                    H.join();
//                } catch (InterruptedException e) {
//                    e.printStackTrace();
//                }
//            }
        }
        System.out.println(H.isAlive());
    }
}


```

## 例子二 
```js
//创建3个窗口买票 总数为100张
class Window extends Thread{
    private static int ticket =100;
    @Override
    public void run() {
       while (true){
           if(ticket>0){
               System.out.println(getName()+":卖票,票号为："+ticket);
               ticket--;
           }else{
               break;
           }
       }
    }
}
public class WindowTest {
    public static void main(String[] args) {
        Window w1=new Window();
        Window w2=new Window();
        Window w3=new Window();
        w1.setName("窗口一");
        w2.setName("窗口二");
        w3.setName("窗口三");
        w1.start();
        w2.start();
        w3.start();
    }
}
```
## 例子三 
```js
//创建3个窗口买票 总数为100张,使用显示Runnable接口的方式
class Window1 implements Runnable {
    private int ticket = 100;
    @Override
    public void run() {
        while (true) {
            if (ticket > 0) {
                System.out.println(Thread.currentThread().getName() + "：卖票，票号为:" + ticket);
                ticket--;
            } else {
                break;
            }
        }
    }
}
public class WindowTest1 {
    public static void main(String[] args) {
        Window1 win = new Window1();
        Thread t1 = new Thread(win);
        Thread t2 = new Thread(win);
        Thread t3 = new Thread(win);
        t1.setName("窗口1");
        t2.setName("窗口2");
        t3.setName("窗口3");
        t1.start();
        t2.start();
        t3.start();
    }
}

```
## Runnable 
::: tip


 * 创建多线程的方式二：实现Runnable接口
 * 1.创建一个实现Runnable接口的类
 * 2.实现类去实现Runnable中的抽象方法run()
 * 3.创建实现的对象
 * 4.将此对象作为参数传递到Thread类的构造器中，创建Thread类的对象中
 * 5.通过Thread类的对象调用start()
 

:::
```js
//多线程 一个类下的多个构造器
//1.创建一个实现Runnable接口的类
class MTHread implements Runnable {
    //   2.实现类去实现Runnable中的抽象方法run()
    @Override
    public void run() {
        for (int i = 0; i < 100; i++) {
            if (i % 2 == 0) {
                System.out.println(Thread.currentThread().getName() + ":" + i);
            }
        }
    }
}

public class ThreadTest1 {
    //    3.创建实现的对象
    public static void main(String[] args) {
////    3.创建实现的对象
        MTHread m = new MTHread();
////    4.将此对象作为参数传递到Thread类的构造器中，创建Thread类的对象中
        Thread t = new Thread(m);
        t.setName("线程一");
////    5.通过Thread类的对象调用start()
        t.start();
        Thread t1 = new Thread(m);
        t1.setName("线程二");
        t1.start();
    }
}
```

## 同步方法
```js
class Window3 implements Runnable {
    private int ticket = 100;
    @Override
    public void run() {
        while (true) {
            show();
        }
    }
    private synchronized void show() { //同步监视器 ：this
//        synchronized (this) {
            if (ticket > 0) {
                try {
                    Thread.sleep(100);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                System.out.println(Thread.currentThread().getName() + "：卖票，票号为:" + ticket);
                ticket--;
//            }
        }
    }
}

public class WindowTest3 {
    public static void main(String[] args) {
        Window3 wo = new Window3();
        Thread wd1 = new Thread(wo);
        Thread wd2 = new Thread(wo);
        Thread wd3 = new Thread(wo);
        wd1.setName("窗口1");
        wd2.setName("窗口2");
        wd3.setName("窗口3");
        wd1.start();
        wd2.start();
        wd3.start();
    }
}

```
## 方法 同步 Thread
```js

/**
 * 使用同步方法处理继承Thread类的方式中的线程安全问题
 */
class Window4 extends Thread {
    private static int ticket = 100;
    @Override
    public void run() {
        while (true) {
            show();
        }
    }

    private static synchronized void show() { //同步监视器：Window4.class
        if (ticket > 0) {
            try {
                Thread.sleep(100);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println(Thread.currentThread().getName() + "：卖票，票号为:" + ticket);
            ticket--;
        }
    }
}

public class WindowTest4 {
    public static void main(String[] args) {
        Window4 wd1 = new Window4();
        Window4 wd2 = new Window4();
        Window4 wd3 = new Window4();
        wd1.setName("窗口1");
        wd2.setName("窗口2");
        wd3.setName("窗口3");
        wd1.start();
        wd2.start();
        wd3.start();
    }
}

```