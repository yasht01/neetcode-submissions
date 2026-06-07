class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
      let encodedString = "";

      for (let str of strs) {
        encodedString += ("#" + str.length.toString() + "#" + str);
      }

      return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
      let decodedStrings: string[] = [];

      for (let index = 0; index < str.length - 1;) {
        const seperator = "#";
        let length;

        if (str[index] === seperator) {
          index++;

          let numberString = "";
          while (str[index] !== "#") {
            numberString += str[index];
            index++;
          }

          index++;

          const wordLength = parseInt(numberString);
          let word = "";

          for (let wordIndex = 0; wordIndex < wordLength; wordIndex++) {
            word += str[index + wordIndex];
          }

          index += wordLength;
          decodedStrings.push(word);
        }
      }
      
      return decodedStrings;
    }
}
 