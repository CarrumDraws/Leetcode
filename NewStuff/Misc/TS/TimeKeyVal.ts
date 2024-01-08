class TimeMap {
  hash: object;
  constructor() {
    this.hash = {}; // Stores key: [[time, val], [time, val], [time, val]];
  }

  set(key: string, value: string, timestamp: number): void {
    // Store into this.hash
    // Note: Timestamps are strictly increasing, so simply push to end!
    if (!this.hash[key]) this.hash[key] = [];
    this.hash[key].push([timestamp, value]);
  }

  get(key: string, timestamp: number): string {
    if (!this.hash[key]) return ""; // Could access nonexistant key
    let times: [number, string][] = this.hash[key];
    let left: number = 0;
    let right: number = times.length - 1;
    let idx: number | null = null;
    while (left <= right) {
      let mid: number = Math.floor((left + right) / 2);
      if (times[mid][0] <= timestamp) {
        idx = mid;
        left = mid + 1;
        if (times[mid][0] == timestamp) break;
      } else right = mid - 1;
    }
    return idx === null ? "" : times[idx][1]; // Could access bad timestamp
  }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
