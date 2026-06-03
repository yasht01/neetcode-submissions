class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        let freqS = {};
        let freqT = {};

        freqS = this.determineFrequencies(s);
        freqT = this.determineFrequencies(t);

        for (let key of Object.keys(freqS)) {
            if (freqS[key] !== freqT[key]) return false;
        }

        return true;
    }

    determineFrequencies(s: string): Record<string, number> {
        let frequencies: Record<string, number> = {};

        for (let character of s) {
            if (frequencies[character]) {
                frequencies[character] += 1;
            } else {
                frequencies[character] = 1;
            }
        }

        return frequencies;
    }
}
