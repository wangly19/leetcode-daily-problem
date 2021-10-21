# 208. 实现 Trie (前缀树)

Trie（发音类似 "try"）或者说 前缀树 是一种树形数据结构，用于高效地存储和检索字符串数据集中的键。这一数据结构有相当多的应用情景，例如自动补完和拼写检查。

请你实现 Trie 类：

- Trie() 初始化前缀树对象。
- void insert(String word) 向前缀树中插入字符串 word 。
- boolean search(String word) 如果字符串 word 在前缀树中，返回 true（即，在检索之前已经插入）；否则，返回 false 。
- boolean startsWith(String prefix) 如果之前已经插入的字符串 word 的前缀之一为 prefix ，返回 true ；否则，返回 false 。

> 来源：力扣（LeetCode）<br>
> 链接：https://leetcode-cn.com/problems/implement-trie-prefix-tree<br>
> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。<br>

## 测试用例

```
输入
["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
输出
[null, null, true, false, true, null, true]

解释
Trie trie = new Trie();
trie.insert("apple");
trie.search("apple");   // 返回 True
trie.search("app");     // 返回 False
trie.startsWith("app"); // 返回 True
trie.insert("app");
trie.search("app");     // 返回 True
```

## 实现思路

首先，我们先来说下插入方法，插入方法的作用是将输入的字符串逐个字符绑定到对应的树形节点下面。而我们需要做的就是创建一个树形结构，并在当前结束的位置进行end标记。


### 初始化

首先，我们需要初始化一个🌲。在这里我们用一个js对象作为数据结构，方便我们构建`children`。

```ts
private data: Record<string, any> = {}
```

### 插入(insert)

当我们构建好了`data`后，就可以来实现插入方法吧。实现插入方法分为以下几个步骤：


1. 获取当前`tree节点`，每一次向下查时如果能够匹配到对应的内容就会讲当前node指向更改。

```ts
let nodeHead = this.data
```

2. 遍历字符串，并且完善这条树。找到当前节点时就将`nodeHead`换位，反之给予一个控对象来表示当前并没有内容。

```ts
for (let c of word ) {
          if (!nodeHead[c]) {
              nodeHead[c] = {}
          }
          nodeHead = nodeHead[c]
      }
```

3. 当遍历完成后，我们给予一个`flag`表示当前是一个单词的结束，整体insert方法如下：

```ts

  insert(word: string): void {
      let nodeHead = this.data

      for (let c of word ) {
          if (!nodeHead[c]) {
              nodeHead[c] = {}
          }
          nodeHead = nodeHead[c]
      }

      nodeHead.isEnd = true
  }
```


## 搜索(search)

1. 搜索的话其实相对来说步骤差不多，首先同样的保存节点后，遍历我们的搜索字符串，然后进行节点匹配，一旦发现节点不存在直接返回`null`，如果遍历字符串结束后节点存在，那么将其返回.

```ts
searchContent (str: string) {
      let nodeHead = this.data

      for (let c of str) {
          if (!nodeHead[c]) {
              return null
          }
          nodeHead = nodeHead[c]
      }

      return nodeHead
  }

```

2. 最后我们在`search`方法中对其进行调用，然后判断`result`是否存在，且具有`isEnd`属性。

```ts
search(word: string): boolean {
      const searchResult = this.searchContent(word)
      return searchResult && searchResult.isEnd ? true : false
  }
```

> 解题思路，仅供参考