# 229. 求众数 II

给定一个大小为 n 的整数数组，找出其中所有出现超过 ⌊ n/3 ⌋ 次的元素。

## 解题思路

对于此类问题，我第一个想到的就是通过`hashMap`计数的方式，通常是能想到最快的一个解法。 但是效率上并不是很可观，属于普遍解题思路。

1. 需要遍历当前`nums`，然后将其记录在`hashMap`中，key 是当前值，value 是当前出现的次数。

```ts
const hashMap = new Map<number, number>();

for (let i: number = 0; i < nums.length; i++) {
  if (hashMap.has(nums[i])) {
    hashMap.set(nums[i], hashMap.get(nums[i]) + 1);
  } else {
    hashMap.set(nums[i], 1);
  }
}
```

2. 遍历`hashMap`，找出当前计数中满足`n / 3`的 key 值。此时，这些满足的值就是当前数组中的众数。

```ts
const res: number[] = [];

hashMap.forEach((value, key) => {
  if (value > nums.length / 3) {
    res.push(key);
  }
});

return res;
```

> 解题思路仅供参考