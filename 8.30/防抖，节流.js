//防抖函数
function debonce(event, time) {
  let timer = null;
  return function (...arg) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      event.apply(this, arg);
    }, time);
  };
}
//节流函数
function throtle(event, time) {
  let timer = null;
  return function (...arg) {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        event.apply(this, arg);
      }, time);
    }
  };
}
