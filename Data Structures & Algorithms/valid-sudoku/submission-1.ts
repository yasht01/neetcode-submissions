class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
      for (let i = 0; i < 9; i++) {
        const rowEntries = this.calculateRowEntries(board, i);
        const rowSet = new Set(rowEntries);
        if (rowSet.size !== rowEntries.length) return false;
      }

      for (let i = 0; i < 9; i++) {
        const columnEntries = this.calculateColumnEntries(board, i);
        const columnSet = new Set(columnEntries);
        if (columnSet.size !== columnEntries.length) return false;
      }

      for (let i = 0; i < 9; i += 3) {
        for (let j = 0; j < 9; j += 3) {
          const boxEntries = this.calculateBoxEntries(board, i, j);
          const boxSet = new Set(boxEntries);
          if (boxSet.size !== boxEntries.length) return false;
        }
      }
      
      return true;
    }

    calculateRowEntries(board: string[][], row: number): number[] {
      let result: number[] = [];

      for (let i = 0; i < 9; i++) {
        if (board[i][row] !== ".") {
          result.push(parseInt(board[i][row]));
        }
      }

      return result;
    }

    calculateColumnEntries(board: string[][], column: number): number[] {
      let result: number[] = [];

      for (let i = 0; i < 9; i++) {
        if (board[column][i] !== ".") {
          result.push(parseInt(board[column][i]));
        }
      }

      return result;
    }

    calculateBoxEntries(board: string[][], rowIndex: number, columnIndex: number): number[] {
      let result: number[] = [];

      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (board[rowIndex + i][columnIndex + j] !== ".") {
            result.push(parseInt(board[rowIndex + i][columnIndex + j]));
          }
        }
      }

      console.log(result)

      return result;
    }
}
