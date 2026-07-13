/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
      let prev: ListNode | null = null;
      let next: ListNode | null = null;

      while (head !== null) {  
        next = head.next;   
        head.next = prev;
        prev = head;
        head = next;
      }

      return prev;
    }
}
