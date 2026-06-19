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
     * @return {boolean}
     */
    isBalanced(root: TreeNode | null): boolean {
      if (!root) return true;

      return Math.abs(this.heightOfNode(root.left) - this.heightOfNode(root.right)) <= 1 && this.isBalanced(root.left) && this.isBalanced(root.right);
    }

    heightOfNode(node: TreeNode | null): number {
      if (!node) return 0;

      return 1 + Math.max(this.heightOfNode(node.left), this.heightOfNode(node.right));
    }
}
