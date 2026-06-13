class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
      const freq = new Array(26).fill(0);
      let longest = 0;

      let start = 0, end = 0;

      while (end < s.length) {
        const endIndex = s[end].charCodeAt(0) - 'A'.charCodeAt(0);
        freq[endIndex] = (freq[endIndex] || 0) + 1;

        const windowLength = end - start + 1;
        let maxFreq = 0;

        for (let i = 0; i < freq.length; i++) {
          maxFreq = Math.max(maxFreq, freq[i]);
        }

        if (windowLength - maxFreq <= k) {
          longest = Math.max(longest, windowLength);
        } else {
          const startIndex = s[start].charCodeAt(0) - 'A'.charCodeAt(0);
          freq[startIndex]--;
          start++;
        }

        end++;
      }

      return longest;
    }
}
