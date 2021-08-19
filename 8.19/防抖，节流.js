function debouce(event, time) {
  let timer = null;
  return function (...arg) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      event.apply(this, arg);
    }, time);
  };
}

//节流
function throttle(event, time) {
  let timer = null;
  return function (...arg) {
    timer = null;
    timer = setTimeout(() => {
      event.apply(this, arg);
    }, time);
  };
}
