# 230. 二叉搜索树中第 K 小的元素

给定一个二叉搜索树的根节点 root ，和一个整数 k ，请你设计一个算法查找其中第 k 个最小元素（从 1 开始计数）。

1. 输入：root = [3,1,4,null,2], k = 1 输出：1
2. 输入：root = [5,3,6,2,4,null,null,1], k = 3 输出：3

## 解题思路

今天这道题相对来说比较简单，目的就是找出一个二叉搜索树中第 K 小的值。

其实就是一个遍历 BST 树的题目，只要我们掌握前/中/后序遍历的知识，

相信难不倒各位。下面就来说下我的解题思路吧！

### 暴力解法

第一个就能想到的暴力解法，我们都知道中序遍历二叉树最后的结果一定是有序的。那么我们遍历后将其结果保存到一个数组，然后返回 `k - 1` 下的下标就可以了。

如下代码：

```ts
function kthSmallest(root: TreeNode | null, k: number): number {
  let v: number[] = [];

  const findTree = (node) => {
    if (node) {
      findTree(node.left);
      v.push(node.val);
      findTree(node.right);
    }
  };

  findTree(root);

  return v[k - 1];
}
```

通过一次遍历，我们  就可以得到一个正序的数组`v: number[]`，而结果就是我们第`k个`值，所以最后返回`v[k - 1]`，题目的 k 是从 1 开始，而数组的  下标则是从 0 开始的。

### 优化

上面的解法虽然解决了问题，但是很明显并不能算是一个高效的结果。我们还需要对其进行优化，来改善当前的效率。

首先，我们上面的解法将一颗树直接 push 到了`v :number[]`当中，但是我们知道只需要在递归到第 k 次的时候就可以拿到结果了。因此：

1. 我在递归函数中新增了一个条件 ` k > 0`， 如果不满足的话我们就不需要去递归了，因为我们的值已经找到了，之前提到过题目的 k 是从 1 开始的，因此我们可以判断`--k` 是不是为 0，如果为 0 说明当前值就是我们的解。

```ts
if (node && k > 0) {
  findTree(node.left);
  if (--k === 0) {
    v = node.val;
  }
  findTree(node.right);
}
```

2. 最后，我们`返回v`就是当前的值。完整代码如下：

```ts
function kthSmallest(root: TreeNode | null, k: number): number {
    let v: number

    const findTree = (node) => {
            if (node && k > 0) {
                findTree(node.left)
                if (--k === 0 ) {
                    v = node.val
                }
                findTree(node.right)
            }
    }

    findTree(root)

    return v

};
```

> 解题思路仅供参考