# abnormal

<!-- ::: tip 1. Exception
     一异常体系结构
     |------java.lang.Error:一般编写针对的代码进行处理
     |------java.lang.Exception:可以进行异常的处理
     |------编译时异常(checked)
     |-------IOException
        |--------FileNotFoundException
        |-------ClassNotFountException
            |------运行时异常(unchecked)
        |-------NullPoionterException
        |-------ArrayIndexOutOfBoundsException
        |-------ClassCastException
        |-------NumberFormatException
        |-------InputMismatchException
        |-------ArithmeticException
        |-------IndexOutOfBoundsException

::: -->

## 以下是运行时异常

#### NullPoionterException 例子:

```js
public class ExceptionTest{
    public void test(){
        int[] arr =null;
        System.out.println(arr[3]);//NullPoionterException
        String str ="abc";
        str=null;
        System.out.println(str.charAt[0]);//NullPoionterException
    }
}
```

#### ArrayIndexOutOfBoundsException 例子:

```js
public class ExceptionTest{
    public void test(){
			int[] arr= new int[10];
			System.out.println(arr[10]);//ArrayIndexOutOfBoundsException
		}
}
```

#### IndexOutOfBoundsException 例子：

```js
public class ExceptionTest{
    public void test(){
			String str='abc';
			System.out.println(str.charAt[3]);//IndexOutOfBoundsException
		}
}
```

#### ClassNotFountException 例子:

```js
public class ExceptionTest{
    public void test(){
			Object obj=new Date();
			String str = (Object)obj; //ClassNotFountException
		}
}
```

#### NumberFormatException 例子:

```js
public class ExceptionTest{
    public void test(){
			String str ="123"
			str="abc"
		  int num = Integer.parseInt(str); //NumberFormatException
		}
}
```

#### InputMismatchException 例子:

```js
public class ExceptionTest{
    public void test(){
			Scanner scanner = new Scanner(System.in);
			int score=scanner.nextInt();
		  System.out.println(score); //InputMismatchException
		}
}
```

#### ArithmeticException 例子:

```js
public class ExceptionTest{
    public void test(){
			int a=10;
			int b=0;
		  System.out.println(a/b); //ArithmeticException
		}
}
```

## Java 异常处理方式：

::: tip

1. 方式一：try-cathch-finally
2. 方法二：throws + 异常类型
   :::

```js
try{
 //可能出现异常的代码
}catch(异常类型1 变量名1){
//处理异常的方式
}catch(异常类型2 变量名2){
   //处理异常的方式
}catch(异常类型2 变量名2){
   //处理异常的方式
}
// ...
finally{
    //一定会执行的代码
}
// 说明
```

```html
1. 常用的异常对象处理的方式： >String getMessage(); >printStackTrace();
```

## 例子一

```js
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

public class ExceptionTest {
	public static void main(String[] args) {
		ExceptionTest E = new ExceptionTest();
//		E.test1();
		E.test2();
	}

	public void test1() {
		String str = "123";
		str = "abc";
		int num = 0;
		try {
			num = Integer.parseInt(str);
			System.out.println("hello---1");
		} catch (NumberFormatException e) {
			System.out.println("出现数值转换异常了，不要着急....");
			System.out.println(e.getMessage());
			e.printStackTrace();
		} catch (NullPointerException e) {
			System.out.println("空指针异常....");
		}
		System.out.println("hello---2");

		System.out.println(num);
	}

	public void test2() {
		try {
			File file = new File("hello.txt");
			FileInputStream fis = new FileInputStream(file);
			int data = fis.read();
			while (data != -1) {
				System.out.println((char) data);
				data = fis.read();
			}
			fis.close();
		} catch (FileNotFoundException e) {
			e.printStackTrace();

		} catch (IOException e) {
			e.printStackTrace();
		}
	}

}

```

