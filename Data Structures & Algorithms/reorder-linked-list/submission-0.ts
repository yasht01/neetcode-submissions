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
     * @return {void}
     */
    reorderList(head: ListNode | null): void {
        if (!head) return;

        let slow = head;
        let fast = head;

        while (fast.next !== null && fast.next.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let mid = slow;
        let prev = null;
        let ptr = mid.next;

        while (ptr !== null) {
            let next = ptr.next;
            ptr.next = prev;
            prev = ptr;
            ptr = next;
        }

        mid.next = prev;
        let headPtr = head;
        ptr = mid.next;
        mid.next = null;

        while (ptr !== null) {
            let nextStart = headPtr.next;
            let nextMid = ptr.next;
            headPtr.next = ptr;
            ptr.next = nextStart;

            headPtr = nextStart;
            ptr = nextMid;
        }
    }
}
