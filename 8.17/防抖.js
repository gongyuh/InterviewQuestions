function debounce(event, time) {
  let timer = null;
  return function (...arg) {
    clearTimeout();
    timer = setTimeout(() => {
      event.apply(this, arg);
    }, time);
  };
}

function throttle(event, time) {
  let timer = null;
  if (!time) {
    return function (...arg) {
      timer = setTimeout(() => {
        timer = null;
        event.apply(this, arg);
      }, time);
    };
  }
}
