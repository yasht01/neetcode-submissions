class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
      const filteredString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

      let start = 0;
      let end = filteredString.length - 1;

      while (start < end) {
        if (filteredString[start] !== filteredString[end]) {
          return false;
        }

        start++;
        end--;
      }

      return true;
    }
}
