import React from "react";
import dataRequestMonitor from "../common/dataRequestMonitor";

export function FetchTest() {
  function getData() {
    if (dataRequestMonitor.shouldCacheBeApplied(new Date().valueOf())) {
      return new Promise((resolve) => {
        const requestTimer = setInterval(() => {
          if (dataRequestMonitor.isSuccessful) {
            clearInterval(requestTimer);
            console.log('dataRequestMonitor.shouldCacheBeApplied', dataRequestMonitor.data)
            resolve(dataRequestMonitor.data);
          }
        }, 300);
      });
    } else {
      dataRequestMonitor.startFetching();
      return fetch('./assets/data.json').then((resp) => {
        return resp.json();
      })
    }
  }
  function runTest() {
    getData().then((resp) => {
      dataRequestMonitor.succeed(resp);
      console.log(resp);
    });
    getData().then((resp) => {
      console.log(resp);
    });
    getData().then((resp) => {
      console.log(resp);
    });
  }
  return (
    <button onClick={runTest}>
      Start Fetch test.
    </button>
  )
}