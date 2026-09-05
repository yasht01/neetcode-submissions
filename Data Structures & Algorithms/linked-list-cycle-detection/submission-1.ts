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
        const hashSet = new Set<ListNode>();

        let itr = head;

        while (itr != null) {
            if (hashSet.has(itr)) {
                return true;
            } else {
                hashSet.add(itr);
            }

            itr = itr.next;
        }

        return false;
    }
}
