class TimeMap {
    private keyStore : Map<string, [number, string][]>;

    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key: string, value: string, timestamp: number): void {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }

        this.keyStore.get(key).push([timestamp, value]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key: string, timestamp: number): string {
        if (!this.keyStore.get(key)) {
            return "";
        }

        let arr = this.keyStore.get(key);
        let start = 0, end = arr.length - 1;
        let previousIndex = -1;

        while (start <= end) {
            let mid = start + Math.floor((end - start) / 2);
            let comparedValue = arr[mid][0];

            if (comparedValue === timestamp) {
                previousIndex = mid;
                break;
            } else if (comparedValue < timestamp) {
                previousIndex = mid;
                start = mid + 1;
            } else end = mid - 1;
        }

        if (previousIndex === -1) return "";
        else {
            return arr[previousIndex][1];
        }
    }
}
