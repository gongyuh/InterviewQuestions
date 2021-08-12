//debounce
function debounce(time, event, flag) {
  let timer = null;
  return function (...arg) {
    clearTimeout(timer);
    if (!flag && timer) {
      event.apply(this, arg);
    }
    timer = setTimeout(() => {
      event.apply(this, arg);
    }, time);
  };
}

//场景
window.addEventListener('resize', debouce(200, 'drag', true));

//throttle
function throttle(event, time) {
  let timer = null;
  return function (...arg) {
    timer = setTimeout(() => {
      timer = null;
      event.apply(this, arg);
    }, time);
  };
}
