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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head: ListNode | null, n: number): ListNode {
        if (!head) return head;

        let length = 1;
        let ptr = head;

        while (ptr.next !== null) {
            length++;
            ptr = ptr.next;
        }

        if (n === length) return head.next;
        
        let indexToBeRemoved = length - n;
        ptr = head;
        
        for (let i = 0; i < length - 1; i++) {
            if (i + 1 == indexToBeRemoved) {
                ptr.next = ptr.next.next;
                break;
            }
            ptr = ptr.next;
        }

        return head;
    }
}
