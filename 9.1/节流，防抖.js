function throttle(event, time) {
  let timer = null;
  return function (...arg) {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        event.call(this, arg);
      }, time);
    }
  };
}

function debouce(event, time) {
  let timer = null;
  return function (...arg) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      event.call(this, arg);
    }, time);
  };
}
