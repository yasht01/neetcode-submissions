class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
      let maxLength = 0;

      const freq: Record<string, number> = {};

      let start = 0, end = 0;

      while (end < s.length) {
        freq[s[end]] = (freq[s[end]] || 0) + 1;

        if (freq[s[end]] && freq[s[end]] > 1) {
          while (freq[s[end]] > 1) {
            freq[s[start]]--;
            start++;
          }
        } else {
          const length = end - start + 1;
          maxLength = Math.max(length, maxLength);
        }

        end++;
      }

      return maxLength;
    }
}
