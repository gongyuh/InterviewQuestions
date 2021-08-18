//先定义三种状态
const PENDING = 'pending';
const FULFILLED = 'fulfill';
const REJECTED = 'rejected';

function Mypromise(executor) {
  this.state = PENDING;
  this.value = null;
  this.reason = null;
  onFulfilledCallbacks = [];
  onRejectedCallbacks = [];

  const resolve = (value) => {
    if (this.state === PENDING) {
      this.state = FULFILLED;
      this.value = value;
      this.onFulfilledCallbacks.forEach((fun) => {
        fun();
      });
    }
  };

  const reject = (reason) => {
    if ((this.state = PENDING)) {
      this.state = REJECTED;
      this.reason = reason;
      this.onRejectedCallbacks.forEach((fun) => {
        fun();
      });
    }
  };

  try {
    executor(resolve, reject);
  } catch (reason) {
    reject(reason);
  }
}

Mypromise.prototype.then = function (onFulFilled, onRejected) {
  if (typeof onFulFilled !== 'function') {
    onFulFilled = function (value) {
      return value;
    };
  }
  if (typeof onRejected !== 'function') {
    onRejected = function (reason) {
      return reason;
    };
  }

  const promise2 = new Promise((resolve, reject) => {
    switch (this.state) {
      case FULFILLED:
        setTimeout(() => {
          try {
            const x = onFulFilled(this.value);
            resolve(x);
          } catch (reason) {
            reject(reason);
          }
        }, 0);
        break;

      case REJECTED:
        setTimeout(() => {
          try {
            const x = onRejected(this.value);
            resolve(x);
          } catch (reason) {
            reject(reason);
          }
        }, 0);
        break;

      case PENDING:
        this.onFulfilledCallbacks.push(() => {
          setTimeout(() => {
            try {
              const x = onFulFilled(this.value);
              resolve(x);
            } catch (reason) {
              reject(reason);
            }
          }, 0);
        });

        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              const x = onRejected(this.value);
              resolve(x);
            } catch (reason) {
              reject(reason);
            }
          }, 0);
        });
    }
  });
  return promise2;
};

Mypromise.prototype.catch = function (onRejected) {
  return this.then(null, onRejected);
};

//静态方法
Mypromise.resolve = function (value) {
  return new Mypromise((resolve, reject) => {
    resolve(value);
  });
};

Mypromise.reject = function (reason) {
  return new Mypromise((resolve, reject) => {
    reject(reason);
  });
};

//all && race
Mypromise.all = function (promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      resolve([]);
    } else {
      let res = [];
      let index = 0;
      for (let i = 0; i < promises.length; i++) {
        promises[i].then((data) => {
          res[i] = data;
          if (++index === promises.length) {
            resolve(res);
          }
        }),
          (err) => {
            reject(err);
            return;
          };
      }
    }
  });
};

Mypromise.prototype.race = function (promises) {
  return new Mypromise((resolve, reject) => {
    if (promises.length === 0) {
      resolve([]);
    } else {
      for (let i = 0; i < promises.length; i++) {
        promises.then(
          (data) => {
            resolve(data);
          },
          (err) => {
            reject(err);
            return;
          }
        );
      }
    }
  });
};
