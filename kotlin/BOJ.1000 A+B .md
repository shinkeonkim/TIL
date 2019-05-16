# 코틀린을 배워보자.

자바나 코틀린에 대해서 공부해본 적이 없다.

[https://www.acmicpc.net/blog/view/71](https://www.acmicpc.net/blog/view/71) 다음 링크의 백준 블로그 글을 보고
코틀린에 대해 관심을 가지게 됬다.
오늘은 코틀린으로 2대의 숫자 A,B를 더하고 A+B를 출력하는 코드를 통해 코틀린의 입출력을 알아봤다.
뭔가 여러 다른 방법이 있을 것 같아서 더 깊게 공부해봐야 겠다.

```
import java.util.*

fun main(args: Array<String>) = with(Scanner(System.`in`)) {
    println(nextInt() + nextInt())
}
```
