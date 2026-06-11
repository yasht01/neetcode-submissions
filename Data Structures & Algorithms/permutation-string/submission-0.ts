class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
      if (s1.length > s2.length) return false;

      let start = 0;
      let end = s1.length;

      const freqS1 = this.calcFreq(s1);

      while (end <= s2.length) {
        const subStringFromS2 = s2.slice(start, end);

        const freqS2 = this.calcFreq(subStringFromS2);

        const isSame = this.isSameFreq(freqS1, freqS2);

        if (isSame) return true;
        start++; end++;
      }

      return false;
    }

    calcFreq(s: string): number[] {
      const freq = Array(26).fill(0);

      for (let i = 0; i < s.length; i++) {
        freq[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
      }

      return freq;
    }

    isSameFreq(freq1: number[], freq2: number[]): boolean {
      for (let i = 0; i < freq1.length; i++) {
        if (freq1[i] !== freq2[i]) return false;
      }

      return true;
    }
}
