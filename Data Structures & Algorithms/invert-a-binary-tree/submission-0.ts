/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root: TreeNode | null): TreeNode {
      if (root === null) return root;
      if (root.left === null && root.right === null) return root;
      const tempRight = this.invertTree(root.right);
      const tempLeft = this.invertTree(root.left);

      root.left = tempRight;
      root.right = tempLeft;

      return root;
    }
}
