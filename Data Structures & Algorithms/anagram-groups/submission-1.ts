class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
      let anagramMaps: Record<string, string[]> = {};

      for (let str of strs) {
        let sorted = str.split("").sort().join("");
        if (anagramMaps[sorted]) {
          anagramMaps[sorted].push(str);
        } else {
          anagramMaps[sorted] = [str];
        }
      }

      let result: string[][] = [];

      for (let [key, value] of Object.entries(anagramMaps)) {
        result.push(value);
      }
      
      return result;
    }
}
