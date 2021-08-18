function EventEmitter() {
  this._maxListener = 10;
  this._events = Object.create(null);
}

EventEmitter.prototype.addListener = function (type, listener, prepend) {
  if (!this._events) {
    this._events = Object.create(null);
  }

  if (this._events[type]) {
    if (prepend) {
      this._events[type].unshift(listener);
    } else {
      this._events[type].push(listener);
    }
  } else {
    this._events[type] = listener;
  }
};

EventEmitter.prototype.removeListener = function (type, listener) {
  if (Array.isArray(this._events[type])) {
    if (!listener) {
      delete this._events[type];
    }
  } else {
    this._events[type] = this._events[type].filter((e) => e !== listener && e.origin !== listener);
  }
};

//向队列事件中添加事件，只执行一次
EventEmitter.prototype.once = function (type, listener) {
  const once = (...arg) => {
    this.listener.apply(this, arg);
    this.removeListener(type, listener);
  };
  once.origin = listener;
  this.addListener(type, once);
};

EventEmitter.prototype.emit = function (type, ...args) {
  if (Array.isArray(this._events[type])) {
    this._events[type].forEach((fn) => {
      fn.apply(this, args);
    });
  }
};
