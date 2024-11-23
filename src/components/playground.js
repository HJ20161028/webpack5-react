function refreshData(data) {
  let timer = null;
  const timeInterval = 1000;
  let pastMilliseconds = timeInterval;
  timer = setInterval(() => {
    let hasRemainingTimer = false;
    const newData = data.map((item) => {
      if (item.alarmShelvProcessVO) {
        const record = item.alarmShelvProcessVO;
        const endTime = record.endTime;
        const reminderTime = record.reminderTime * 60 * 1000;
        const currentTime = record.currentTime + pastMilliseconds;
        const countDownTime = endTime - currentTime;
        if (countDownTime <= 0) {
          return { ...item, showTimer: false };
        } else if (countDownTime <= reminderTime) {
          hasRemainingTimer = true;
          return { ...item, showTimer: true }
        }
        return { ...item, showTimer: false };
      }
    });
    pastMilliseconds += timeInterval;
    // setTableData(newData);
    if (!hasRemainingTimer) {
      clearInterval(timer);
    }
  }, timeInterval);
}

const testData = [{
  startTime: 1000,
  endTime: 3000,
  reminderTime: 1000,
}, {
  startTime: 1000,
  endTime: 5000,
  reminderTime: 3000,
}];

function refresh(data) {
  let timer = null;
  const timeInterval = 1000;
  let pastMilliseconds = timeInterval;
  timer = setInterval(() => {
    let hasRemainingTimer = false;
    const newData = data.map((item) => {
      const currentTime = item.startTime + pastMilliseconds;
      const countDownTime = item.endTime - currentTime;
      if (countDownTime <= 0) {
        return { ...item, showReminder: false};
      } else if (countDownTime <= item.reminderTime) {
        hasRemainingTimer = true;
        return { ...item, showReminder: true};
      }
      return { ...item, showTimer: false };
    });
    console.log('pastMilliseconds' + pastMilliseconds);
    pastMilliseconds += timeInterval;
    console.log(newData);
    if (!hasRemainingTimer) {
      clearInterval(timer);
    }
  }, timeInterval);
}