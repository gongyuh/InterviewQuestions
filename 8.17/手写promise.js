const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

function Mypromise(executor) {
  this.value = null;
  this.reason = null;
  this.state = PENDING;
  this.onFulfillCallbacks = [];
  this.onRejectedCallbacks = [];

  const resolve = function (value) {
    if (this.state === PENDING) {
      this.state = FULFILLED;
      this.value = value;
      this.onFulfillCallbacks.forEach((fn) => {
        fn();
      });
    }
  };

  const reject = function (reason) {
    if (this.state === PENDING) {
      this.state = REJECTED;
      this.reason = reason;
      this.onRejectedCallbacks.forEach((fn) => {
        fn();
      });
    }
  };

  try {
    executor(resolve, reject);
  } catch {
    reject(reason);
  }
}

Mypromise.prototype.then = function (onFulfill, onRejected) {
  let promise2 = new Mypromise(resolve, (reject) => {
    switch (this.state) {
      case FULFILLED:
        setTimeout(() => {
          try {
            const x = onFulfill(this.value);
            resolve(x);
          } catch (reason) {
            reject(reason);
          }
        }, 0);
        break;
      case REJECTED:
        setTimeout(() => {
          try {
            const x = onRejected(this.reason);
            reject(x);
          } catch (reason) {
            reject(reason);
          }
        }, 0);
        break;
      case PENDING:
        break;
      default:
        break;
    }
  });
  return promise2;
};
