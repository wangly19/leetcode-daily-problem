# 剑指 Offer II 069. 山峰数组的顶部

符合下列属性的数组 arr 称为 山峰数组（山脉数组） ：

- arr.length >= 3
- 存在 i（0 < i < arr.length - 1）使得：

  - arr[0] < arr[1] < ... arr[i-1] < arr[i]
  - arr[i] > arr[i+1] > ... > arr[arr.length - 1]

给定由整数组成的山峰数组 arr ，返回任何满足 arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1] 的下标 i ，即山峰顶部。

<br>

> 来源：力扣（LeetCode）<br>
> 链接：https://leetcode-cn.com/problems/fizz-buzz<br>
> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。<br>

## 解题思路 (javaScript / typeScript)

从题意来看，貌似我们找到数组中最大的值就可以了。所以，我们尝试一下直接找最大值？

```js
let defaultMaxVal = {
  v: arr[1],
  i: 1,
};
for (let i = 2; i < arr.length - 1; i++) {
  if (arr[i] > defaultMaxVal.v) {
    defaultMaxVal = {
      v: arr[i],
      i: i,
    };
  }
}
return defaultMaxVal.i;
```

直接`run`，貌似确实是这个原理，我们来看看进阶

> 很容易想到时间复杂度 O(n) 的解决方案，你可以设计一个 O(log(n)) 的解决方案吗？

没错，上面的解题思路是 On 的方案，因为它走了一次完整的循环。

进阶约束是将算法的效率提升为 Olog(n)的解法。 看到 O(log(n))时我想经常刷算法的你那么肯定会想到用二分查找法来做这个事情。

1. 首先，我需要将数组划分为两半，声明左右两边划分的变量。

```js
let left = 1;

let right = arr.length - 2;
```

2. 然后我们就可以进行二分进行循环了，在一个数组中找出一个山峰相对的比较容易，首先我们通过`(left + right) / 2`并且向下取整(floor)能够找到当前数组的中心。

```js
/** @name 获取中心index下标 */
const midIndex = Math.floor((left + right) / 2);
```

3. 拿到中心下标后，将其值与它下一个值进行比对，此时看山峰坡度是`/`上峰还是`\`山峰。通过如下代码条件判断，如果当前值大于下一个值那么就是`/`反之则是`\`。`/`表示左侧山峰，`\`表示右侧山峰。

```js
if (arr[midIndex] > arr[midIndex + 1])
```

4. 随后我们根据山峰的不同，来进行二分范围的缩小，如果是`/`峰的话，就需要将`left`定位到我们`minIndex + 1`的位置， 同时进行存档保存，也就是目前已知的山峰顶端。如果是`\`峰，我们就需要将`right`变更为`midIndex - 1`的位置。这样的话我们的区间就缩小了一半的距离。

```js
if (arr[midIndex] > arr[midIndex + 1]) {
  top = midIndex;
  right = midIndex - 1;
} else {
  left = midIndex + 1;
}
```

5. 当`left`和`right`会和时，执行完后我们的二分查找也就结束了，此时`top`就是我们山顶的位置，将其`return`就得到结果了。完整代码如下：

```js
/**
 * @param {number[]} arr
 * @return {number}
 */
 var peakIndexInMountainArray = function(arr) {

  let left = 1
  let right = arr.length - 2
  
  let top = 0

  while(left <= right) {
      /** @name 获取中心index下标 */
      const midIndex = Math.floor((left + right) / 2)
      if (arr[midIndex] > arr[midIndex + 1]) {
        top = midIndex
          right = midIndex - 1
      } else {
          left = midIndex + 1
      }
  }
  return ans;
};
```

> 答案仅供参考。