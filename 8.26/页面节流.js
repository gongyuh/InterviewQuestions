function throttle(event, time) {
  let timer;
  return function fn(...arg) {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        event.apply(this, arg);
      }, time);
    }
  };
}

function debounce(event, time) {
  let timer = null;
  return function (...arg) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      event.apply(this, arg);
    }, time);
  };
}
