class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
      let freqMaps: Record<string, string[]> = {};

      for (let str of strs) {
        let frequencyString = this.determineFrequencyString(str);
        
        if (freqMaps[frequencyString]) {
          freqMaps[frequencyString].push(str);
        } else {
          freqMaps[frequencyString] = [str];
        }
      }

      let result = [];

      for (let [key, value] of Object.entries(freqMaps)) {
        result.push(value)
      }
      
      return result;
    }

    determineFrequencyString(str: string): string {
        const freqArray = Array(26).fill(0);

        for(let character of str) {
          const index = character.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);
          freqArray[index]++;
        }
        
        return freqArray.join('#');
    }
}
