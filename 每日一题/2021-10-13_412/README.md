# 412. Fizz Buzz

给你一个整数 n ，找出从 1 到 n 各个整数的 Fizz Buzz 表示，并用字符串数组 answer（下标从 1 开始）返回结果，其中：

- answer[i] == "FizzBuzz" 如果 i 同时是 3 和 5 的倍数。
- [i] == "Fizz" 如果 i 是 3 的倍数。
- answer[i] == "Buzz" 如果 i 是 5 的倍数。
- answer[i] == i 如果上述条件全不满足。

> 来源：力扣（LeetCode）<br>
> 链接：https://leetcode-cn.com/problems/fizz-buzz<br>
> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。<br>



## 解题思路

下面是关于这道题的一些解决分析和思考。


根据题意，从1到n的整数，那么假设n为4，我们需要判断的数字就是`[1, 2, 3, 4]`，而其中`3`很明显符合我们`3或者5的倍数`，因此结果集就为`['1', '2', 'Fizz', '4']`。

1. 既然为1 ～ n，那么我们会有一个简单的循环

```js
function fizzBuzz(n) {

  let i = 1
  while (i <= n) {
      i++
  }
};
```

2. 当有了循环后，我们需要对每一次循环值做一个判断，判断它是否是3的倍数或者5的倍数。同时它又有可能既是3的倍数又是5的倍数。如下，我定义了一个`str`，下面就是对3和5取模，如果符合就会进行一个字符串拼凑。这样的话就可以得出我们当前项中的`str`需要`push`哪个值。

```js

let str = ''
if (i % 3 === 0) {
  str += 'Fizz'
}
if (i % 5 === 0) {
  str += 'Buzz'
}

```

3. 既然处理好了倍数，那么就需要来处理结果了。首先，我们定义了一个`result`来存储结果集。然后判断当前`str`是否存在？如果存在就使用`str`，不存在就需要将当前数字`push`进去，由于结果要求字符串因此我们可以利用隐式转换直接使用`str + 当前数字(i)`进行转换。最后进行`result.push`。

```js
const result = []

result.push(str || str + i)
```

4. 完全体的代码如下：

```js
function fizzBuzz(n) {
  const result = []

  let i = 1
  while (i <= n) {
      let str = ''
      if (i % 3 === 0) {
          str += 'Fizz'
      }
      if (i % 5 === 0) {
          str += 'Buzz'
      }
      result.push(str || str + i)
      i++
  }

  return result
};
```

> 解题目思路不是唯一，只是个人看法。