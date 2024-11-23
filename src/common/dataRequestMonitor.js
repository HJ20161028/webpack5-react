export class DataRequestMonitor {
  constructor() {
    this.isFetching = false;
    this.lastUpdateTime = 0;
    this.data = null;
    this.isSuccessful = true;
    this.cacheTimeLimit = 1000;
  }

  startFetching() {
    this.isFetching = true;
  }

  succeed(newData) {
    this.data = newData;
    this.isFetching = false;
    this.lastUpdateTime = new Date().valueOf();
    this.isSuccessful = true;
  }

  fail() {
    this.isFetching = false;
    this.isSuccessful = false;
  }

  shouldCacheBeApplied(requestTime) {
    return this.isFetching || (requestTime - this.lastUpdateTime) <= this.cacheTimeLimit;
  }
}

const dataRequestMonitor = new DataRequestMonitor();
export default dataRequestMonitor;