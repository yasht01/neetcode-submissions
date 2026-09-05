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
     * @return {boolean}
     */
    hasCycle(head: ListNode | null): boolean {
        let tortoise = head;
        let hare = head;

        while (hare !== null && hare.next !== null) {
            tortoise = tortoise.next;
            hare = (hare.next).next;

            if (tortoise === hare) {
                return true;
            }
        }

        return false;
    }
}
