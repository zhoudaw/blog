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

#### ClassNotFountException 例子

```js
public class ExceptionTest{
    public void test(){
			Object obj=new Date();
			String str = (Object)obj; //ClassNotFountException
		}
}
```

#### NumberFormatException 例子

```js
public class ExceptionTest{
    public void test(){
			String str ="123"
			str="abc"
		  int num = Integer.parseInt(str); //NumberFormatException
		}
}
```

#### InputMismatchException 例子

```js
public class ExceptionTest{
    public void test(){
			Scanner scanner = new Scanner(System.in);
			int score=scanner.nextInt();
		  System.out.println(score); //InputMismatchException
		}
}
```

#### ArithmeticException 例子

```js
public class ExceptionTest{
    public void test(){
			int a=10;
			int b=0;
		  System.out.println(a/b); //ArithmeticException
		}
}
```
