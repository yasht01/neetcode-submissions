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
        let it1 = l1, it2 = l2, carry = 0, position = 0;
        let result = 0;

        const resultList = new ListNode();
        let resultIterator = resultList;

        while (it1 !== null || it2 !== null || carry !== 0) {
            let sum = ((it1 !== null) ? it1.val : 0) + ((it2 !== null) ? it2.val : 0) + carry;
            let positionValue = sum % 10;

            carry = Math.floor((sum - positionValue) / 10);

            resultIterator.val = positionValue;

            if (it1 !== null) it1 = it1.next;
            if (it2 !== null) it2 = it2.next;

            if (it1 !== null || it2 !== null || carry !== 0) {
                resultIterator.next = new ListNode();
                resultIterator = resultIterator.next;
            }

            position++;
        }

        return resultList;
    }
}
