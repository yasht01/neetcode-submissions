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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode {
        let it1 = l1, it2 = l2, carry = 0;

        const resultList = new ListNode();
        let resultIterator = resultList;

        while (it1 !== null || it2 !== null || carry !== 0) {
            let sum = (it1?.val ?? 0) + (it2?.val ?? 0) + carry;
            carry = Math.floor(sum / 10);

            resultIterator.next = new ListNode(sum % 10);
            resultIterator = resultIterator.next;

            it1 = it1?.next ?? null;
            it2 = it2?.next ?? null;
        }

        return resultList.next;
    }
}
