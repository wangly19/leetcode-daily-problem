class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function kthSmallest(root: TreeNode | null, k: number): number {
  let v: number;

  const findTree = (node) => {
    if (node && k > 0) {
      findTree(node.left);
      if (--k === 0) {
        v = node.val;
      }
      findTree(node.right);
    }
  };

  findTree(root);

  return v;
}
